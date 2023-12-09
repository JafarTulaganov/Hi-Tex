<template>
  <div class="wrapper">
    <DesktopNavbar class="nav" />
    <MobileNavbar class="mobile" />
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

  async fetch() {
    const translations = await translationsApi.getTranslations(
      this.$axios,
      this.$route.params.lang
    )

    await this.$store.commit('getTranslations', translations.data)
  },

  computed: {
    currentLang() {
      return this.$route.params.lang
    },
  },

  watch: {
    async currentLang(val) {
      const translations = await translationsApi.getTranslations(
        this.$axios,
        this.$route.params.lang
      )

      await this.$store.commit('getTranslations', translations.data)
    },
  },

  mounted() {
    AOS.init()
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
  .nav {
    display: none;
  }
  .mobile {
    display: flex;
  }
}
</style>
