<template>
  <div class="wrap">
    <img src="@/assets/img/logo/brand.svg" alt="" class="pic" />
    <div class="container">
      <div class="row">
        <div class="col-lg-1 col-xs-0"></div>
        <div class="col-lg-10 col-xs-12 mid">
          <div class="content">
            <h4 class="title">
              {{ $store.state.translations['main.main-2'] }}
              <span class="span">
                {{ $store.state.translations['main.cumpany'] }}
              </span>
              ?
            </h4>
            <p class="sub">
              {{ $store.state.translations['main.main-3'] }}
            </p>
          </div>
          <div class="form">
            <form @submit.prevent="onSubmit">
              <input
                v-model="full_name"
                type="text"
                :placeholder="$store.state.translations['main.main-4']"
                required
              />
              <input
                v-model="email"
                type="email"
                :placeholder="$store.state.translations['main.main-22']"
              />
              <input
                v-model="number"
                id="number"
                type="text"
                :placeholder="$store.state.translations['main.main-5']"
                required
              />
              <button type="submit" name="submit">
                {{ $store.state.translations['main.main-6'] }}
                <i class="bx bx-right-arrow-alt"></i>
              </button>
            </form>
          </div>
        </div>
        <div class="col-lg-1 col-xs-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import IMask from 'imask'

import formApi from '@/api/form.js'

export default {
  name: 'HajtexHomeForm',

  data() {
    return {
      full_name: '',
      number: '',
      email: '',

      token: '6034610821:AAEO4iFLAnblVYdIWutzVg_Mz6NhuBiqjow',
      chatId: '-1001911687580',
    }
  },

  mounted() {
    const element = document.getElementById('number')
    const maskOptions = {
      mask: '+{998}(00)000-00-00',
    }
    const mask = IMask(element, maskOptions)

    return mask
  },

  methods: {
    async onSubmit() {
      const formData = {
        full_name: this.full_name,
        number: this.number,
        email: this.email,
      }

      if (this.number.length > 14) {
        const res = await formApi.sendApplication(formData)

        if (res && res.status === 201) {
          this.$toast.success('Successfully sent')
        } else {
          this.$toast.error('Error')
        }
      }

      const message = `Name: ${this.full_name}\nPhone Number: ${this.number}`

      this.$http
        .post(
          `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${message}`
        )
        .then((response) => {
          console.log('Successfully', response)
          this.full_name = ''
          this.number = ''
          this.email = ''
        }),
        (error) => {
          console.log(error)
        }
    },
  },
}
</script>

<style scoped>
.wrap {
  background: var(--blue);
  color: white;
  padding: 100px 0;
  position: relative;
}
.mid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
}
.title {
  font-weight: 400;
  font-size: 55px;
  line-height: 110%;
  font-family: var(--decor);
  margin-bottom: 16px;
  text-transform: uppercase;
}
.sub {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  max-width: 600px;
}
input {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  padding: 16px 0;
  border-bottom: 1px solid #c2c2c3;
}
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 559px;
  margin: 0 auto;
}
button {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;
  border-radius: 500px;
  padding: 18px 0;
  transition: 0.4s;
}
button:hover {
  background: white;
  color: black;
}
.pic {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 500px;
  left: 40px;
  top: 100px;
  opacity: 0.1;
}
.span {
  color: #e8314b;
}
@media screen and (max-width: 1500px) {
  .title {
    font-size: 40px;
  }
  .sub {
    max-width: 90%;
  }
}
@media screen and (max-width: 1024px) {
  .mid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .title {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 16px;
  }
  .sub {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    max-width: 90%;
  }
  input,
  button {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    padding: 16px 0;
  }
  .wrap {
    background: #1d1f21;
    padding: 40px 0;
  }
  .pic {
    left: -100px;
    top: 150px;
  }
  .span {
    color: white;
  }
}
</style>
