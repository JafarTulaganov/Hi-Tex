<template>
  <div class="master">
    <div class="container">
      <div class="top">
        <div class="crumbs">
          <NuxtLink :to="`/${$route.params.lang}`" class="last">{{
            $store.state.translations['inner.home']
          }}</NuxtLink>
          /
          <p class="current">{{ $store.state.translations['inner.report'] }}</p>
        </div>
        <h4 class="page">{{ $store.state.translations['inner.report'] }}</h4>
      </div>
      <div class="row">
        <div class="col-lg-2 col-xs-12">
          <div class="aside">
            <div class="header">
              <p class="paragraph">
                {{ $store.state.translations['inner.investor'] }}
              </p>
            </div>
            <ul class="links">
              <li class="item">
                <NuxtLink to="/">{{
                  $store.state.translations['inner.report0']
                }}</NuxtLink>
              </li>
              <li class="item">
                <NuxtLink to="/">{{
                  $store.state.translations['inner.invest']
                }}</NuxtLink>
              </li>
              <li class="item">
                <NuxtLink to="/">{{
                  $store.state.translations['inner.audit']
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-10 col-xs-12 main-kun">
          <div class="img">
            <img src="@/assets/img/report.jpg" alt="" class="pic" />
          </div>

          <div class="body">
            <div class="buttons">
              <button class="button active">
                {{ $store.state.translations['inner.quarter'] }}
              </button>
              <button class="button">
                {{ $store.state.translations['inner.year'] }}
              </button>
            </div>

            <Accordion>
              <AccordionItem>
                <template slot="accordion-trigger">
                  <p>2020</p>

                  <div class="arrow"></div>
                </template>
                <template slot="accordion-content">
                  <div class="quarter">
                    <p>Q3:OCTOBER - DECEMBER 2002</p>
                  </div>
                  <div class="answer">
                    <div class="cards">
                      <div class="cardo">
                        <div class="card__top">
                          <div class="card__img">
                            <img
                              src="@/assets/img/media-1.jpg"
                              alt=""
                              class="card__pic"
                            />
                          </div>
                          <p class="name">
                            Arvind Ltd Q3 FY23 earnings conference call
                          </p>
                        </div>
                        <a href="#" class="downloader">
                          <i class="bx bx-download"></i>
                          {{ $store.state.translations['inner.download'] }}
                        </a>
                      </div>

                      <div class="cardo">
                        <div class="card__top">
                          <div class="card__logo">
                            <img
                              src="@/assets/img/logo/brand-tra2.svg"
                              alt=""
                            />
                          </div>
                          <p class="name">
                            Arvind Ltd Q3 FY23 earnings conference call
                          </p>
                        </div>
                        <a href="#" class="downloader">
                          <i class="bx bx-download"></i>
                          {{ $store.state.translations['inner.download'] }}
                        </a>
                      </div>
                    </div>
                  </div>
                </template>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '@/components/Accordion.vue'
import AccordionItem from '@/components/AccordionItem.vue'

export default {
  name: 'HajtexReport',

  components: {
    Accordion,
    AccordionItem,
  },

  layout: 'inner',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.master {
  padding: 200px 0 88px 0;
  background: #f8f8f8;
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
.paragraph {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #132452;
  margin: 0;
}
.item {
  padding: 24px;
  background: white;
  border-bottom: 1px solid #ebebeb;
}
.item:last-child {
  border-bottom: none;
}
.aw {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #020105;
  margin: 0;
  color: #5d5d5f;
  transition: 0.4s;
}
.item:hover a {
  text-decoration: none;
  color: var(--red);
}
.item:hover .name {
  color: var(--blue);
}
.item a {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #5d5d5f;
  transition: 0.4s;
}
.top {
  margin-bottom: 48px;
}
.main-kun {
  padding: 40px;
  background: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 12px;
}
.button {
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  padding: 12px 32px;
  color: #9a999b;
  border: 1px solid #9a999b;
  border-radius: 500px;
  font-family: var(--decor);
  text-transform: uppercase;
}
.img {
  margin-bottom: 40px;
}
.buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}
.button.active {
  color: var(--red);
  border-color: var(--red);
}
.quarter {
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--red);
  background: #f8f8f8;
  padding: 8px 24px;
}
.answer {
  padding: 24px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
}
.cardo {
  background: #f8f8f8;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.card__pic {
  width: 100%;
  height: 160px;
  object-fit: cover;
}
.card__img {
  margin-bottom: 8px;
}
.name {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  margin-bottom: 32px !important;
}
.downloader {
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #b2061e;
  display: flex;
  align-items: center;
  gap: 6px;
}
.card__logo {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
