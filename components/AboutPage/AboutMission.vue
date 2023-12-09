<template>
  <div class="wraps">
    <div class="container">
      <p class="title">{{ $store.state.translations['inner.mission'] }}</p>
      <div class="items">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="100"
          data-aos-duration="100"
          class="item"
        >
          <div class="img">
            <img src="@/assets/img/logo/mission-1.svg" alt="" class="pic" />
          </div>
          <p>
            {{ $store.state.translations['inner.txt-1'] }}
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="200"
          data-aos-duration="200"
          class="item"
        >
          <div class="img">
            <img src="@/assets/img/logo/mission-2.svg" alt="" class="pic" />
          </div>
          <p>
            {{ $store.state.translations['inner.txt-2'] }}
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="250"
          data-aos-duration="250"
          class="item"
        >
          <div class="img">
            <img src="@/assets/img/logo/mission-3.svg" alt="" class="pic" />
          </div>
          <p>
            {{ $store.state.translations['inner.txt-3'] }}
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="300"
          data-aos-duration="300"
          class="item"
        >
          <div class="img">
            <img src="@/assets/img/logo/mission-4.svg" alt="" class="pic" />
          </div>
          <p>
            {{ $store.state.translations['inner.txt-4'] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HajtexAboutMission',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wraps {
  padding: 144px 0;
}
.title {
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  font-family: var(--decor);
  text-transform: uppercase;
  margin-bottom: 32px;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.item {
  border: 1px solid #d0d0d0;
  border-radius: 12px;
  padding: 40px;
}
.img {
  margin-bottom: 56px;
}
.item p {
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;
  color: var(--black);
}
@media screen and (max-width: 1024px) {
  .wraps {
    padding: 80px 0;
  }
  .items {
    grid-template-columns: repeat(1, 1fr);
  }
  .title {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
  }
  .item {
    padding: 24px;
  }
  .pic {
    width: 64px;
  }
  .img {
    margin-bottom: 16px;
  }
  .item p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    margin: 0;
  }
}
</style>
