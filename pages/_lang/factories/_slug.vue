<template>
  <div class="master">
    <div class="top">
      <div class="container">
        <div class="crumbs">
          <NuxtLink :to="`/${$route.params.lang}`" class="last">{{
            $store.state.translations['inner.home']
          }}</NuxtLink>
          /
          <p class="current">{{ factory.title }}</p>
        </div>
        <h4 class="page">{{ factory.title }}</h4>
        <p class="sub">
          {{ factory.subtitle }}
        </p>
      </div>
    </div>
    <FactoryImages :factory="factory" />
    <FactoryOther
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      :factories="factories"
    />

    <HomeForm />
  </div>
</template>

<script>
import serviceApi from '@/api/services'

import FactoryImages from '@/components/FactoriesPage/FactoryImages'
import HomeForm from '@/components/HomePage/HomeForm'
import FactoryOther from '@/components/FactoriesPage/FactoryOther'

export default {
  name: 'HajtexBusinesses',

  components: {
    FactoryImages,
    HomeForm,
    FactoryOther,
  },

  layout: 'inner',

  async asyncData({ params, $axios }) {
    const factories = await serviceApi.getFactories($axios, params.lang)
    const factory = await serviceApi.getFactory(
      params.slug,
      $axios,
      params.lang
    )

    return {
      factories,
      factory,
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
