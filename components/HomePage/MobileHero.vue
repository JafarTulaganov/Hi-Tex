<template>
  <div class="wrap">
    <video muted loop autoplay playsinline src="/hero.mp4"></video>
    <div class="container">
      <div class="top">
        <h1 class="title">HAJ TEX GROUP</h1>
        <p class="sub">
          Advanced technologies, high capacities and strict control by qualified
          specialists at every stage of production.
        </p>
      </div>
      <div class="bottom">
        <NuxtLink class="link" to="/"> READ MORE </NuxtLink>

        <div class="links">
          <NuxtLink v-for="item in categories" :key="item.id" to="/">
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HajtexMobileHero',

  props: ['categories'],

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 120px 0 24px 0;
}
.wrap::after {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32));
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
}
.container {
  position: relative;
  z-index: 9;
}
.title {
  font-weight: 500;
  font-size: 47px;
  line-height: 130%;
  color: white;
  text-align: center;
  margin-bottom: 8px;
}
.sub {
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: white;
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
}
.wrap .container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
.link {
  border: 2px solid #ffffff;
  border-radius: 500px;
  font-weight: 500;
  font-family: var(--medium);
  font-size: 14px;
  line-height: 130%;
  padding: 12px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 24px;
}
.links {
  display: flex;
  align-items: center;
  gap: 40px;
  overflow: auto;
}
.links a {
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  font-family: var(--medium);
  color: white;
  white-space: nowrap;
}
.links::-webkit-scrollbar {
  display: none;
}
</style>
