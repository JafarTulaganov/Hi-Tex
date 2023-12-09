<template>
  <div class="wrap">
    <div class="top">
      <div class="container">
        <div class="crumbs">
          <NuxtLink :to="`/${$route.params.lang}`" class="last">{{
            $store.state.translations['inner.home']
          }}</NuxtLink>
          /
          <p class="current">{{ $store.state.translations['inner.about'] }}</p>
        </div>
        <h4 class="page">{{ $store.state.translations['inner.info-3'] }}</h4>
      </div>
    </div>
    <div class="img">
      <img src="@/assets/img/page.jpg" alt="" class="pic" />

      <div class="bottom">
        <div class="container">
          <h1 class="name">{{ $store.state.translations['inner.hajtex'] }}</h1>

          <div class="links">
            <NuxtLink :to="`/${$route.params.lang}/certificates`">
              {{ $store.state.translations['inner.certificates'] }}
            </NuxtLink>
            <NuxtLink :to="`/${$route.params.lang}/history`">
              {{ $store.state.translations['inner.history'] }}
            </NuxtLink>
            <NuxtLink :to="`/${$route.params.lang}/management`">
              {{ $store.state.translations['inner.manage'] }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HajtexAboutTop',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.top {
  padding-bottom: 40px;
}
.pic {
  height: 800px;
  width: 100%;
  object-fit: cover;
}
.img {
  position: relative;
}
.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(2, 1, 5, 0.16);
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(22px);
  padding: 40px 0;
}
.bottom .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.name {
  font-weight: 400;
  font-size: 56px;
  line-height: 110%;
  color: white;
  font-family: var(--decor);
}
.links {
  display: flex;
  align-items: center;
  gap: 45px;
}
.links a {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: white;
  text-decoration: underline;
}
@media screen and (max-width: 1500px) {
  .pic {
    height: 500px;
  }
  .name {
    font-size: 40px;
    margin: 0;
  }
  .bottom {
    padding: 24px 0;
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-top: 0 !important;
  }
  .name {
    font-weight: 400;
    font-size: 24px;
    line-height: 110%;
  }
  .container {
    flex-direction: column;
    align-items: flex-start !important;
  }
  .links {
    align-items: flex-start;
    gap: 0;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  }
  .links a {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    white-space: nowrap;
  }
  .pic {
    height: 600px;
  }
}
</style>
