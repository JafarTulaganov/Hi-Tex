<template>
  <div class="master">
    <img src="@/assets/img/logo/certificate.svg" alt="" class="vector" />
    <div class="container">
      <div class="top">
        <div class="crumbs">
          <NuxtLink :to="`/${$route.params.lang}`" class="last">{{
            $store.state.translations['inner.home']
          }}</NuxtLink>
          /
          <p class="current">
            {{ $store.state.translations['inner.certificates'] }}
          </p>
        </div>
        <h4 class="page">
          {{ $store.state.translations['inner.certificates'] }}
        </h4>
      </div>
      <div class="items">
        <div v-for="item in cert" :key="item.id" class="item">
          <div class="left">
            <img :src="item.image" alt="" class="pic" />
          </div>
          <div class="right">
            <a :href="item.file" target="_blank" class="download" download>
              <i class="bx bx-download"></i>
              {{ $store.state.translations['inner.download'] }}</a
            >
            <p class="name">{{ item.title }}</p>
            <p class="sub" v-html="item.description"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import certificatesApi from '@/api/certificates'

export default {
  name: 'HajtexCertificates',

  layout: 'inner',

  async asyncData({ $axios, params }) {
    const cert = await certificatesApi.getCertificates($axios, params.lang)

    return {
      cert,
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
  padding-top: 160px;
  background: #f8f8f8;
  padding-bottom: 114px;
}
.top {
  padding-bottom: 40px;
}
.items {
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  z-index: 2;
}
.item {
  background: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1134px;
  margin: 0 auto;
  border-radius: 8px;
}
.left {
  padding: 34px 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #ebebeb;
}
.right {
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.name {
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  margin-bottom: 16px;
}
.sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #5d5d5f;
  margin: 0;
}
.download {
  border: 1px solid #b2061e;
  border-radius: 500px;
  color: #b2061e;
  width: 127px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  gap: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  margin-bottom: 16px;
  transition: 0.4s;
}
.download:hover {
  background: #b2061e;
  text-decoration: none;
  color: white;
}
.vector {
  position: absolute;
  top: 35%;
  right: 0;
  z-index: 1;
}
.pic {
  width: 100%;
  height: 320px;
  object-fit: contain;
  display: block;
}
@media screen and (max-width: 1024px) {
  .item {
    grid-template-columns: repeat(1, 1fr);
  }
  .pic {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
  .left {
    border-right: none;
    padding: 16px 0;
  }
  .download {
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    padding: 6px 16px;
  }
  .name {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    margin-bottom: 8px;
  }
  .right p {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
}
</style>
