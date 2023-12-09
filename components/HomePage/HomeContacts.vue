<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-xs-12 mid">
          <div class="right">
            <form @submit.prevent="onSubmit">
              <h4 class="title">
                {{ $store.state.translations['main.main-19'] }}
              </h4>

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
                id="num"
                v-model="number"
                type="text"
                :placeholder="$store.state.translations['main.main-21']"
                required
              />

              <textarea v-model="message" placeholder="Message"></textarea>

              <button type="submit" name="submitter">
                {{ $store.state.translations['main.main-6'] }}
                <i class="bx bx-right-arrow-alt"></i>
              </button>
            </form>
          </div>

          <div class="left">
            <div
              class="map"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="200"
              v-html="info.map"
            ></div>

            <div class="cards">
              <div
                class="cardo"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="300"
              >
                <div class="item">
                  <p class="sup">
                    {{ $store.state.translations['main.main-25'] }}
                  </p>
                  <p class="txt">
                    {{ info.adres }}
                  </p>
                </div>
                <div class="items">
                  <div class="item">
                    <p class="sup">
                      {{ $store.state.translations['main.main-27'] }}
                    </p>
                    <a href="#" class="txt">{{ info.nbm }}</a>
                  </div>
                  <div class="item">
                    <p class="sup">
                      {{ $store.state.translations['main.main-26'] }}
                    </p>
                    <a href="#" class="txt">{{ info.email }}</a>
                  </div>
                </div>
                <div class="item">
                  <p class="sub">Email</p>
                  <div class="flexer">
                    <a :href="info.instagram" target="_blank" class="soc"
                      >Instagram <i class="bx bx-right-arrow-alt"></i
                    ></a>
                    <a :href="info.telegram" target="_blank" class="soc"
                      >Telegram <i class="bx bx-right-arrow-alt"></i
                    ></a>
                    <a :href="info.facebook" target="_blank" class="soc"
                      >Facebook <i class="bx bx-right-arrow-alt"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div
                class="cardo"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="400"
              >
                <div class="lil-items">
                  <div class="lil-item">
                    <div class="img">
                      <img
                        src="@/assets/img/logo/target.svg"
                        alt=""
                        class="pic"
                      />
                    </div>
                    <div class="content">
                      <p class="lil-title">
                        {{ $store.state.translations['main.address-1'] }}
                      </p>
                      <p class="lil-txt">
                        {{ $store.state.translations['main.address-2'] }}
                      </p>
                    </div>
                  </div>
                  <div class="lil-item">
                    <div class="img">
                      <img
                        src="@/assets/img/logo/target.svg"
                        alt=""
                        class="pic"
                      />
                    </div>
                    <div class="content">
                      <p class="lil-title">
                        {{ $store.state.translations['main.address-3'] }}
                      </p>
                      <p class="lil-txt">
                        {{ $store.state.translations['main.address-4'] }}
                      </p>
                    </div>
                  </div>
                  <div class="lil-item">
                    <div class="img">
                      <img
                        src="@/assets/img/logo/target.svg"
                        alt=""
                        class="pic"
                      />
                    </div>
                    <div class="content">
                      <p class="lil-title">
                        {{ $store.state.translations['main.address-5'] }}
                      </p>
                      <p class="lil-txt">
                        {{ $store.state.translations['main.address-6'] }}
                      </p>
                    </div>
                  </div>

                  <div class="lil-item">
                    <div class="img">
                      <img
                        src="@/assets/img/logo/target.svg"
                        alt=""
                        class="pic"
                      />
                    </div>
                    <div class="content">
                      <p class="lil-title">
                        {{ $store.state.translations['main.new-address-1'] }}
                      </p>
                      <p class="lil-txt">
                        {{ $store.state.translations['main.new-address-2'] }}
                      </p>
                    </div>
                  </div>

                  <div class="lil-item">
                    <div class="img">
                      <img
                        src="@/assets/img/logo/target.svg"
                        alt=""
                        class="pic"
                      />
                    </div>
                    <div class="content">
                      <p class="lil-title">
                        {{ $store.state.translations['main.new-address-3'] }}
                      </p>
                      <p class="lil-txt">
                        {{ $store.state.translations['main.new-address-4'] }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import IMask from 'imask'

import formApi from '@/api/form.js'

export default {
  name: 'HajtexHomeContacts',

  data() {
    return {
      full_name: '',
      number: '',
      email: '',
      message: '',

      token: '6034610821:AAEO4iFLAnblVYdIWutzVg_Mz6NhuBiqjow',
      chatId: '-1001911687580',
    }
  },

  props: ['info'],

  mounted() {
    const element = document.getElementById('num')
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
        message: this.message,
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

      const fullMessage = `Name: ${this.full_name}\nPhone Number: ${this.number}\nMessage: ${this.message}`

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
  },
}
</script>

<style scoped>
.wrap {
  padding: 98px 0 72px 0;
  background: #f8f8f8;
}
input,
textarea {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  padding: 16px 0;
  border-bottom: 1px solid #c2c2c3;
}
textarea {
  min-height: 140px;
  resize: none;
}
form {
  display: flex;
  flex-direction: column;
  gap: 56px;
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
  border: 1px solid #5d5d5f;
  border-radius: 500px;
  padding: 18px 0;
  transition: 0.4s;
}
button:hover {
  background: var(--blue);
  color: white;
}
.mid {
  display: grid;
  grid-template-columns: 4fr 6fr;
}
.title {
  font-weight: 500;
  font-size: 48px;
  line-height: 130%;
  font-family: var(--decor);
  margin-bottom: 0;
  text-transform: uppercase;
}
.map::v-deep iframe {
  height: 400px;
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
}
.sup {
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: #5d5d5f;
  margin-bottom: 8px;
}
.txt {
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  color: var(--black);
  font-family: var(--medium);
}
.item {
  margin-bottom: 24px;
}
.txt:hover {
  text-decoration: none;
}
.items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flexer {
  display: flex;
  align-items: center;
  gap: 40px;
}
.right {
  background: white;
  border-radius: 12px;
  padding: 56px 40px;
}
.mid {
  gap: 20px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.cardo {
  padding: 24px;
  border-radius: 12px;
  background: white;
}
.txt {
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
}
.lil-item {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}
.lil-title {
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #020105;
  margin-bottom: 8px;
}
.lil-txt {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin: 0;
}
.img img {
  max-width: 28px;
}
.txt {
  margin: 0;
}
.soc {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  background: #f8f8f8;
  border-radius: 72px;
  padding: 10px 16px;
  color: var(--black);
  display: flex;
  align-items: center;
  gap: 8px;
}
.soc:hover {
  text-decoration: none;
}
@media screen and (max-width: 1500px) {
  .right {
    padding: 32px;
    height: fit-content;
  }
  .title {
    font-size: 32px;
  }
  form {
    gap: 14px;
  }
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 80px 0;
  }
  .mid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .right {
    padding: 0;
    background: #f8f8f8;
  }
  .title {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
  }
  form {
    gap: 32px;
  }
  textarea {
    min-height: unset;
  }
  button {
    padding: 12px 0;
  }
  .mid {
    gap: 80px;
  }
  .left {
    position: relative;
  }
  .flexer {
    gap: 0;
    justify-content: space-between;
  }
  .soc {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    padding: 0;
    background: none;
  }
  .soc i {
    display: none;
  }
  .txt {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
  }
  .lil-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
  }
  .lil-txt {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
}
</style>
