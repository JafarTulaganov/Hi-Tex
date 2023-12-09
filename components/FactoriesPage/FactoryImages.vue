<template>
  <div class="wrap">
    <div class="top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-xs-12 left">
            <p class="lil">
              {{ $store.state.translations['inner.description'] }}
            </p>
            <div>
              <img src="@/assets/img/logo/repost.svg" alt="" class="repost" />
            </div>
          </div>
          <div class="col-lg-6 col-xs-12 right">
            <h4
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="600"
              data-aos-duration="600"
              class="title"
            >
              {{ $store.state.translations['inner.complex'] }}
            </h4>
            <p v-html="factory.deckription"></p>
          </div>
        </div>
      </div>
    </div>
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="300"
      data-aos-duration="300"
      ref="carousel"
      class="swiper"
    >
      <div class="swiper-wrapper">
        <div
          v-for="image in factory.images"
          :key="image.id"
          class="swiper-slide"
        >
          <img :src="image.image" alt="" class="pic" />
        </div>
        <div
          v-for="image in factory.images"
          :key="image.key"
          class="swiper-slide"
        >
          <img :src="image.image" alt="" class="pic" />
        </div>
        <div
          v-for="image in factory.images"
          :key="image.slug"
          class="swiper-slide"
        >
          <img :src="image.image" alt="" class="pic" />
        </div>
      </div>
    </div>

    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="400"
      data-aos-duration="400"
      class="big"
    >
      <div class="container">
        <img :src="factory.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'HajtexCareerProducts',

  props: ['factory'],

  data() {
    return {}
  },

  mounted() {
    new Swiper(this.$refs.carousel, {
      slidesPerView: 1.5,
      centeredSlides: true,
      loop: true,
      spaceBetween: 10,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      speed: 2000,
      breakpoints: {
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 20,
        },
      },
    })
  },

  methods: {},
}
</script>

<style scoped>
.wrap {
  padding: 150px 0;
  overflow-x: hidden;
}
.top {
  padding-bottom: 48px;
}
.title {
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  font-family: var(--decor);
  margin-bottom: 24px;
  text-transform: uppercase;
  color: var(--red);
}
.right p {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 24px;
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 320px;
}
.lil {
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  margin: 0;
  text-transform: uppercase;
}
.swiper-slide {
  display: flex;
  align-items: flex-end;
  height: 500px;
}
.pic {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}
.swiper {
  padding-bottom: 140px;
}
.big img {
  width: 100%;
  height: 800px;
  object-fit: cover;
  border-radius: 12px;
}
@media screen and (max-width: 1500px) {
  .wrap {
    padding: 80px 0 120px 0;
  }
  .swiper-slide {
    height: 340px;
  }
  .swiper {
    padding-bottom: 80px;
  }
  .big img {
    height: 400px;
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    overflow-x: unset !important;
    padding: 80px 0;
  }
  .repost {
    display: none;
  }
  .lil {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    margin-bottom: 8px;
  }
  .title {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 16px;
  }
  .right p {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
  }
  .swiper-slide {
    height: 300px;
  }
  .swiper {
    padding-bottom: 80px;
  }
  .big img {
    height: 250px;
  }
  .left {
    min-height: unset !important;
  }
}
</style>
