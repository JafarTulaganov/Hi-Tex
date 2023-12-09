<template>
  <div class="master">
    <div class="container">
      <div class="hero">
        <div class="row">
          <div class="left col-md-3 col-xs-12 left">
            <div class="top">
              <div class="crumbs">
                <NuxtLink :to="`/${$route.params.lang}`" class="last">{{
                  $store.state.translations['inner.home']
                }}</NuxtLink>
                /
                <p class="current">{{ product.name }}</p>
              </div>
              <h4 class="page">{{ product.name }}</h4>
            </div>
            <div ref="sliderSmall" thumbsSlider="" class="swiper small">
              <div class="swiper-wrapper">
                <div
                  v-for="image in product.images"
                  :key="image.id"
                  class="swiper-slide"
                >
                  <div class="frame">
                    <img src="@/assets/img/logo/Exclude.png" alt="" />
                  </div>
                  <img :src="image.image" alt="" class="pic" />
                </div>
              </div>
            </div>
          </div>
          <div class="mid col-md-5 col-xs-12">
            <div ref="sliderBig" class="swiper big">
              <div class="frame">
                <img src="@/assets/img/logo/Exclude.png" alt="" />
              </div>
              <div class="swiper-wrapper">
                <div
                  v-for="image in product.images"
                  :key="image.id"
                  class="swiper-slide"
                >
                  <img :src="image.image" alt="" class="pic" />
                </div>
              </div>
            </div>
          </div>
          <div class="right col-md-4 col-xs-12">
            <div class="specs">
              <div
                v-for="spec in product.specification"
                :key="spec.id"
                class="item"
              >
                <p class="question">{{ spec.specification }}</p>
                <p class="answer">{{ spec.value }}</p>
              </div>
            </div>
            <div class="content">
              <h4 class="paragraph">
                {{ $store.state.translations['inner.description'] }}
              </h4>

              <p v-html="product.description"></p>
            </div>
          </div>
        </div>
      </div>

      <ProductMore :product="product" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import productsApi from '@/api/products'

import ProductMore from '@/components/ProductInnerPage/ProductMore'

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'HajtexInner',

  components: {
    ProductMore,
  },

  layout: 'inner',

  async asyncData({ params, $axios }) {
    const product = await productsApi.getProduct(
      params.slug,
      $axios,
      params.lang
    )

    return {
      product,
    }
  },

  data() {
    return {}
  },

  mounted() {
    var swiper = new Swiper('.small', {
      spaceBetween: 20,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    })
    var swiper2 = new Swiper('.big', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: swiper,
      },
    })
  },

  methods: {},
}
</script>

<style scoped>
.master {
  padding: 160px 0;
  background: #f8f8f8;
}
.hero {
  background: #e6eaf3;
  border-radius: 32px;
  padding: 40px 35px;
  position: relative;
}
.swiper-slide {
}
.frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  pointer-events: none;
  transform: scale(1.005);
}
.frame img {
  width: 100%;
  height: 100%;
}
.swiper.big {
  position: relative;
  width: 600px;
  height: 700px;
}
.pic {
  width: 600px;
  height: 700px;
  object-fit: cover;
}
.swiper.small {
  width: 100%;
  max-width: 300px;
  height: 100px;
  margin: 0 0 64px 32px;
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.specs {
  margin-bottom: 40px;
}
.right {
  padding-top: 48px;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 60%;
  margin-bottom: 8px;
}
.question {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #132452;
  margin: 0;
}
.answer {
  font-weight: 500;
  font-family: var(--medium);
  font-size: 18px;
  line-height: 150%;
  text-align: right;
  color: #132452;
  margin: 0;
}
.paragraph {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  font-family: var(--decor);
  margin-bottom: 16px;
  text-transform: uppercase;
  color: var(--blue);
}
.content p {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  max-width: 500px;
  color: var(--blue);
}
.left {
  overflow: visible;
}
.page {
  position: relative;
  z-index: 9;
}
@media screen and (max-width: 1550px) {
  .master {
    padding-bottom: 80px;
  }
  .right {
    width: 100% !important;
    max-width: 100% !important;
    flex: unset !important;
  }
  .content p {
    max-width: 100%;
  }
  .specs .item {
    max-width: 100%;
  }
  .swiper.big,
  .pic {
    height: 400px;
    width: 350px;
  }
  .swiper.small {
    margin-bottom: 0;
  }
}
@media screen and (max-width: 1024px) {
  .swiper.big {
    width: 100% !important;
    height: 340px !important;
  }
  .small {
    margin: 0 !important;
    position: absolute;
    top: 470px;
    z-index: 99;
  }
  .mid {
    padding: 24px 16px 120px 16px;
  }
  .hero {
    padding: 24px;
  }
  .content p {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
  .question,
  .answer {
    font-size: 14px;
    line-height: 130%;
  }
  .item {
    max-width: 100%;
  }
  .master {
    padding-bottom: 40px;
  }
  .page {
    font-size: 24px !important;
  }
  .small {
    top: 550px;
  }
}
</style>
