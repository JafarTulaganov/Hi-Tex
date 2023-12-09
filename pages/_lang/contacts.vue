<template>
  <div class="master">
    <HomeContacts class="inside" :info="info" />
    <div class="warehouses">
      <div class="container">
        <h4 class="ware__title">
          {{ $store.state.translations['inner.warehouses'] }}
        </h4>
        <div class="items">
          <div class="item">
            <div class="flag">
              <img src="@/assets/img/logo/ru.png" alt="" />
            </div>
            <div class="cont">
              <p class="country">
                {{ $store.state.translations['inner.russia'] }}
              </p>
              <p class="num">
                {{ $store.state.translations['inner.russia_phone'] }}
              </p>
              <p class="address">
                {{ $store.state.translations['inner.russia_address'] }}
              </p>
            </div>
          </div>
          <div class="item">
            <div class="flag">
              <img src="@/assets/img/logo/pl.png" alt="" />
            </div>
            <div class="cont">
              <p class="country">
                {{ $store.state.translations['inner.poland'] }}
              </p>
              <p class="num">
                {{ $store.state.translations['inner.poland_phone'] }}
              </p>
              <p class="address">
                {{ $store.state.translations['inner.poland_address'] }}
              </p>
            </div>
          </div>
          <div class="item">
            <div class="flag">
              <img src="@/assets/img/logo/be.png" alt="" />
            </div>
            <div class="cont">
              <p class="country">
                {{ $store.state.translations['inner.belarus'] }}
              </p>
              <p class="address">
                {{ $store.state.translations['inner.belarus_address'] }}
              </p>
            </div>
          </div>
          <div class="item">
            <div class="flag">
              <img src="@/assets/img/logo/us.png" alt="" />
            </div>
            <div class="cont">
              <p class="country">
                {{ $store.state.translations['inner.usa'] }}
              </p>
              <p class="address">
                {{ $store.state.translations['inner.usa_address'] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeContacts from '@/components/HomePage/HomeContacts'
import infoApi from '@/api/media'

export default {
  name: 'HajtexContacts',

  components: {
    HomeContacts,
  },

  layout: 'inner',

  async asyncData({ $axios, params }) {
    const info = await infoApi.getInfo($axios, params.lang)

    return {
      info,
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
  padding: 80px 0 0 0;
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 64px;
}
.item {
  padding: 16px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: #fff;
  backdrop-filter: blur(22px);
  display: flex;
  gap: 16px;
}
.flag {
  width: 100%;
  max-width: 80px;
}
.flag img {
  width: 80px;
  height: 48px;
  border-radius: 4px;
}
.country {
  margin-bottom: 8px;
  color: var(--Dark-blue, #132452);
  font-family: var(--decor);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 26px */
}
.num {
  color: var(--Blood-red, #b2061e);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 21.6px */
  margin-bottom: 8px;
}
.address {
  color: var(--Black, #020105);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-bottom: 0;
}
@media screen and (max-width: 1024px) {
  .items {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
