<template>
  <div class="wrap">
    <AboutHero />
    <AboutAbout />
    <AboutWorld />
    <AboutMission />
    <AboutLogos :partners="partners" />
  </div>
</template>

<script>
import mediaApi from '@/api/media'

import AboutWorld from '@/components/AboutPage/AboutWorld.vue'
import AboutAbout from '@/components/AboutPage/AboutAbout.vue'
import AboutHero from '@/components/AboutPage/AboutHero'
import AboutMission from '@/components/AboutPage/AboutMission'
import AboutLogos from '@/components/AboutPage/AboutLogos'

export default {
  name: 'HajtexAbout',

  components: {
    AboutWorld,
    AboutAbout,
    AboutHero,
    AboutMission,
    AboutLogos,
  },

  layout: 'inner',

  async asyncData({ $axios }) {
    const partners = await mediaApi.getPartners($axios)
    return {
      partners,
    }
  },

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  background: #f8f8f8;
  padding-top: 80px;
}
</style>
