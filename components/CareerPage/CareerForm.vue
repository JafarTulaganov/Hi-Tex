<template>
  <div class="wrap">
    <div class="container">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        class="cardo"
      >
        <h4 class="title">{{ $store.state.translations['inner.request'] }}</h4>
        <form @submit.prevent="onSubmit">
          <div class="top">
            <input
              v-model="full_name"
              type="text"
              :placeholder="$store.state.translations['main.main-20']"
              required
            />
            <input
              v-model="email"
              type="email"
              :placeholder="$store.state.translations['main.main-22']"
            />
            <input
              id="keitai"
              v-model="number"
              type="text"
              :placeholder="$store.state.translations['main.main-21']"
              required
            />
            <select v-model="vacansy" @change="changeVacancy" name="">
              <option value="" disabled selected>Select your option</option>
              <option v-for="item in total" :key="item.id" :value="item">
                {{ item.name }}
              </option>
            </select>
          </div>
          <textarea v-model="message" placeholder="Messages"></textarea>
          <div class="content">
            <button type="submit">
              {{ $store.state.translations['inner.request'] }}
              <i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import IMask from 'imask'

import formApi from '@/api/form.js'

export default {
  name: 'HajtexCareerForm',

  props: ['vacancies'],

  data() {
    return {
      full_name: '',
      number: '',
      message: '',
      vacansy: '',
      email: '',
      total: [],

      token: '6034610821:AAEO4iFLAnblVYdIWutzVg_Mz6NhuBiqjow',
      chatId: '-1001911687580',
    }
  },

  mounted() {
    let first = this.vacancies[0].vacansy
    let second = this.vacancies[1].vacansy

    this.total = first.concat(second)

    const element = document.getElementById('keitai')
    const maskOptions = {
      mask: '+{998}(00)000-00-00',
    }
    const mask = IMask(element, maskOptions)

    return {
      mask,
    }
  },

  methods: {
    async onSubmit() {
      const formData = {
        full_name: this.full_name,
        number: this.number,
        message: this.message,
        email: this.email,
        vacansy: parseInt(this.vacansy.id),
      }

      if (this.number.length > 14) {
        const res = await formApi.sendApplication(formData)

        if (res && res.status === 201) {
          this.$toast.success('Successfully sent')
        } else {
          this.$toast.error('Error')
        }
      }

      const fullMessage = `Name: ${this.full_name}\nPhone Number: ${this.number}\nMessage: ${this.message}\nVacancy: ${this.vacansy.name}`

      this.$http
        .post(
          `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullMessage}`
        )
        .then((response) => {
          console.log('Successfully', response)
          this.full_name = ''
          this.number = ''
          this.message = ''
          this.email = ''
        }),
        (error) => {
          console.log(error)
        }
    },
    changeVacancy() {},
  },
}
</script>

<style scoped>
.content button {
  padding: 12px 46px;
  width: auto;
  border: 1px solid #b2061e;
  border-radius: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #b2061e;
  font-family: var(--medium);
  transition: 0.4s;
}
.content button:hover {
  background: #b2061e;
  color: white;
}
.cardo {
  background: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  padding: 48px;
}
.title {
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  text-transform: uppercase;
  font-family: var(--decor);
  margin-bottom: 40px;
}
.top {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}
input,
select,
textarea {
  padding: 16px;
  border: 1px solid #ebebeb;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
}
input::placeholder,
textarea::placeholder {
  color: #9a999b;
}
textarea {
  width: 100%;
  resize: none;
  min-height: 180px;
  margin-bottom: 24px;
}
.content {
  display: flex;
  justify-content: flex-end;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-bottom: 80px;
  }
  .cardo {
    padding: 24px;
  }
  .title {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 16px;
  }
  .top {
    grid-template-columns: repeat(1, 1fr);
  }
  .content {
    justify-content: flex-start;
  }
  button {
    width: 100% !important;
  }
}
</style>
