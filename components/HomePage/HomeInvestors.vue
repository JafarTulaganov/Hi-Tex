<template>
  <div class="wrap">
    <div class="container-sec container">
      <div class="top">
        <div class="left">
          <p class="sup">{{ $store.state.translations['main.main-7'] }}</p>

          <img src="@/assets/img/logo/repost.svg" alt="" class="repost" />
        </div>
        <div class="right">
          <h4 data-aos="fade-left" class="title">
            {{ $store.state.translations['main.main-8'] }}
          </h4>
          <p class="txt">
            {{ $store.state.translations['main.main-9'] }}
          </p>
          <p class="txt">
            {{ $store.state.translations['main.main-10'] }}
          </p>
        </div>
      </div>
      <div
        class="items"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="200"
      >
        <div v-for="item in investors" :key="item.id" class="item">
          <NuxtLink :to="`/${$route.params.lang}/investors/${item.slug}`">
            <div class="img">
              <img :src="item.image" alt="" class="pic" />
            </div>
            <div class="content">
              <p class="name">
                {{ item.name }}
              </p>

              <button>{{ $store.state.translations['main.main-14'] }}</button>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HajtexHomeInvestors',

  props: ['investors'],

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  padding: 150px 0;
  overflow-x: hidden;
}
.top {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 48px;
}
.title {
  font-weight: 400;
  font-size: 48px;
  line-height: 130%;
  font-family: var(--decor);
  text-transform: uppercase;
  margin-bottom: 24px;
}
.txt {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 16px;
  max-width: 557px;
  display: block;
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.repost {
  width: 92px;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.img {
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 24px;
}
.pic {
  width: 100%;
  height: 576px;
  object-fit: cover;
  border-radius: 8px;
  width: 100%;
  transition: 0.4s;
}

.item:nth-child(2) .pic {
  height: 450px;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.name {
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  margin: 0;
}
.item a {
  color: var(--black);
}
.item a:hover {
  text-decoration: none;
}
.item button {
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  padding: 8px 16px;
  border: 1px solid #9a999b;
  border-radius: 500px;
  color: #5d5d5f;
  transition: 0.4s;
}
.item:hover button {
  text-decoration: none;
  background: var(--blue);
  color: white;
  border-color: var(--blue);
}
.item:hover .pic {
  transform: scale(1.1);
}
@media screen and (max-width: 1500px) {
  .title {
    font-size: 32px;
  }
  .item .pic {
    height: 370px;
  }
  .item:nth-child(2) .pic {
    height: 320px;
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 80px 0;
  }
  .top {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .items {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .repost {
    display: none;
  }
  .title {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
  }
  .pic {
    height: 260px !important;
  }
}
</style>
