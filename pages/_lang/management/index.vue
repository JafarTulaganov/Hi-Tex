<template>
  <div class="wrap">
    <div class="container">
      <div class="top">
        <div class="crumbs">
          <NuxtLink :to="`/${$route.params.lang}`" class="last">{{
            $store.state.translations['inner.home']
          }}</NuxtLink>
          /
          <p class="current">
            {{ $store.state.translations['inner.management'] }}
          </p>
        </div>
        <h4 class="page">
          {{ $store.state.translations['inner.management'] }}
        </h4>
      </div>

      <div class="main">
        <div class="buttons">
          <button
            v-for="item in staff"
            :key="item.id"
            :class="{ active: activeTab === item.id }"
            class="button"
            @click="activeTab = item.id"
          >
            {{ item.title }}
          </button>
        </div>
        <div
          v-for="item in staff"
          :key="item.id"
          :class="{ active: activeTab === item.id }"
          class="items"
        >
          <div v-for="person in item.workers" :key="person.id" class="item">
            <div class="img">
              <img :src="person.avatar" alt="" class="pic" />
            </div>
            <div class="content">
              <div class="left">
                <p class="status">{{ person.title }}</p>
                <p class="name">{{ person.full_name }}</p>
              </div>
              <button class="more" @click="getId(item.id, person.id)">
                {{ $store.state.translations['inner.more'] }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modaller" :class="{ show: modalHandle }">
      <div class="modal__wrap" @click="modalHandle = false"></div>
      <div class="modal__body">
        <div class="x" @click="modalHandle = false">
          <i class="bx bx-x"></i>
        </div>
        <div class="modal__top">
          <img :src="staffId.avatar" alt="" class="image" />
          <p class="modal__sub">{{ staffId.title }}</p>

          <h4 class="modal__title">{{ staffId.full_name }}</h4>

          <p v-html="staffId.description"></p>
        </div>

        <img class="tra" src="@/assets/img/logo/tra.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import staffApi from '@/api/staff'

export default {
  name: 'ManagementPage',

  layout: 'inner',

  async asyncData({ $axios, params }) {
    const staff = await staffApi.getStaff($axios, params.lang)

    return {
      staff,
    }
  },

  data() {
    return {
      activeTab: 1,
      staffId: {},
      modalHandle: false,
    }
  },

  watch: {
    $route() {
      this.modalHandle = false
    },
  },

  mounted() {
    this.activeTab = this.staff[0].id
  },

  methods: {
    getId(id, it) {
      const parent = this.staff.find((item) => item.id === id)
      this.staffId = parent.workers.find((item) => item.id === it)

      this.modalHandle = true
    },
  },
}
</script>

<style scoped>
.wrap {
  padding-top: 160px;
  background: #f8f8f8;
}
.top {
  padding-bottom: 48px;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-bottom: 64px;
}
.button {
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  font-family: var(--decor);
  text-transform: uppercase;
  padding: 12px 32px;
  border: 1px solid #9a999b;
  border-radius: 500px;
  color: #9a999b;
}
.stick {
  font-size: 24px;
  color: #9a999b;
  margin: 0;
}
.button.active {
  color: var(--blue);
  border-color: var(--blue);
}
.items {
  display: none;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-bottom: 114px;
}
.items.active {
  display: grid;
}
.pic {
  width: 100%;
  height: 480px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 12px;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.status {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #353437;
  margin-bottom: 4px;
}
.name {
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  margin: 0;
}
.more {
  padding: 8px 16px;
  border: 1px solid #9a999b;
  border-radius: 500px;
  color: #9a999b;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  transition: 0.4s;
}
.more:hover {
  background: var(--blue);
  color: white;
}

.modaller {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.4s;
}
.modaller.show {
  opacity: 1;
  visibility: visible;
  z-index: 100;
  pointer-events: initial;
}
.modal__body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 0px 28px 52px rgba(29, 31, 33, 0.08);
  border-radius: 12px;
  padding: 40px 48px;
  min-width: 70%;
  z-index: 9;
}
.x {
  position: absolute;
  top: 30px;
  right: 35px;
  font-size: 28px;
  color: #b2061e;
  cursor: pointer;
}
.tra {
  position: absolute;
  right: 80px;
  top: 50%;
  transform: translateY(-50%);
}
.modal__title {
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  font-family: var(--decor);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.modal__sub {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  max-width: 800px;
}
.modal__button {
  padding: 16px 46px;
  border: 1px solid #b2061e;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #b2061e;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.specs {
  padding: 16px 0;
  max-width: 700px;
  border-top: 1px solid #e6e6e6;
}
.modal__wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
}
.image {
  width: 300px;
  max-height: 349px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 24px;
}
.modal__top p {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  max-width: 1000px;
}
@media screen and (max-width: 1500px) {
  .pic {
    height: 320px;
  }
}
@media screen and (max-width: 1024px) {
  .pic {
    height: 200px;
    border-radius: 8px;
  }
  .items {
    grid-template-columns: repeat(2, 1fr);
  }
  .more {
    display: none;
  }
  .status {
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
  }
  .name {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
  .button {
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;
  }
  .top {
    padding-bottom: 24px;
  }
  .buttons {
    margin-bottom: 32px;
    justify-content: flex-start;
  }
}
</style>
