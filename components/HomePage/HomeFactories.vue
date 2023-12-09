<template>
  <div class="cover">
    <div class="wrap" v-if="factories.length > 0">
      <div class="container container-sec">
        <div class="title">{{ $store.state.translations['main.main-1'] }}</div>
        <div class="grid" :class="{ show: showAll }">
          <div
            data-aos="fade-up"
            v-for="item in factories"
            :key="item.id"
            class="item"
          >
            <NuxtLink :to="`/${$route.params.lang}/factories/${item.slug}`">
              <p class="name">{{ item.title }}</p>
              <div class="img">
                <img :src="item.image" alt="" class="pic" />
              </div>
              <div class="content">
                <div class="txt" v-html="item.subtitle"></div>
                <div class="bottom">
                  <button>
                    {{ $store.state.translations['main.main-14'] }}
                  </button>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="btn__wrap">
          <button
            type="button"
            :class="{ show: showAll }"
            @click="showAll = true"
          >
            {{ $store.state.translations['main.see-more'] }}
          </button>
        </div>
      </div>
    </div>
    <div class="none" v-else></div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'HajtexHomeServices',

  props: ['factories'],

  data() {
    return {
      showAll: false,
    }
  },

  watch: {
    $route() {
      this.showAll = false
    },
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  padding-bottom: 160px;
}
.title {
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  font-family: var(--decor);
  margin-bottom: 32px;
  text-transform: uppercase;
}
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}
.show .item {
  display: block !important;
}
.btn__wrap button.show {
  display: none;
}
.item {
  position: relative;
  overflow: hidden;
  display: none;
}
.item:nth-child(1),
.item:nth-child(2),
.item:nth-child(3),
.item:nth-child(4),
.item:nth-child(5),
.item:nth-child(6) {
  display: block !important;
}
.item::after {
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
  border-radius: 12px;
  pointer-events: none;
  z-index: 1;
}
.pic {
  width: 100%;
  height: 453px;
  object-fit: cover;
  border-radius: 12px;
}
.name {
  position: absolute;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: white;
  top: 32px;
  left: 32px;
  z-index: 9;
}
.txt {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
}
.content {
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 45%;
  padding: 32px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.8s;
  z-index: 9;
}
.bottom {
  display: flex;
  justify-content: flex-end;
}
.bottom button {
  border: 1px solid #9a999b;
  border-radius: 500px;
  padding: 4px 8px;
}
.item:hover .content {
  bottom: 0;
}
.item a {
  color: black;
}
.btn__wrap {
  padding: 48px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn__wrap button {
  border: 1px solid #9a999b;
  border-radius: 500px;
  padding: 16px 0;
  width: 558px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  transition: 0.4s;
}
.btn__wrap button:hover {
  background: var(--blue);
  color: white;
  border-color: var(--blue);
}
@media screen and (max-width: 1500px) {
  .pic {
    height: 340px;
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
  .item {
    border-radius: 12px;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .content {
    bottom: 0;
    padding: 16px;
    gap: 16px;
    height: auto;
  }
  .name {
    top: 16px;
    left: 16px;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
  }
  .pic {
    height: 320px;
  }
  button {
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    padding: 8px 0 !important;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn__wrap {
    padding-top: 24px;
  }
}
</style>
