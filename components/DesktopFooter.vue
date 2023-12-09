<template>
  <div class="wrap">
    <div class="container">
      <div class="top">
        <div class="brand">
          <img src="@/assets/img/logo/brand-alt.svg" alt="" />
        </div>
      </div>
      <div class="mid">
        <div class="row">
          <div class="col-md-3 col-xs-12">
            <h4 class="tite" style="margin-bottom: 16px">
              {{ $store.state.translations['main.contacts'] }}
            </h4>
            <div class="items">
              <div class="item">
                <p class="sup">
                  {{ $store.state.translations['main.main-27'] }}
                </p>
                <a href="#" class="txt nelly">{{ info.nbm }}</a>
              </div>

              <div class="item">
                <p class="sup">
                  {{ $store.state.translations['main.main-26'] }}
                </p>
                <a href="#" class="txt nelly">{{ info.email }}</a>
              </div>
            </div>

            <div class="item last">
              <p class="sup">{{ $store.state.translations['main.address'] }}</p>
              <a href="#" class="txt">{{ info.adres }}</a>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="links">
              <ul>
                <h4 class="tite">
                  {{ $store.state.translations['inner.menu'] }}
                </h4>
                <li>
                  <nuxt-link :to="`/${$route.params.lang}/about`"
                    >{{ $store.state.translations['main.about'] }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="`/${$route.params.lang}/investors`">{{
                    $store.state.translations['main.invest']
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="`/${$route.params.lang}/certificates`">{{
                    $store.state.translations['main.about-2']
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="`/${$route.params.lang}/news`">{{
                    $store.state.translations['main.news']
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="`/${$route.params.lang}/contacts`">{{
                    $store.state.translations['main.contacts']
                  }}</nuxt-link>
                </li>
              </ul>
              <ul>
                <h4 class="tite">
                  {{ $store.state.translations['main.product'] }}
                </h4>
                <li v-for="item in services" :key="item.id">
                  <nuxt-link
                    :to="`/${$route.params.lang}/businesses/${item.slug}`"
                    >{{ item.title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-xs-12">
            <p class="info">
              {{ $store.state.translations['main.main-31'] }}
            </p>
            <div class="items socials">
              <p class="sup">{{ $store.state.translations['main.main-34'] }}</p>
              <div class="socs">
                <a :href="info.youtube" target="_blank" class="soc">
                  <i class="bx bxl-youtube"></i>
                </a>
                <a :href="info.facebook" target="_blank" class="soc">
                  <i class="bx bxl-facebook"></i>
                </a>
                <a :href="info.instagram" target="_blank" class="soc">
                  <i class="bx bxl-instagram-alt"></i>
                </a>
                <a :href="info.telegram" target="_blank" class="soc">
                  <i class="bx bxl-telegram"></i>
                </a>
                <a :href="info.linked_in" target="_blank" class="soc">
                  <i class="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p class="info mamba">
          {{ $store.state.translations['main.main-32'] }}
        </p>

        <p class="info">{{ $store.state.translations['main.by'] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import mediaApi from '@/api/media'
import servicesApi from '@/api/services'

export default {
  name: 'HajtexDeskropFooter',

  data() {
    return {
      info: {},
      services: {},
    }
  },

  async fetch() {
    const info = await mediaApi.getInfo(this.$axios, this.$route.params.lang)
    const services = await servicesApi.getServices(
      this.$axios,
      this.$route.params.lang
    )

    this.info = info
    this.services = services
  },

  mounted() {},

  methods: {
    async fetchAll() {
      const info = await mediaApi.getInfo(this.$axios, this.$route.params.lang)
      const services = await servicesApi.getServices(
        this.$axios,
        this.$route.params.lang
      )
      this.info = info
      this.services = services
    },
  },

  computed: {
    currentLang() {
      return this.$route.params.lang
    },
  },

  watch: {
    currentLang() {
      this.fetchAll()
    },
  },
}
</script>

<style scoped>
.wrap {
  padding: 48px 0;
  background: var(--blue);
  color: white;
}
.top {
  margin-bottom: 48px;
}
.txt {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.last .txt {
  max-width: 400px;
  display: block;
}
.txt:hover {
  text-decoration: none;
}
.nelly {
  position: relative;
}
.info {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
}
.sup {
  color: #bec4d2;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%; /* 18.2px */
  margin-bottom: 4px;
}
.items {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
}
.mid {
  margin-bottom: 96px;
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.socials {
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.socs {
  display: flex;
  gap: 40px;
}
.soc {
  font-size: 32px;
  color: white;
}
.links {
  display: flex;
  justify-content: space-around;
}
.tite {
  color: var(--White, #fff);
  font-family: var(--decor);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 19.8px */
  text-transform: uppercase;
  margin-bottom: 0;
}
.links ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.links a {
  color: #bec4d2;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.sup {
  color: white !important;
}
@media screen and (max-width: 1500px) {
  .txt {
    font-size: 32px;
  }
}
@media screen and (max-width: 1024px) {
  .txt {
    font-weight: 400;
    font-size: 20px;
    line-height: 110%;
  }
  .info {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    max-width: 90%;
  }
  .items {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 40px;
  }
  .items .txt {
    font-size: 24px;
  }
  .last {
    margin-bottom: 40px;
  }
  .socials {
    gap: 0px;
    margin-bottom: 0;
  }
  .item .sup,
  .socials .sup {
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    color: white;
  }
  .bottom {
    flex-direction: column;
    align-items: flex-start;
  }
  .bottom .links {
    order: 0;
    margin: 0 0 40px 0;
  }
  .bottom .links ul {
    max-width: 100%;
    gap: 16px;
  }
  .mamba {
    order: 1;
  }
  .mid {
    margin-bottom: 40px;
  }
  .links {
    flex-direction: column;
    justify-content: flex-start;
    gap: 24px;
    margin-bottom: 32px;
  }
}
</style>
