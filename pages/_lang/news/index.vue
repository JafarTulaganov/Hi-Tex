<template>
  <div class="master">
    <div class="container">
      <div class="top">
        <div class="crumbs">
          <NuxtLink :to="`/${$route.params.lang}`" class="last">{{
            $store.state.translations['inner.home']
          }}</NuxtLink>
          /
          <p class="current">
            {{ $store.state.translations['inner.magazine'] }}
          </p>
        </div>
        <h4 class="page">{{ $store.state.translations['inner.magazine'] }}</h4>
      </div>
      <div class="items latest">
        <div v-for="item in latest" :key="item.id" class="item">
          <NuxtLink :to="`/${$route.params.lang}/news/${item.slug}`">
            <div class="img">
              <img :src="item.image" alt="" class="pic" />
              <div class="tag">Latest</div>
            </div>
            <div class="content">
              <p class="date">
                <i class="bx bx-calendar"></i> {{ item.created_date }}
              </p>
              <h4 class="title">{{ item.title }}</h4>
              <p class="sub" v-html="item.body"></p>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="other">
        <div v-for="item in regular" :key="item.id" class="item">
          <NuxtLink :to="`/${$route.params.lang}/news/${item.slug}`">
            <div class="img">
              <img :src="item.image" alt="" class="pic" />
            </div>
            <div class="content">
              <p class="date">
                <i class="bx bx-calendar"></i> {{ item.created_date }}
              </p>
              <h4 class="title">{{ item.title }}</h4>
              <p class="sub" v-html="item.body"></p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newsApi from '@/api/news'

export default {
  name: 'HajtexIndex',

  layout: 'inner',

  async asyncData({ $axios, params }) {
    const news = await newsApi.getNews($axios, params.lang)
    const latest = news.slice(0, 4)
    const regular = news.slice(4)

    return {
      news,
      latest,
      regular,
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
  padding: 160px 0 120px 0;
  background: #f8f8f8;
}
.items {
  padding-top: 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.item:first-child {
  grid-row: 1 / 4;
}
.latest .item a {
  display: grid;
  grid-template-columns: 3fr 7fr;
}
.latest .img {
  border-radius: 12px 0px 0px 12px;
}
.latest .pic {
  height: 200px;
}
.latest .title {
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;
}
.sub {
  font-weight: 400 !important;
  font-size: 17px !important;
  line-height: 150% !important;
  display: -webkit-box !important;
  overflow: hidden !important;
  height: 76px;
  margin: 0 !important;
  color: var(--black);
}
.pic {
  width: 100%;
  height: 268px;
  object-fit: cover;
  transition: 0.4s;
}
.img {
  overflow: hidden;
}
.content {
  background: white;
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 0 12px 12px 0;
}
.date {
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: #9a999b;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.title {
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  margin-bottom: 8px;
  color: var(--black);
  font-family: var(--decor);
}

.item a:hover {
  text-decoration: none;
}
.item:hover .pic {
  transform: scale(1.1);
}
.item:first-child a {
  display: block;
}
.item:first-child .img {
  border-radius: 12px 12px 0px 0px;
}
.item:first-child .pic {
  height: 440px;
}
.img {
  position: relative;
}
.tag {
  background: var(--red);
  font-weight: 400;
  font-size: 12px;
  line-height: 110%;
  text-transform: uppercase;
  padding: 10px 12px;
  font-family: var(--decor);
  color: white;
  display: inline-block;
  border-radius: 6px;
  position: absolute;
  top: 8px;
  right: 8px;
}
.item:first-child .content {
  border-radius: 0 0 12px 12px;
}
.item:first-child .tag {
  bottom: 16px;
  top: auto;
  left: 16px;
  right: auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  padding: 12px 16px;
}
.other {
  padding-top: 92px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.other .item .pic {
  height: 268px;
}
@media screen and (max-width: 1024px) {
  .items,
  .other {
    grid-template-columns: repeat(1, 1fr);
  }
  .pic {
    height: 200px !important;
  }
  .latest .title {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
  }
  .content {
    padding: 16px 24px;
  }
  .latest .content p {
    font-weight: 400 !important;
    font-size: 14px !important;
    line-height: 130% !important;
  }
}
</style>
