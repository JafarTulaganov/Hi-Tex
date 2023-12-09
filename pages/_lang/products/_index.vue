<template>
  <div class="master">
    <div class="container">
      <div class="top">
        <div class="crumbs">
          <NuxtLink :to="`/${$route.params.lang}`" class="last">{{
            $store.state.translations['inner.home']
          }}</NuxtLink>
          /
          <p class="current">{{ category.name }}</p>
        </div>
        <h4 class="page">{{ category.name }}</h4>
        <p class="count">
          {{ products.length }}
          {{ $store.state.translations['inner.products'] }}
        </p>
      </div>

      <div class="main">
        <div class="row">
          <div class="col-lg-2 col-xs-12">
            <div class="aside">
              <div class="header">
                <h4 class="paragraph">
                  {{ $store.state.translations['inner.products'] }}
                </h4>
              </div>
              <div class="items">
                <div v-for="item in categories" :key="item.id" class="item">
                  <NuxtLink :to="`/${$route.params.lang}/products/${item.id}`">
                    <p class="aw">{{ item.name }}</p>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-10 col-xs-12">
            <div class="search__wrap">
              <div class="search">
                <div class="searcher">
                  <input
                    id="search"
                    v-model="searcher"
                    type="text"
                    :placeholder="$store.state.translations['inner.search']"
                  />
                  <label for="search" class="label">
                    <i class="bx bx-search"></i>
                  </label>
                </div>
              </div>
            </div>
            <div v-if="category.unique == true" class="body unique">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                v-for="product in products"
                :key="product.id"
                :style="`background-color: ${product.color}`"
                class="cardo"
              >
                <NuxtLink
                  :to="`/${$route.params.lang}/product/${product.slug}`"
                >
                  <div class="content">
                    <img
                      class="vector"
                      src="@/assets/img/logo/vector.png"
                      alt=""
                    />

                    <div class="sub">
                      {{ product.subtitle }}
                    </div>
                    <p class="name">{{ product.name }}</p>
                    <div class="specs">
                      <div
                        v-for="spec in product.specification"
                        :key="spec.id"
                        class="spec"
                      >
                        <p class="question">
                          {{ spec.specification }}
                        </p>
                        <p class="answer">
                          {{ spec.value }}
                        </p>
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="more">
                        {{ $store.state.translations['inner.more'] }}
                        <i class="bx bx-right-arrow-alt"></i>
                      </button>

                      <!-- <div class="swiper-btns">
                        <button class="swiper-btn first-btn">
                          <img src="@/assets/img/logo/arrow-right.svg" alt="" />
                        </button>
                        <button class="swiper-btn sec-btn">
                          <img src="@/assets/img/logo/arrow-right.svg" alt="" />
                        </button>
                      </div> -->
                    </div>
                  </div>

                  <div class="img">
                    <img :src="product.image" alt="" class="pic" />
                  </div>
                </NuxtLink>
              </div>
            </div>
            <div v-else class="body">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                v-for="product in products"
                :key="product.id"
                class="cardo"
              >
                <NuxtLink
                  :to="`/${$route.params.lang}/product/${product.slug}`"
                >
                  <div class="img">
                    <img :src="product.image" alt="" class="pic" />
                  </div>
                  <div class="content">
                    <p class="name">{{ product.name }}</p>
                    <div class="specs sasuke">
                      <div
                        v-for="spec in product.specification"
                        :key="spec.id"
                        class="spec"
                      >
                        <p class="question">
                          {{ spec.specification }}
                        </p>
                        <p class="answer">
                          {{ spec.value }}
                        </p>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchApi from '@/api/categories.js'

import categoriesApi from '@/api/categories'

export default {
  name: 'HajtexIndex',

  layout: 'inner',

  async asyncData({ params, $axios }) {
    const categories = await categoriesApi.getCategories($axios, params.lang)
    const category = await categoriesApi.getCategory(
      params.index,
      $axios,
      params.lang
    )
    const products = category.products

    return {
      categories,
      category,
      products,
    }
  },

  data() {
    return {
      searcher: '',
      findItems: [],
      products: '',
    }
  },

  watch: {
    async searcher(val) {
      if (val.length > 2) {
        await this.$router.replace({
          path: `/${this.$route.params.lang}/products/${this.$route.params.index}`,
          query: { search: val },
        })
        this.searchAny()
      } else if (val.length === 0) {
        await this.$router.replace({
          path: `/${this.$route.params.lang}/products/${this.$route.params.index}`,
          query: {},
        })
        this.searchAny()
      }
    },
  },

  mounted() {},

  methods: {
    async searchAny(value) {
      this.findItems = await searchApi.getSearch(
        { search: this.$route.query.search, id: this.$route.params.index },
        this.$axios
      )

      this.products = this.findItems.products
    },
  },
}
</script>

<style scoped>
.master {
  padding: 160px 0;
  background: #f8f8f8;
}
.aside {
  position: sticky;
  top: 130px;
  border: 1px solid #ebebeb;
  border-radius: 12px;
}
.header {
  background: #f5f5f7;
  border-radius: 11px 11px 0px 0px;
  padding: 16px 24px;
}
.paragraph {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  font-family: var(--medium);
  color: #132452;
  text-transform: capitalize;
  margin: 0;
}
.item {
  background: white;
  border-bottom: 1px solid #ebebeb;
}
.item:last-child {
  border-bottom: none;
  border-radius: 0 0 12px 12px;
}
.aw {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #5d5d5f;
  transition: 0.4s;
  margin: 0;
}
.item a {
  padding: 24px;
  display: block;
}
.item:hover a {
  text-decoration: none;
}
.item:hover .name {
  color: var(--blue);
}

.body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.cardo {
  border: 1px solid #ebebeb;
  border-radius: 12px;
  overflow: hidden;
}
.img {
  overflow: hidden;
}
.pic {
  width: 100%;
  height: 331px;
  object-fit: cover;
  transition: 0.4s;
}
.img {
  overflow: hidden;
}
.content {
  padding: 24px 32px;
}
.name {
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  margin-bottom: 8px;
  transition: 0.4s;
}
.sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #353437;
  margin-bottom: 24px;
}
.top {
  margin-bottom: 50px;
}
.count {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
}
.searcher {
  border: 1px solid #ebebeb;
  border-radius: 6px;
  background: white;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
}
#search {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: black;
  padding: 16px;
  width: 100%;
}
#search::placeholder {
  color: #9a999b;
}
.search__wrap {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;
}
.label {
  margin: 0;
  font-size: 24px;
}
.cardo a {
  color: black;
}
.cardo a:hover {
  text-decoration: none;
  color: var(--blue);
}

.cardo:hover .pic {
  transform: scale(1.1);
}
.nuxt-link-exact-active .aw {
  color: var(--red);
}
.unique {
  grid-template-columns: repeat(1, 1fr);
}
.unique .cardo {
  border-radius: 32px;
  max-height: 480px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.unique .cardo a {
  display: grid;
  color: white;
  grid-template-columns: repeat(2, 1fr);
}
.unique .img {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  z-index: 9;
}
.unique .pic {
  width: 550px;
  height: 695px;
  border-radius: 50%;
  filter: drop-shadow(0px 12px 34px rgba(0, 0, 0, 0.12));
  transform: rotate(34.66deg);
  transition: 0.8s;
}
.unique .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;
}
.unique .name {
  font-family: var(--decor);
  font-weight: 400;
  font-size: 48px;
  line-height: 110%;
  text-transform: uppercase;
  position: relative;
  z-index: 9;
}
.unique .sub {
  font-weight: 300;
  font-size: 12px;
  line-height: 130%;
  color: white;
  margin-bottom: 16px;
  position: relative;
  z-index: 9;
  text-transform: uppercase;
}
.spec {
  display: flex;
  align-items: center;
  gap: 8px;
}
.spec .answer {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  font-family: var(--medium);
  position: relative;
  z-index: 9;
  margin-bottom: 2px;
}
.spec .question {
  font-family: var(--light);
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 2px;
}
.unique .cardo:hover .pic {
  transform: scale(1.5);
}
.unique .content {
  overflow: visible;
  position: relative;
  z-index: 9;
}
.unique .vector {
  position: absolute;
  top: 0;
  left: 0;
  width: 1000px;
  height: 100%;
  max-width: unset;
  z-index: 1;
  pointer-events: none;
  mix-blend-mode: screen;
  opacity: 0.8;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
}
.more {
  width: 350px;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 500px;
  color: #132452;
  gap: 12px;
  font-weight: 500;
  font-family: var(--medium);
  font-size: 16px;
  line-height: 150%;
}
.swiper-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
}
.swiper-btns {
  display: flex;
  gap: 10px;
}
.first-btn img {
  transform: rotate(180deg);
}
.sasuke .spec {
  justify-content: space-between;
}
@media screen and (max-width: 1500px) {
  .unique .pic {
    height: 380px;
    width: 350px;
  }
}
@media screen and (max-width: 1024px) {
  .search__wrap {
    margin-top: 40px;
    justify-content: flex-start;
  }
  .search {
    width: 100%;
  }
  .searcher {
    width: 100%;
  }
  .unique .cardo a {
    display: block !important;
  }
  .unique .cardo {
    max-height: unset !important;
  }
  .unique .pic {
    width: 250px !important;
    height: 320px !important;
  }
  .unique .content {
    padding: 24px;
  }
  .unique .name {
    font-weight: 400;
    font-size: 24px;
    line-height: 110%;
    margin-bottom: 24px;
  }
  .unique .sub {
    font-weight: 600;
    font-size: 12px;
    line-height: 130%;
    margin-bottom: 8px;
  }
  .vector {
    display: none;
  }
  .spec .question {
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
  }
  .spec .answer {
    font-weight: 600;
    font-size: 14px;
    line-height: 160%;
  }
  .unique .more {
    display: none;
  }
  .unique .img {
    margin-bottom: -100px;
  }
  .body {
    grid-template-columns: repeat(1, 1fr);
  }
  .pic {
    height: 220px;
  }
  .name {
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 8px;
  }
  .content {
    padding: 16px;
  }
  .page {
    font-size: 24px !important;
  }
}
</style>
