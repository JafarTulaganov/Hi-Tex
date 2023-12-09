<template>
  <div class="master">
    <div class="container">
      <div class="top">
        <div class="crumbs">
          <NuxtLink :to="`/${$route.params.lang}`" class="last">{{
            $store.state.translations['inner.home']
          }}</NuxtLink>
          /
          <p class="current">{{ $store.state.translations['inner.sus'] }}</p>
        </div>
        <h4 class="page">{{ $store.state.translations['inner.sus'] }}</h4>
      </div>
      <div class="items">
        <div v-for="item in types" :key="item.id" class="item">
          <NuxtLink :to="`/${$route.params.lang}/sustainbility/${item.slug}`">
            <div class="img">
              <img :src="item.image" alt="" class="pic" />
              <img src="@/assets/img/mask.svg" alt="" class="mask" />
              <img src="@/assets/img/logo/brand-tra.svg" alt="" class="ses" />
            </div>
            <div class="content">
              <p class="title">{{ item.title }}</p>

              <p class="sub" v-html="item.text"></p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import typesApi from '@/api/types'

export default {
  name: 'HajtexIndex',

  layout: 'inner',

  async asyncData({ $axios, params }) {
    const types = await typesApi.getTypes($axios, params.lang)

    return {
      types,
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
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-top: 48px;
}
.item {
  border-radius: 12px;
  overflow: hidden;
}
.pic {
  width: 100%;
  height: 268px;
  object-fit: cover;
  transition: 0.4s;
}
.content {
  background: white;
  padding: 24px;
  position: relative;
  z-index: 9;
  border-radius: 0 0 12px 12px;
  height: 186px;
}
.title {
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  font-family: var(--decor);
  margin-bottom: 8px;
  color: black;
}
.sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #5d5d5f;
  height: 110px;
  overflow: hidden;
}
.item:hover a {
  text-decoration: none;
}
.item:hover .pic {
  transform: scale(1.1);
}
.img {
  overflow: hidden;
  position: relative;
  border-radius: 12px 12px 0 0;
  z-index: 9;
}
.mask {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
}
.ses {
  position: absolute;
  bottom: 0;
  right: -50px;
  left: auto;
  width: 70%;
  height: auto;
  transition: 0.4s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.item:hover .ses {
  opacity: 1;
  visibility: visible;
}
.item {
  overflow: visible;
  position: relative;
}
.item::after {
  width: 0px;
  height: 0px;
  border-radius: 20px;
  background: var(--blue);
  position: absolute;
  top: -8px;
  left: -8px;
  content: '';
  transition: 0.4s;
}
.item::before {
  width: 0px;
  height: 0px;
  border-radius: 20px;
  background: var(--blue);
  position: absolute;
  bottom: -8px;
  right: -8px;
  left: auto;
  content: '';
  transition: 0.4s;
}
.item:hover::after,
.item:hover::before {
  width: 270px;
  height: 270px;
}
@media screen and (max-width: 1500px) {
  .master {
    padding-bottom: 80px;
  }
  .items {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 1024px) {
  .items {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .pic {
    height: 110px;
  }
  .title {
    font-weight: 400;
    font-size: 10px;
    line-height: 130%;
  }
  .sub {
    font-weight: 400;
    font-size: 10px;
    line-height: 150%;
  }
  .item::after,
  .item::before {
    display: none;
  }
}
</style>
