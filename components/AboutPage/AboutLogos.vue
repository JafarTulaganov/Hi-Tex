<template>
  <div class="wraps">
    <div class="container">
      <h4 class="title">{{ $store.state.translations['inner.advanced'] }}</h4>

      <div ref="slider" class="swiper">
        <div class="swiper-wrapper">
          <div v-for="item in partners" :key="item.id" class="swiper-slide">
            <img :src="item.image" alt="" class="pic" />
          </div>
          <div v-for="item in partners" :key="item.key" class="swiper-slide">
            <img :src="item.image" alt="" class="pic" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'HajtexAboutLogos',

  data() {
    return {}
  },

  props: ['partners'],

  mounted() {
    new Swiper(this.$refs.slider, {
      slidesPerView: 2,
      spaceBetween: 64,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 1000,
      },
      breakpoints: {
        1024: {
          slidesPerView: 7,
          spaceBetween: 100,
        },
      },
    })
  },

  methods: {},
}
</script>

<style scoped>
.wraps {
  padding: 80px 0 40px 0;
}
.wraps {
  background: var(--blue);
}
.title {
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  color: white;
  font-family: var(--decor);
  margin-bottom: 80px;
  text-align: center;
  text-transform: uppercase;
}
.swiper-wrapper {
  margin-bottom: 100px;
}
.pic {
  width: 200px;
  height: auto;
  object-fit: contain;
}
.swiper-slide {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  position: static;
  gap: 10px;
}
</style>
