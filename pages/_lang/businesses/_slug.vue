<template>
  <div class="master">
    <div class="top">
      <div class="container">
        <div class="crumbs">
          <NuxtLink :to="`/${$route.params.lang}`" class="last">{{
            $store.state.translations['inner.home']
          }}</NuxtLink>
          /
          <p class="current">{{ service.title }}</p>
        </div>
        <h4 class="page">{{ service.title }}</h4>
        <p class="sub">
          {{ service.subtitle }}
        </p>
      </div>
    </div>
    <CareerProducts :service="service" />
    <BusinessOther
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      :services="services"
    />

    <BusinessFaq :service="service" />

    <HomeForm />
  </div>
</template>

<script>
import serviceApi from '@/api/services'

import CareerProducts from '@/components/CareerPage/CareerProducts'
import HomeForm from '@/components/HomePage/HomeForm'
import BusinessFaq from '@/components/BusinessPage/BusinessFaq'
import BusinessOther from '@/components/BusinessPage/BusinessOther'

export default {
  name: 'HajtexBusinesses',

  components: {
    CareerProducts,
    HomeForm,
    BusinessFaq,
    BusinessOther,
  },

  layout: 'inner',

  async asyncData({ $axios, params }) {
    const services = await serviceApi.getServices($axios, params.lang)
    const service = await serviceApi.getService(
      params.slug,
      $axios,
      params.lang
    )

    return {
      services,
      service,
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
.master {
  background: #f8f8f8;
}
.top {
  background: url(@/assets/img/busy.jpg) center no-repeat;
  background-size: cover;
  padding: 160px 0 40px 0;
  color: white;
}
.last,
.current {
  color: white;
}
.sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  max-width: 800px;
}
@media screen and (max-width: 1024px) {
}
</style>
