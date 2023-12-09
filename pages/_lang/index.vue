<template>
  <div>
    <HomeHero class="desktop" :categories="categories" :info="info" />
    <MobileHero class="mobile" :categories="categories" />
    <HomeAbout />
    <LazyHomeServices :services="services" />
    <HomeForm />
    <HomeInvestors :investors="investors" />
    <HomeFactories :factories="factories" />
    <HomeProducts :categories="categories" :info="info" />
    <HomeMedia :media="media" />
    <HomeContacts :info="info" />
  </div>
</template>

<script>
import MobileHero from '@/components/HomePage/MobileHero.vue'
import HomeHero from '@/components/HomePage/HomeHero.vue'
import HomeAbout from '@/components/HomePage/HomeAbout.vue'
import LazyHomeServices from '@/components/HomePage/HomeServices.vue'
import HomeForm from '@/components/HomePage/HomeForm.vue'
import HomeInvestors from '@/components/HomePage/HomeInvestors.vue'
import HomeProducts from '@/components/HomePage/HomeProducts.vue'
import HomeMedia from '@/components/HomePage/HomeMedia.vue'
import HomeContacts from '@/components/HomePage/HomeContacts.vue'
import HomeFactories from '@/components/HomePage/HomeFactories.vue'

import servicesApi from '@/api/services'
import categoriesApi from '@/api/categories'
import mediaApi from '@/api/media'
import investorsApi from '@/api/investors'

export default {
  name: 'IndexPage',

  components: {
    MobileHero,
    HomeHero,
    HomeAbout,
    LazyHomeServices,
    HomeForm,
    HomeInvestors,
    HomeProducts,
    HomeMedia,
    HomeContacts,
    HomeFactories,
  },

  async asyncData({ $axios, params }) {
    const categories = await categoriesApi.getCategories($axios, params.lang)
    const services = await servicesApi.getServices($axios, params.lang)
    const media = await mediaApi.getMedia($axios)
    const investors = await investorsApi.getInvestors($axios, params.lang)
    const info = await mediaApi.getInfo($axios, params.lang)
    const factories = await servicesApi.getFactories($axios, params.lang)

    return {
      categories,
      services,
      media,
      investors,
      factories,
      info,
    }
  },

  mounted() {},
}
</script>

<style>
@import url(@/assets/css/style.css);
.wrapper {
  background: #f8f8f8;
}

.mobile {
  display: none;
}
@media screen and (max-width: 1024px) {
  .desktop {
    display: none !important;
  }
  .mobile {
    display: block;
  }
}
</style>
