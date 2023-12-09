<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-xs-12">
          <div class="aside">
            <div class="header">
              <p class="par">{{ $store.state.translations['inner.vac'] }}</p>
            </div>
            <div class="items">
              <div
                v-for="item in vacancies"
                :key="item.id"
                class="item"
                :class="{ active: activeTab === item.id }"
                @click="activeTab = item.id"
              >
                <p>
                  {{ item.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-10 col-xs-12">
          <div
            v-for="item in vacancies"
            :key="item.id"
            :class="{ active: activeTab === item.id }"
            class="body"
          >
            <div
              v-for="vacancy in item.vacansy"
              :key="vacancy.id"
              class="cardo"
              @click="getId(vacancy.id, item.id)"
            >
              <div class="content">
                <p class="name">{{ vacancy.name }}</p>

                <div class="right">
                  <button type="button">
                    {{ $store.state.translations['main.more'] }}
                    <i class="bx bx-right-arrow-alt"></i>
                  </button>
                </div>
              </div>
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
          <h4 class="modal__title">{{ vacancyId.name }}</h4>
          <p class="modal__sub">{{ vacancyId.subtitle }}</p>
        </div>

        <div class="specs" v-html="vacancyId.requirements"></div>

        <button
          class="modal__button"
          @click="modalHandle = false"
          onclick="location.href='#contacts';"
        >
          Оставить заявку <i class="bx bx-right-arrow-alt"></i>
        </button>

        <img class="tra" src="@/assets/img/logo/tra.svg" alt="" />
      </div>
    </div>
    <div id="contacts" class="contacts"></div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'HajtexCareerVacancies',

  props: ['vacancies'],

  data() {
    return {
      activeTab: 1,
      modalHandle: false,
      vacancyId: {},
    }
  },

  watch: {
    $route() {
      this.modalHandle = false
    },
  },

  mounted() {
    this.activeTab = this.vacancies[0].id
  },

  methods: {
    getId(id, it) {
      const parent = this.vacancies.find((item) => item.id == it)
      this.vacancyId = parent.vacansy.find((item) => item.id == id)

      this.modalHandle = true
    },
  },
}
</script>

<style scoped>
.wrap {
  padding: 144px 0 112px 0;
}
.aside {
  position: sticky;
  top: 130px;
  border: 1px solid #ebebeb;
  border-radius: 12px;
}
.header {
  background: #f5f5f7;
  border-radius: 11px 11px 0px 0px;
  padding: 16px 24px;
}
.par {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #132452;
  margin: 0;
}
.item {
  padding: 24px;
  border-bottom: 1px solid #ebebeb;
  transition: 0.4s;
  background: white;
}
.cardo:hover {
  border: 1.5px solid #ffb9b9;
}
.item:last-child {
  border-bottom: none;
}
.item a {
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: #020105;
  margin: 8px 0 0 0;
  transition: 0.4s;
}
.item:hover a {
  text-decoration: none;
}
.item:hover .item a {
  color: var(--blue);
}
.body {
  background: white;
  padding: 40px;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  display: none;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.cardo {
  border: 1px solid #ebebeb;
  border-radius: 12px;
  overflow: hidden;
  transition: 0.4s;
  cursor: pointer;
}
.img {
  overflow: hidden;
}
.pic {
  width: 100%;
  height: 331px;
  object-fit: cover;
}
.content {
  padding: 24px 32px;
}
.name {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 8px;
}
.sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #353437;
  margin-bottom: 24px;
}
.content button {
  padding: 12px 0;
  gap: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #b2061e;
  font-family: var(--medium);
  transition: 0.4s;
}
.content button:hover {
  text-decoration: none;
}
.item.active {
  color: var(--red);
}
.body.active {
  display: grid;
}
.right {
  display: flex;
  justify-content: flex-end;
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
@media screen and (max-width: 1500px) {
  .wrap {
    padding: 80px 0;
  }
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 24px 0;
  }
  .body {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 16px;
    padding: 16px;
  }
}
</style>
