<template>
  <div class="wrap">
    <div class="top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-xs-12 left">
            <p class="lil"></p>
            <div>
              <img src="@/assets/img/logo/repost.svg" alt="" class="repost" />
            </div>
          </div>
          <div class="col-lg-6 col-xs-12 right">
            <h4 class="title">
              {{ $store.state.translations['inner.complex'] }}
            </h4>
            <p>
              {{ $store.state.translations['inner.txt-6'] }}
            </p>
            <p>
              {{ $store.state.translations['inner.txt-7'] }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      ref="carousel"
      class="swiper"
    >
      <div class="swiper-wrapper">
        <div v-for="item in media" :key="item.id" class="swiper-slide">
          <div v-if="item.type == 'image'" class="img">
            <img :src="item.image" alt="" class="pic" />
          </div>
          <div v-else class="img">
            <div v-if="item.video != null">
              <video :src="item.video"></video>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="big">
      <div class="container">
        <img src="@/assets/img/no-meaning.jpg" alt="" />
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

  data() {
    return {}
  },

  props: ['media'],

  mounted() {
    new Swiper(this.$refs.carousel, {
      slidesPerView: 1.5,
      centeredSlides: true,
      loop: true,
      spaceBetween: 10,
      autoplay: {
        delay: 2000,
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
.img {
  width: 100%;
}
.pic,
video {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  min-height: 300px;
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
    padding: 80px 0;
  }
  .title {
    font-size: 32px;
    max-width: 90%;
  }
  .swiper {
    padding-bottom: 80px;
  }
  .swiper-slide {
    height: 340px;
  }
  .big img {
    height: 400px;
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 40px 0 0 0;
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
}
</style>
