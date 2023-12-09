<template>
  <div class="master">
    <div class="container">
      <div class="back">
        <NuxtLink :to="`/${$route.params.lang}/news`">
          <i class="bx bx-left-arrow-alt"></i>
          {{ $store.state.translations['inner.back'] }}
        </NuxtLink>
      </div>
      <div class="row">
        <div class="col-lg-9 col-xs-12">
          <div class="main">
            <p class="date">
              <i class="bx bx-calendar"></i> {{ post.created_date }}
            </p>

            <h1 class="title">{{ post.title }}</h1>

            <div class="img">
              <img :src="post.image" alt="" class="pic" />
            </div>

            <div class="body" v-html="post.body"></div>
          </div>
        </div>
        <div class="col-lg-3 col-xs-12">
          <div class="aside">
            <div class="header">
              <h4 class="paragraph">
                {{ $store.state.translations['inner.another'] }}
              </h4>
            </div>
            <div class="items">
              <div v-for="item in posts" :key="item.id" class="item">
                <NuxtLink :to="`/${$route.params.lang}/news/${item.slug}`">
                  <p class="date">
                    <i class="bx bx-calendar"></i> {{ item.created_date }}
                  </p>
                  <p class="name">{{ item.title }}</p>
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
import newsApi from '@/api/news'

export default {
  name: 'HajtexSlug',

  layout: 'inner',

  async asyncData({ $axios, params }) {
    const post = await newsApi.getNew(params.slug, $axios, params.lang)
    const posts = await newsApi.getNews($axios, params.lang)

    return {
      post,
      posts,
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
  background: #f8f8f8;
  padding: 160px 0 112px 0;
}
.back {
  margin-bottom: 48px;
}
.back a {
  background: #ffffff;
  border-radius: 72px;
  padding: 8px 16px 8px 8px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #020105;
  gap: 8px;
  display: inline-flex;
  text-transform: capitalize;
}
.back i {
  padding: 8px;
  background: #f8f8f8;
  border-radius: 50%;
  font-size: 20px;
}
.back:hover a {
  text-decoration: none;
}
.date {
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: #9a999b;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}
.title {
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  font-family: var(--decor);
  margin-bottom: 24px;
}
.pic {
  height: 677px;
  width: 100%;
  border-radius: 12px;
  margin-bottom: 40px;
  object-fit: cover;
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
  color: #132452;
}
.aside .date {
  margin-bottom: 8px;
}
.item {
  padding: 24px;
  border-bottom: 1px solid #ebebeb;
  background: white;
}
.item:last-child {
  border-bottom: none;
}
.name {
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: #020105;
  font-family: var(--decor);
  margin: 8px 0 0 0;
  transition: 0.4s;
}
.item:hover a {
  text-decoration: none;
}
.item:hover .name {
  color: var(--blue);
}
@media screen and (max-width: 1500px) {
  .pic {
    height: 400px;
  }
  .body {
    font-size: 18px;
  }
}
@media screen and (max-width: 1024px) {
  .title {
    font-weight: 400;
    font-size: 32px;
    line-height: 110%;
  }
  .pic {
    height: 340px;
  }
  .body {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }
  .aside {
    margin-top: 24px;
  }
  .name {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }
  .paragraph {
    margin: 0;
  }
  .item {
    padding: 16px;
  }
  .master {
    padding-bottom: 80px;
  }
}
</style>
