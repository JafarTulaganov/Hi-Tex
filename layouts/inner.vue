<template>
  <div class="wrapper">
    <DesktopNavbar class="white" />
    <MobileNavbar class="mobile inner-mobile" />
    <main><nuxt /></main>
    <DesktopFooter />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

import translationsApi from '@/api/lang'

import DesktopNavbar from '@/components/DesktopNavbar.vue'
import MobileNavbar from '@/components/MobileNavbar.vue'
import DesktopFooter from '@/components/DesktopFooter.vue'

export default {
  name: 'HajtexDefault',

  components: {
    DesktopNavbar,
    MobileNavbar,
    DesktopFooter,
  },

  data() {
    return {
      translations: [],
    }
  },

  computed: {
    currentLang() {
      return this.$route.params.lang
    },
  },

  watch: {
    currentLang(val) {
      this.__GET_TRANSLATIONS()
    },
  },

  mounted() {
    AOS.init()

    this.__GET_TRANSLATIONS()
  },

  methods: {
    async __GET_TRANSLATIONS() {
      const translations = await translationsApi.getTranslations(
        this.$axios,
        this.$route.params.lang
      )
      await this.$store.commit('getTranslations', translations.data)
    },
  },
}
</script>

<style scoped>
@import url(@/assets/css/style.css);
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1 1 auto;
}
.mobile {
  display: none;
}
@media screen and (max-width: 1024px) {
  .white {
    display: none;
  }
  .mobile {
    display: flex;
  }
  .inner-mobile {
    background: #f8f8f8;
  }
}
</style>
