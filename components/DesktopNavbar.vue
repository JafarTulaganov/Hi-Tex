<template>
  <div id="navbar" class="wrap" data-aos="fade-down">
    <div class="container container-long">
      <div class="left">
        <ul class="links">
          <!-- <li>
            <NuxtLink :to="`/${$route.params.lang}`">{{
              $store.state.translations['main.home']
            }}</NuxtLink>
          </li> -->
          <li class="wick">
            <button class="taxi">
              {{ $store.state.translations['main.main-36'] }}
              <i class="bx bx-chevron-down"></i>
            </button>
            <div class="dropdown">
              <ul>
                <li>
                  <NuxtLink :to="`/${$route.params.lang}/about`">{{
                    $store.state.translations['main.about']
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="`/${$route.params.lang}/management`">{{
                    $store.state.translations['main.about-4']
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="`/${$route.params.lang}/history`">{{
                    $store.state.translations['main.about-3']
                  }}</NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="`/${$route.params.lang}/certificates`">{{
                    $store.state.translations['main.about-2']
                  }}</NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li class="wick">
            <button class="taxi">
              {{ $store.state.translations['main.other'] }}
              <i class="bx bx-chevron-down"></i>
            </button>
            <div class="dropdown">
              <ul>
                <li v-for="service in services" :key="service.id">
                  <NuxtLink
                    :to="`/${$route.params.lang}/businesses/${service.slug}`"
                    >{{ service.title }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="wick" v-if="factories.length > 0">
            <button class="taxi">
              {{ $store.state.translations['main.main-1'] }}
              <i class="bx bx-chevron-down"></i>
            </button>
            <div class="dropdown">
              <ul>
                <li v-for="factory in factories" :key="factory.id">
                  <NuxtLink
                    :to="`/${$route.params.lang}/factories/${factory.slug}`"
                    >{{ factory.title }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="wick">
            <button class="taxi">
              {{ $store.state.translations['main.investor'] }}
              <i class="bx bx-chevron-down"></i>
            </button>
            <div class="dropdown">
              <ul>
                <li v-for="item in investors" :key="item.id">
                  <NuxtLink
                    :to="`/${$route.params.lang}/investors/${item.slug}`"
                    >{{ item.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="wick">
            <button class="taxi">
              {{ $store.state.translations['main.products'] }}
              <i class="bx bx-chevron-down"></i>
            </button>
            <div class="dropdown">
              <ul>
                <li v-for="item in categories" :key="item.id">
                  <NuxtLink
                    :to="`/${$route.params.lang}/products/${item.id}`"
                    >{{ item.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="mid">
        <div class="brand">
          <NuxtLink class="brand-white" :to="`/${$route.params.lang}`">
            <img src="@/assets/img/logo/brand-alt.svg" alt="" />
          </NuxtLink>

          <NuxtLink class="brand-color" :to="`/${$route.params.lang}`">
            <img src="@/assets/img/logo/brand-color.svg" alt="" />
          </NuxtLink>
        </div>
      </div>
      <div class="right">
        <ul class="links">
          <li>
            <NuxtLink :to="`/${$route.params.lang}/sustainbility`">{{
              $store.state.translations['main.sus']
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="`/${$route.params.lang}/media`">{{
              $store.state.translations['main.media']
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="`/${$route.params.lang}/news`">{{
              $store.state.translations['main.news']
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="`/${$route.params.lang}/career`">{{
              $store.state.translations['main.career']
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="`/${$route.params.lang}/contacts`">{{
              $store.state.translations['main.contacts']
            }}</NuxtLink>
          </li>
        </ul>
        <div class="lang">
          <li>
            <button
              :class="{ disable: $route.params.lang == 'ru' }"
              @click="changeLang('ru')"
            >
              Rus
            </button>
          </li>
          |
          <li>
            <button
              :class="{ disable: $route.params.lang == 'en' }"
              @click="changeLang('en')"
            >
              Eng
            </button>
          </li>
          |
          <li>
            <button
              :class="{ disable: $route.params.lang == 'uz' }"
              @click="changeLang('uz')"
            >
              Uzb
            </button>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoriesApi from '@/api/categories.js'
import servicesApi from '@/api/services.js'
import investorsApi from '@/api/investors.js'

export default {
  name: 'DesktopNavbar',

  data() {
    return {
      categories: [],
      services: [],
      investors: [],
      factories: [],
    }
  },

  async fetch() {
    const categories = await categoriesApi.getCategories(
      this.$axios,
      this.$route.params.lang
    )
    const services = await servicesApi.getServices(
      this.$axios,
      this.$route.params.lang
    )
    const investors = await investorsApi.getInvestors(
      this.$axios,
      this.$route.params.lang
    )
    const factories = await servicesApi.getFactories(
      this.$axios,
      this.$route.params.lang
    )

    this.categories = categories
    this.categoriesChild = categories[0]
    this.services = services
    this.investors = investors
    this.factories = factories
  },

  computed: {
    getLang() {
      return this.$store.getters.language
    },
    currentLang() {
      return this.$route.params.lang
    },
  },

  mounted() {
    function scrollHeader() {
      const navbar = document.getElementById('navbar')
      if (this.scrollY >= 50) {
        navbar.classList.add('scroll-header', 'drop')
      } else {
        navbar.classList.remove('scroll-header', 'drop')
      }
    }
    window.addEventListener('scroll', scrollHeader)
  },

  methods: {
    changeLang(code) {
      this.$store.dispatch('actionLangRu', code)
      this.$router.replace({
        params: {
          lang: code,
        },
        query: this.$route.query,
      })
      localStorage.setItem('Lang', code)
    },

    async fetchAll() {
      const categories = await categoriesApi.getCategories(
        this.$axios,
        this.$route.params.lang
      )
      const services = await servicesApi.getServices(
        this.$axios,
        this.$route.params.lang
      )
      const investors = await investorsApi.getInvestors(
        this.$axios,
        this.$route.params.lang
      )
      const factories = await servicesApi.getFactories(
        this.$axios,
        this.$route.params.lang
      )

      this.categories = categories
      this.categoriesChild = categories[0]
      this.services = services
      this.investors = investors
      this.factories = factories
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
  padding: 20px 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  transition: 0.4s;
  height: 120px;
}
.container {
  display: grid;
  grid-template-columns: 4.5fr 1fr 4.5fr;
  align-items: center;
  position: relative;
  height: 100%;
}
.links {
  display: flex;
  align-items: center;
  gap: 32px;
}
.right {
  display: flex;
  align-content: center;
  justify-content: flex-end;
  gap: 112px;
}
.lang {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
}
.links a,
.lang a,
.taxi {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: white;
  font-family: var(--medium);
}
.links a:hover,
.lang a:hover {
  text-decoration: none;
}
.scroll-header,
.white {
  background: #f8f8f8;
  padding: 16px 0;
}
.scroll-header .brand-white,
.white .brand-white {
  display: none;
}
.brand-color {
  display: none;
  width: 80px;
}
.scroll-header .brand-color,
.white .brand-color {
  display: flex;
  align-items: center;
  justify-content: center;
}
.scroll-header .links a,
.scroll-header .lang a,
.white .links a,
.white .lang a,
.white .taxi {
  color: var(--black);
}
.drop {
  -webkit-box-shadow: 0px 1px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 1px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 1px 8px 0px rgba(34, 60, 80, 0.2);
}
.wick {
  position: relative;
}

.dropdown {
  opacity: 0;
  visibility: hidden;
  z-index: -1;
  pointer-events: none;
  transition: 0.4s;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  padding: 16px;
  border-radius: 12px;
  -webkit-box-shadow: 0px 1px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 1px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 1px 8px 0px rgba(34, 60, 80, 0.2);
  min-width: 200px;
}
.wick:hover .dropdown {
  opacity: 999;
  visibility: visible;
  z-index: 8;
  pointer-events: initial;
}
.dropdown ul {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.taxi {
  display: flex;
  align-items: center;
  gap: 4px;
}
.taxi i {
  font-size: 20px;
}
.dropdown a {
  color: var(--black);
}
.scroll-header .taxi {
  color: var(--black);
}
.lang button {
  color: white;
  font-weight: 500;
  font-family: var(--medium);
  font-size: 18px;
  line-height: 150%;
}
.drop .lang button {
  color: black;
}
.drop .lang {
  color: black;
}
.white button.disable {
  color: var(--red) !important;
}
.disable {
  pointer-events: none;
  color: var(--red) !important;
}
.white .lang {
  color: var(--black);
}
.brand {
  display: flex;
  align-items: center;
  justify-content: center;
}
.brand img {
  width: 90px;
  max-width: initial;
}

@media screen and (max-width: 1600px) {
  .links {
    gap: 24px;
  }

  .brand-color img,
  .brand-white img {
    width: 70px;
  }
  .right {
    gap: 24px;
  }
  .links a,
  .links button {
    font-size: 14px;
  }
}
</style>
