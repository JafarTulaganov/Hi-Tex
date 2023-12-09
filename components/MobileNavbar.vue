<template>
  <div id="mobile" class="wrap">
    <div class="container">
      <div class="left">
        <button
          class="burger"
          @click="mobileHandle = !mobileHandle"
          :class="{ burgerX: mobileHandle }"
        ></button>
      </div>
      <div class="mid">
        <NuxtLink class="brand" :to="`/${$route.params.lang}`">
          <img src="@/assets/img/logo/brand-color.svg" alt="" />
        </NuxtLink>
      </div>
      <div class="right">
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
              En
            </button>
          </li>
        </div>
      </div>
    </div>

    <div class="menu" :class="{ show: mobileHandle }">
      <div class="header">
        <div class="x" @click="mobileHandle = !mobileHandle">
          <i class="bx bx-x"></i>
        </div>
        <div class="logo">
          <NuxtLink class="brand" :to="`/${$route.params.lang}`">
            <img src="@/assets/img/logo/brand-color.svg" alt="" />
          </NuxtLink>
        </div>
      </div>
      <ul>
        <li
          class="caller"
          :class="{ show: menuOneHandle }"
          @click="
            ;(menuOneHandle = !menuOneHandle),
              (menuTwoHandle = false),
              (menuThreeHandle = false),
              (menuFourHandle = false)
          "
        >
          <button>
            {{ $store.state.translations['main.about'] }}
            <i class="bx bx-chevron-down"></i>
          </button>
          <div class="dropdown" :class="{ show: menuOneHandle }">
            <ul>
              <li>
                <NuxtLink :to="`/${$route.params.lang}/about`">{{
                  $store.state.translations['main.about']
                }}</NuxtLink>
              </li>
              <!-- <li>
                <NuxtLink :to="`/${$route.params.lang}/management`">{{
                  $store.state.translations['main.about-4']
                }}</NuxtLink>
              </li> -->
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
        <li
          class="caller"
          :class="{ show: menuTwoHandle }"
          @click="
            ;(menuTwoHandle = !menuTwoHandle),
              (menuOneHandle = false),
              (menuThreeHandle = false),
              (menuFourHandle = false)
          "
        >
          <button>
            {{ $store.state.translations['main.services'] }}
            <i class="bx bx-chevron-down"></i>
          </button>
          <div class="dropdown" :class="{ show: menuTwoHandle }">
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
        <li
          class="caller"
          :class="{ show: menuFiveHandle }"
          @click="
            ;(menuFiveHandle = !menuFiveHandle),
              (menuOneHandle = false),
              (menuThreeHandle = false),
              (menuFourHandle = false),
              (menuTwoHandle = false)
          "
        >
          <button>
            {{ $store.state.translations['main.other'] }}
            <i class="bx bx-chevron-down"></i>
          </button>
          <div class="dropdown" :class="{ show: menuFiveHandle }">
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
        <li
          class="caller"
          :class="{ show: menuThreeHandle }"
          @click="
            ;(menuThreeHandle = !menuThreeHandle),
              (menuTwoHandle = false),
              (menuOneHandle = false),
              (menuFourHandle = false)
          "
        >
          <button>
            {{ $store.state.translations['main.invest'] }}
            <i class="bx bx-chevron-down"></i>
          </button>
          <div class="dropdown" :class="{ show: menuThreeHandle }">
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
        <li
          class="caller"
          :class="{ show: menuFourHandle }"
          @click="
            ;(menuFourHandle = !menuFourHandle),
              (menuTwoHandle = false),
              (menuThreeHandle = false),
              (menuOneHandle = false)
          "
        >
          <button>
            {{ $store.state.translations['main.product'] }}
            <i class="bx bx-chevron-down"></i>
          </button>
          <div class="dropdown" :class="{ show: menuFourHandle }">
            <ul>
              <li v-for="item in categories" :key="item.id">
                <NuxtLink :to="`/${$route.params.lang}/products/${item.id}`">{{
                  item.name
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NuxtLink :to="`/${$route.params.lang}/sustainbility`">
            {{ $store.state.translations['main.sus'] }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/${$route.params.lang}/media`">
            {{ $store.state.translations['main.media'] }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/${$route.params.lang}/news`">
            {{ $store.state.translations['main.news'] }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/${$route.params.lang}/career`">
            {{ $store.state.translations['main.career'] }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/${$route.params.lang}/contacts`">
            {{ $store.state.translations['main.contacts'] }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import categoriesApi from '@/api/categories.js'
import servicesApi from '@/api/services.js'
import investorsApi from '@/api/investors.js'

export default {
  name: 'HajtexMobileNavbar',

  data() {
    return {
      mobileHandle: false,
      menuOneHandle: false,
      menuTwoHandle: false,
      menuThreeHandle: false,
      menuFourHandle: false,
      menuFiveHandle: false,
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
  },

  watch: {
    $route() {
      this.mobileHandle = false
      this.menuOneHandle = false
      this.menuTwoHandle = false
      this.menuThreeHandle = false
      this.menuFourHandle = false
      this.menuFiveHandle = false
    },

    currentLang() {
      this.fetchAll()
    },
  },

  mounted() {
    function scrollHeader() {
      const mobile = document.getElementById('mobile')
      if (this.scrollY >= 50) {
        mobile.classList.add('scroll-header', 'drop')
      } else {
        mobile.classList.remove('scroll-header', 'drop')
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
}
</script>

<style scoped>
.wrap {
  padding: 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  transition: 0.4s;
}
.wrap .container {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
}
.lang {
  display: flex;
  align-items: center;
  gap: 4px;
  color: white;
  transition: 0.4s;
}
.lang button {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: white;
  font-family: var(--medium);
  transition: 0.4s;
}
.burger {
  width: 30px;
  height: 2px;
  border-radius: 8px;
  background: white;
  position: relative;
  transition: 0.4s;
}
.burger::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 0;
  width: 30px;
  height: 2px;
  border-radius: 8px;
  background: white;
  transition: 0.4s;
}
.burger::after {
  content: '';
  position: absolute;
  top: -10px;
  left: 0;
  width: 30px;
  height: 2px;
  border-radius: 8px;
  background: white;
  transition: 0.4s;
}
.brand img {
  width: 64px;
}
.left {
  display: flex;
}
.mid {
  display: flex;
  justify-content: center;
}
.right {
  display: flex;
  justify-content: flex-end;
}
.scroll-header {
  background: white;
  padding: 16px;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
.scroll-header .lang button,
.scroll-header .lang {
  color: black;
}
.scroll-header .burger,
.scroll-header .burger::after,
.scroll-header .burger::before {
  background: var(--black);
}
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  transition: 0.4s;
  transform: translateX(-100%);
  overflow: auto;
}
.menu::-webkit-scrollbar {
  display: none;
}
.menu.show {
  transform: translateX(0%);
}
.menu ul {
  display: flex;
  flex-direction: column;
}
.menu a,
.menu button {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  font-family: var(--medium);
  color: var(--black);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-bottom: 1px solid #ebebeb;
  width: 100%;
}
.x {
  font-size: 32px;
  color: var(--blue);
  position: absolute;
}
.logo {
  margin: auto;
}
.logo a {
  border-bottom: none;
}
.header {
  display: flex;
  align-items: center;
  padding-bottom: 32px;
  border-bottom: 1px solid #ebebeb;
  padding: 24px;
}
.dropdown {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-100%);
  position: absolute;
}
.dropdown.show {
  position: static;
  opacity: 1;
  visibility: visible;
  transform: translateY(0%);
}
.dropdown a {
  font-size: 16px;
}
.menu a:hover {
  text-decoration: none;
}
.caller.show {
  background: white;
}
.caller.show button {
  color: var(--red);
}
</style>
