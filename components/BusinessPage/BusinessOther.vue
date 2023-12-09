<template>
  <div class="wrap">
    <div class="container container-sec">
      <h4 class="title">
        {{ $store.state.translations['inner.txt-5'] }}
      </h4>
      <div class="items">
        <div v-for="item in services" :key="item.id" class="item">
          <NuxtLink :to="`/${$route.params.lang}/businesses/${item.slug}`">
            <div class="img">
              <img :src="item.image" alt="" class="pic" />
            </div>
            <p class="name">{{ item.title }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HajtexHomeProducts',

  props: ['services'],

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
.item::after {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(255, 255, 255, 0) 22%,
    rgba(0, 0, 0, 0.2945553221288515) 100%
  );
  border-radius: 8px;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  margin: 0;
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 9;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: white;
  transition: 0.4s;
}
.item:hover .name {
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
}
@media screen and (max-width: 1500px) {
  .title {
    font-size: 32px;
    max-width: 80%;
  }
  .pic {
    height: 340px;
  }
  .name {
    left: 12px;
    bottom: 10px;
  }
  .items {
    gap: 10px;
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
