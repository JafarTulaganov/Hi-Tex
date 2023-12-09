<template>
  <div class="wrap">
    <div ref="history" class="swiper">
      <div class="swiper-wrapper">
        <div v-for="item in stories" :key="item.id" class="swiper-slide">
          <div class="cardo">
            <div class="top">
              <h4 class="title">{{ item.title }}</h4>
            </div>
            <div class="mid">
              <div class="img">
                <img :src="item.image" alt="" class="pic" />
              </div>
              <div v-html="item.text" class="content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination pager"></div>
  </div>
</template>

<script>
/* eslint-disable */

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'HajtexAboutCards',

  data() {
    return {}
  },

  props: ['stories', 'years'],

  async mounted() {
    let years = this.years
    new Swiper(this.$refs.history, {
      slidesPerView: 1,
      effect: 'cards',
      grabCursor: true,
      direction: 'vertical',
      mousewheel: {
        releaseOnEdges: true,
      },
      cardsEffect: {
        rotate: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + years[index] + '</span>'
        },
      },
    })
  },

  methods: {},
}
</script>

<style scoped>
.wrap {
  padding: 100px 0;
  position: relative;
}
.cardo {
  background: #ffffff;
  border: 1px solid #ebebeb;
  box-shadow: 0px -85px 24px -75px rgba(43, 43, 43, 0.04);
  border-radius: 48px;
  padding: 40px 96px;
}
.top {
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 32px;
  margin-bottom: 48px;
}
.title {
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  font-family: var(--decor);
  color: var(--blue);
  text-transform: uppercase;
  text-align: center;
}
.mid {
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 72px;
}
.pic {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
}
.swiper {
  height: 775px;
}
.swiper-slide {
  padding: 32px;
}
.pager {
  top: 93%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid #c2c2c3;
  padding-top: 40px;
  max-width: 90%;
  left: 50%;
  transform: translateX(-50%);
}
@media screen and (max-width: 1500px) {
  .wrap {
    padding: 64px 0;
  }
  .cardo {
    padding: 32px;
  }
  .top {
    padding-bottom: 24px;
    margin-bottom: 24px;
  }
  .mid {
    gap: 32px;
  }
  .pic {
    height: 300px;
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 40px 0 0 0;
  }
  .cardo {
    padding: 24px;
  }
  .title {
    font-weight: 400;
    font-size: 16px;
    line-height: 110%;
  }
  .top {
    margin: 0;
    border: none;
    padding-bottom: 16px;
  }
  .mid {
    display: flex;
    flex-direction: column;
  }
  .swiper-slide {
    padding: 0;
  }
  .pic {
    height: 200px;
  }
  .mid {
    gap: 18px;
  }
  .content p {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
  .swiper {
    height: 700px;
  }
}
</style>
