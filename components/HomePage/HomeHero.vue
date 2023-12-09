<template>
  <div class="wrap">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/dunWpep4z84?autoplay=1&mute=1&controls=0&loop=1&playlist=dunWpep4z84"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <div class="content" data-aos="fade-up">
      <div class="container">
        <div class="top">
          <h4 class="title">
            {{ $store.state.translations['main.title'] }}
            <span class="span"
              >{{ $store.state.translations['main.hajtex'] }}
            </span>
          </h4>
          <div>
            <p class="txt">
              {{ $store.state.translations['main.hero-1'] }}
            </p>
            <NuxtLink class="more" :to="`/${$route.params.lang}/about`">{{
              $store.state.translations['main.more']
            }}</NuxtLink>
          </div>
        </div>
        <div class="mid">
          <ul>
            <li class="aespa" v-for="item in categories" :key="item.id">
              <NuxtLink :to="`/${$route.params.lang}/products/${item.id}`">{{
                item.name
              }}</NuxtLink>
            </li>
          </ul>
          <a href="tel:+998998458371">{{ info.nbm }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHero',

  props: ['categories', 'info'],

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
  min-height: 100vh;
  color: white;
  padding-top: 135px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.wrap::after {
  background: linear-gradient(
    0deg,
    rgba(19, 36, 82, 0.4),
    rgba(19, 36, 82, 0.4)
  );
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.title {
  font-weight: 400;
  font-size: 64px;
  line-height: 110%;
  font-family: var(--decor);
  text-transform: uppercase;
  max-width: 60%;
}
.span {
  color: #e8314b;
}
.mid {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bottom {
  position: absolute;
  bottom: 56px;
  max-width: 80%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  max-width: 500px;
}
.more {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  padding: 8px 22px;
  border: 1px solid #ffffff;
  border-radius: 500px;
  color: white;
  transition: 0.4s;
}
.more:hover {
  text-decoration: none;
  background: white;
  color: black;
}
.bottom a {
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: white;
}
.bottom a:hover {
  text-decoration: none;
}
.content {
  position: relative;
  background: rgba(19, 36, 82, 0.16);
  backdrop-filter: blur(22px);
  z-index: 9;
}
.top {
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.24);
}
.txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  max-width: 500px;
  margin-bottom: 40px;
}
.mid {
  padding: 40px 0;
}
.mid ul {
  display: flex;
  align-items: center;
  gap: 56px;
}
.mid a {
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  color: white;
  font-family: var(--decor);
}
.mid a:hover {
  text-decoration: none;
}
.aespa {
  transition: 1s;
  display: flex;
  position: relative;
}
.aespa:hover a {
  transform: translateY(-3px);
}
.aespa a {
  transition: 0.4s;
}
.aespa::after {
  content: '';
  width: 0%;
  height: 3px;
  background: var(--red);
  position: absolute;
  bottom: 0px;
  left: 0;
  transition: 0.4s;
}
.aespa:hover::after {
  width: 100%;
}
@media screen and (max-width: 1500px) {
  .title {
    font-size: 48px;
  }
  .txt {
    margin-bottom: 24px;
  }
  .mid ul {
    gap: 32px;
  }
  .mid a {
    font-size: 18px;
  }
}
</style>
