<template>
  <div class="wrap">
    <div class="container container-sec">
      <div class="row">
        <div class="col-md-6 col-xs-12 left">
          <img src="@/assets/img/logo/brand-tra.svg" alt="" class="cotton" />
          <div class="content">
            <p class="sup">{{ $store.state.translations['main.main-16'] }}</p>
            <h4 data-aos="fade-right" class="title">
              {{ $store.state.translations['main.main-17'] }}
            </h4>
            <p class="sub">
              {{ $store.state.translations['main.main-18'] }}
            </p>
          </div>
          <img src="@/assets/img/logo/repost-red.svg" class="repost" alt="" />
        </div>
        <div class="col-md-6 col-xs-12 right">
          <div ref="swiper" class="swiper">
            <div class="swiper-wrapper">
              <div v-for="item in media" :key="item.id" class="swiper-slide">
                <div v-if="item.video != null" class="video">
                  <video :src="item.video"></video>
                </div>

                <div v-else class="img">
                  <img :src="item.image" alt="" class="pic" />
                </div>
              </div>
            </div>
          </div>

          <div dir="rtl" ref="swiper2" class="swiper">
            <div class="swiper-wrapper">
              <div v-for="item in media" :key="item.id" class="swiper-slide">
                <div v-if="item.video != null" class="video">
                  <video :src="item.video"></video>
                </div>

                <div v-else class="img">
                  <img :src="item.image" alt="" class="pic" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'HajtexHomeMedia',

  props: ['media'],

  data() {
    return {}
  },

  mounted() {
    new Swiper(this.$refs.swiper, {
      slidesPerView: 1.5,
      direction: 'vertical',
      spaceBetween: 20,
      autoplay: {
        delay: 1,
      },
      loop: true,
      speed: 30000,
    })

    new Swiper(this.$refs.swiper2, {
      slidesPerView: 1.5,
      direction: 'vertical',
      spaceBetween: 20,
      autoplay: {
        delay: 1,
        reverseDirection: true,
      },
      loop: true,
      speed: 30000,
    })
  },

  methods: {},
}
</script>

<style scoped>
.wrap {
  color: white;
  background: var(--blue);
  overflow-x: hidden;
}
.sup {
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  color: #5b647a;
  margin-bottom: 24px;
}
.title {
  font-weight: 400;
  font-size: 48px;
  line-height: 130%;
  margin-bottom: 16px;
  color: white;
  font-family: var(--decor);
  text-transform: uppercase;
  max-width: 700px;
}
.sub {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  max-width: 557px;
}
.swiper {
  height: 752px;
}
.grid {
  display: flex;
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.repost {
  width: 90px;
}
.pic,
video,
.video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.right {
  display: flex;
  align-items: center;
  gap: 20px;
}
.cotton {
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0.4;
}
.img {
  height: 100%;
}
@media screen and (max-width: 1500px) {
  .title {
    font-size: 40px;
  }
  .swiper {
    height: 576px;
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 40px 0 0 0;
    background: #1d1f21;
  }
  .title {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin-bottom: 16px;
  }
  .repost {
    display: none;
  }
  .cotton {
    display: none;
  }
  .sup {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    margin-bottom: 8px;
  }
  .swiper {
    height: 500px;
  }
  .right::after {
    background: linear-gradient(
      180deg,
      #1d1f21 63.02%,
      rgba(29, 31, 33, 0) 100%
    );
    content: '';
    width: 100%;
    height: 40%;
    position: absolute;
    top: -100px;
    left: 0;
    z-index: 8;
  }
  .content {
    position: relative;
    z-index: 9;
  }
}
</style>
