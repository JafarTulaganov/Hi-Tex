<template>
  <div class="wrap">
    <div class="container container-sec">
      <div class="mid">
        <div>
          <img src="@/assets/img/logo/repost.svg" alt="" class="repost" />
        </div>
        <div class="">
          <p class="name">{{ $store.state.translations['inner.info'] }}</p>
          <div class="flex">
            <p>
              {{ $store.state.translations['inner.info-1'] }}
            </p>
            <p>
              {{ $store.state.translations['inner.info-2'] }}
            </p>
          </div>
        </div>
      </div>
      <div class="videos">
        <div class="wrep">
          <video
            src="video-1.webm"
            autoplay
            muted
            playsinline
            loop
            class="video"
          ></video>
        </div>
        <div class="wrep">
          <video
            src="video-2.webm"
            autoplay
            muted
            playsinline
            loop
            class="video"
          ></video>
        </div>
        <div class="wrep">
          <video
            src="video-3.webm"
            autoplay
            muted
            playsinline
            loop
            class="video"
          ></video>
        </div>
      </div>
      <div class="items">
        <div class="item">
          <p class="sup">{{ $store.state.translations['main.num-1'] }}</p>
          <p class="num">40.000</p>
          <p class="sub">{{ $store.state.translations['main.num-2'] }}</p>
        </div>
        <div class="item">
          <p class="sup">{{ $store.state.translations['main.num-3'] }}</p>
          <p class="num">4.2</p>
          <p class="sub">{{ $store.state.translations['main.num-4'] }}</p>
        </div>
        <div class="item">
          <p class="sup">{{ $store.state.translations['main.num-5'] }}</p>
          <p class="num">9.400</p>
          <p class="sub">{{ $store.state.translations['main.num-6'] }}</p>
        </div>
        <div class="item">
          <p class="sup">{{ $store.state.translations['main.num-7'] }}</p>
          <p class="num">7.2</p>
          <p class="sub">{{ $store.state.translations['main.num-8'] }}</p>
        </div>
        <div class="item">
          <p class="sup">{{ $store.state.translations['main.num-9'] }}</p>
          <p class="num">8.400</p>
          <p class="sub">{{ $store.state.translations['main.num-10'] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HajtexHomeAbout',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  padding: 98px 0 144px 0;
}
.top p {
  font-weight: 400;
  font-size: 48px;
  line-height: 130%;
}
.top {
  margin-bottom: 42px;
}
.mid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;
}
.mid p {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  max-width: 500px;
}
.right {
  display: flex;
  align-items: center;
  gap: 80px;
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
  color: var(--black);
  text-decoration: underline;
}
.images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 56px;
}
.items {
  display: flex;
  justify-content: space-between;
}
.item {
  display: flex;
  flex-direction: column;
}
.num {
  font-weight: 500;
  font-size: 80px;
  line-height: 110%;
  color: var(--blue);
  font-family: var(--decor);
  margin-bottom: 8px;
}
.sup {
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  margin: 10px;
}
.sub {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: var(--blue);
  font-family: var(--medium);
}
.flex {
  display: flex;
  align-items: flex-start;
  gap: 40px;
}
.name {
  font-weight: 400 !important;
  font-size: 40px !important;
  line-height: 130% !important;
  max-width: 100% !important;
  font-family: var(--decor);
  text-transform: uppercase;
}
.videos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 48px;
}
.video {
  width: 100%;
  height: 340px;
  object-fit: cover;
  border-radius: 12px;
}
</style>
