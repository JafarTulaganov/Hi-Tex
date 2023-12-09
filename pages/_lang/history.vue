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
            {{ $store.state.translations['inner.history'] }}
          </p>
        </div>
        <h4 class="page">{{ $store.state.translations['inner.history'] }}</h4>
      </div>
      <div class="iframe">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fDPqDPtsvX4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <!-- <div class="image">
        <img src="@/assets/img/brothers.png" alt="" class="pic" />

        <div class="names">
          <p class="name">{{ $store.state.translations['inner.name-1'] }}</p>
          <p class="name name2">
            {{ $store.state.translations['inner.name-2'] }}
          </p>
        </div>
      </div> -->
      <div class="story">
        <h4 class="paragraph">
          {{ $store.state.translations['inner.story'] }}
        </h4>
        <p>
          {{ $store.state.translations['inner.story-1'] }}
        </p>
        <p>
          {{ $store.state.translations['inner.story-2'] }}
        </p>
      </div>

      <AboutCards :stories="stories" :years="years" />
    </div>
  </div>
</template>

<script>
import mediaApi from '@/api/media'

import AboutCards from '@/components/AboutPage/AboutCards.vue'

export default {
  name: 'HajtexHistory',

  components: {
    AboutCards,
  },

  layout: 'inner',

  async asyncData({ $axios, params }) {
    const stories = await mediaApi.getStories($axios, params.lang)

    const years = stories.map((item) => item.year)

    return {
      stories,
      years,
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
  padding-bottom: 126px;
  background: #f8f8f8;
}
.image {
  position: relative;
  margin-bottom: 114px;
}
.image::after {
  background: linear-gradient(
    180deg,
    rgba(248, 248, 248, 0) 0%,
    #f8f8f8 76.04%,
    #f8f8f8 100%
  );
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
}
.pic {
  width: 100%;
}
.name {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  background: var(--blue);
  padding: 10px 24px;
  position: absolute;
  bottom: 0;
  left: 300px;
  z-index: 9;
  color: white;
  border-radius: 6px;
}
.name2 {
  right: 300px;
  left: auto;
}
.story {
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}
.paragraph {
  font-weight: 400;
  font-size: 48px;
  line-height: 110%;
  text-transform: uppercase;
  font-family: var(--decor);
  margin-bottom: 32px;
  color: var(--blue);
}
.story p {
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;
  margin-bottom: 32px;
  display: block;
}
.iframe {
  padding: 32px 0 80px 0;
}
.iframe iframe {
  width: 100%;
  height: 500px;
  border-radius: 24px;
}
@media screen and (max-width: 1500px) {
  .paragraph {
    font-size: 32px;
  }
  .story p {
    font-size: 18px;
    max-width: 80%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 1024px) {
  .name2 {
    right: 200px;
    left: auto !important;
  }
  .name {
    left: 200px;
    padding: 12px;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
  .paragraph {
    font-weight: 400;
    font-size: 24px;
    line-height: 110%;
    margin-bottom: 16px;
  }
  .story p {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    margin-bottom: 16px;
  }
}
</style>
