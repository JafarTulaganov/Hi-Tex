<template>
  <div class="master">
    <div class="container">
      <div class="top">
        <div class="crumbs">
          <NuxtLink :to="`/${$route.params.lang}`" class="last">{{
            $store.state.translations['inner.home']
          }}</NuxtLink>
          /
          <NuxtLink :to="`/${$route.params.lang}/sustainbility`" class="last">{{
            $store.state.translations['inner.sus']
          }}</NuxtLink>
          <p class="current">{{ type.title }}</p>
        </div>
        <h4 class="page">{{ type.title }}</h4>
      </div>
      <div class="main">
        <div class="row">
          <div class="col-lg-2 col-xs-12">
            <div class="aside">
              <div class="header">
                <p class="par">{{ $store.state.translations['inner.sus'] }}</p>
              </div>
              <div class="items">
                <div v-for="item in types" :key="item.id" class="item">
                  <NuxtLink
                    :to="`/${$route.params.lang}/sustainbility/${item.slug}`"
                    class="name"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-10 col-xs-12 right">
            <div class="content">
              <div class="img">
                <img :src="type.image" alt="" class="pic" />
              </div>
              <div class="body" v-html="type.text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import typesApi from '@/api/types'

export default {
  name: 'HajtexSlug',

  layout: 'inner',

  async asyncData({ $axios, params }) {
    const type = await typesApi.getType(params.slug, $axios, params.lang)
    const types = await typesApi.getTypes($axios, params.lang)

    return {
      type,
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
.par {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #132452;
  margin: 0;
  font-family: var(--medium);
}
.item {
  padding: 24px;
  border-bottom: 1px solid #ebebeb;
}
.item:last-child {
  border-bottom: none;
}
.name {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #5d5d5f;
  margin: 8px 0 0 0;
  transition: 0.4s;
}
.item:hover a {
  text-decoration: none;
}
.item:hover .name {
  color: var(--blue);
}
.main {
  padding-top: 48px;
}
.pic {
  width: 100% !important;
  height: 600px !important;
  object-fit: cover;
  margin-bottom: 24px !important;
  border-radius: 12px !important;
}
.body {
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: #5d5d5f;
}
.body::v-deep p {
  display: flex;
  justify-content: space-between;
}
.body::v-deep img {
  width: 49%;
  height: 360px;
  object-fit: cover;
  border-radius: 12px;
}
@media screen and (max-width: 1500px) {
  .master {
    padding-bottom: 80px;
  }
  .pic {
    height: 300px !important;
  }
  .body {
    font-size: 18px;
  }
}
@media screen and (max-width: 1024px) {
  .master {
    padding-bottom: 80px;
  }
  .right {
    margin-top: 24px;
  }
  .pic {
    height: 200px !important;
  }
  .body {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
}
</style>
