<template>
  <div class="wrap">
    <div class="container container-sec">
      <h4 class="title">
        {{ $store.state.translations['main.main-15'] }}
      </h4>
      <div class="items" data-aos="fade-up" data-aos-duration="200">
        <div v-for="item in categories" :key="item.id" class="item">
          <NuxtLink :to="`/${$route.params.lang}/products/${item.id}`">
            <div class="img">
              <img :src="item.image" alt="" class="pic" />
            </div>
            <p class="name">{{ item.name }}</p>
          </NuxtLink>
        </div>
      </div>
      <div class="button">
        <a :href="info.cotalog" class="download" download>
          <i class="bx bx-download"></i>
          {{ $store.state.translations['main.download-pdf'] }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HajtexHomeProducts',

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
  padding-bottom: 144px;
}
.title {
  font-weight: 400;
  font-size: 48px;
  line-height: 130%;
  text-align: center;
  font-family: var(--decor);
  max-width: 1500px;
  margin: 0 auto;
  margin-bottom: 40px;
}
.items {
  display: flex;
  align-items: center;
  gap: 20px;
}
.img {
  border-radius: 8px;
  position: relative;
}
.img::after {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(19, 36, 82, 0.4) 0%,
    rgba(19, 36, 82, 0) 76.57%
  );
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.pic {
  width: 100%;
  height: 544px;
  object-fit: cover;
  border-radius: 8px;
}
.item {
  position: relative;
  width: 25%;
  transition: 0.4s;
}
.item:hover {
  width: 50%;
}
.name {
  position: absolute;
  bottom: 40px;
  left: 40px;
  z-index: 9;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  color: white;
  transition: 0.4s;
}
.item:hover .name {
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
}
.button {
  display: flex;
  justify-content: center;
  padding-top: 24px;
}
.download {
  font-weight: 500;
  font-family: var(--medium);
  font-size: 16px;
  line-height: 19px;
  color: #132452;
  border: 1px solid #132452;
  border-radius: 500px;
  padding: 18px 56px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.4s;
}
.download i {
  font-size: 20px;
}
.download:hover {
  background: var(--blue);
  color: white;
  text-decoration: none;
}
@media screen and (max-width: 1500px) {
  .title {
    max-width: 80%;
    font-size: 32px;
  }
  .pic {
    height: 400px;
  }
}

@media screen and (max-width: 1024px) {
  .wrap {
    padding-bottom: 80px;
  }
  .title {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
  }
  .pic {
    height: 400px;
  }
  .items {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .item {
    width: 100%;
  }
  .item:hover {
    width: 100%;
  }
  .name {
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    bottom: 24px;
    left: 24px;
    margin: 0;
  }
}
</style>
