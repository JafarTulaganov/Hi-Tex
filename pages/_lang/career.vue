<template>
  <div class="master">
    <div class="container">
      <div class="top">
        <div class="crumbs">
          <NuxtLink :to="`/${$route.params.lang}`" class="last">{{
            $store.state.translations['inner.home']
          }}</NuxtLink>
          /
          <p class="current">{{ $store.state.translations['inner.career'] }}</p>
        </div>
        <h4 class="page">{{ $store.state.translations['inner.vacancy'] }}</h4>
      </div>
    </div>
    <CareerHero :media="media" />
    <section class="no-meamimg">
      <div class="container">
        <div class="row">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="500"
            class="col-lg-4 col-xs-12"
          >
            <img src="@/assets/img/no-meaning.jpg" alt="" class="pic" />
          </div>
          <div class="col-lg-4 col-xs-12 mid">
            <h4 class="title">
              {{ $store.state.translations['inner.group'] }}
            </h4>
            <p class="sub">{{ $store.state.translations['inner.quality'] }}</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="600"
            class="col-lg-4 col-xs-12"
          >
            <img src="@/assets/img/no-meaning2.jpg" alt="" class="pic pic-2" />
          </div>
        </div>
      </div>
    </section>
    <CareerVacancies :vacancies="vacancies" />
    <CareerForm :vacancies="vacancies" />
  </div>
</template>

<script>
import vacanciesApi from '@/api/vacancies'
import mediaApi from '@/api/media'

import CareerHero from '@/components/CareerPage/CareerHero'
import CareerVacancies from '@/components/CareerPage/CareerVacancies'
import CareerForm from '@/components/CareerPage/CareerForm'

export default {
  name: 'HajtexCareer',

  components: {
    CareerHero,
    CareerVacancies,
    CareerForm,
  },

  layout: 'inner',

  async asyncData({ $axios, params }) {
    const vacancies = await vacanciesApi.getVacancies($axios, params.lang)
    const media = await mediaApi.getMedia($axios, params.lang)

    return {
      vacancies,
      media,
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
  padding: 160px 0;
  background: #f8f8f8;
}
.pic {
  width: 100%;
  height: 800px;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 20%;
}
.pic-2 {
  margin-top: 0;
  width: 100%;
  height: 700px;
  object-fit: cover;
  border-radius: 12px;
}
.mid {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  font-weight: 400;
  font-size: 56px;
  line-height: 130%;
  font-family: var(--decor);
  text-transform: uppercase;
}
.sub {
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;
}
@media screen and (max-width: 1500px) {
  .pic {
    height: 430px;
  }
  .title {
    font-size: 32px;
  }
  .sub {
    font-size: 20px;
  }
}
@media screen and (max-width: 1024px) {
  .master {
    padding-bottom: 0;
  }
  .no-meamimg {
    display: none;
  }
}
</style>
