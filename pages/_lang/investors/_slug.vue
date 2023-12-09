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
              <li v-for="item in investors" :key="item.id" class="item">
                <NuxtLink
                  :to="`/${$route.params.lang}/investors/${item.slug}`"
                  >{{ item.name }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-10 col-xs-12 main-kun">
          <div class="img">
            <img :src="investor.image" alt="" class="pic" />
          </div>

          <div class="body">
            <div class="buttons">
              <button
                v-for="child in investor.children"
                :key="child.id"
                class="button"
                :class="{ active: activeTab === child.id }"
                @click="activeTab = child.id"
              >
                {{ child.name }}
              </button>
            </div>

            <div v-for="children in investor.children" :key="children.id">
              <Accordion
                v-if="children.quarter_filter == true"
                class="accord"
                :class="{ active: activeTab === children.id }"
              >
                <AccordionItem
                  v-for="reports in children.reports"
                  :key="reports.id"
                >
                  <template slot="accordion-trigger">
                    <h4>
                      {{ reports.interval }}
                    </h4>
                  </template>
                  <template slot="accordion-content">
                    <div
                      v-for="quarters in reports.quarters"
                      :key="quarters.id"
                    >
                      <div class="quarter">
                        <p>
                          {{ quarters.title }}
                        </p>
                      </div>
                      <div class="cards">
                        <div
                          v-for="card in quarters.reports"
                          :key="card.id"
                          class="cardo"
                        >
                          <img
                            v-if="card.image == null"
                            src="@/assets/img/logo/brand-tra2.svg"
                            alt=""
                            class="card__logo"
                          />
                          <div class="card__top">
                            <div v-if="card.image != null" class="card__img">
                              <img :src="card.image" alt="" class="card__pic" />
                            </div>
                            <p class="name">
                              {{ card.title }}
                            </p>
                          </div>
                          <a
                            target="_blank"
                            :href="card.file"
                            class="downloader"
                            download
                          >
                            <i class="bx bx-download"></i>
                            {{ $store.state.translations['inner.download'] }}
                          </a>
                        </div>
                      </div>
                    </div>
                  </template>
                </AccordionItem>
              </Accordion>

              <Accordion
                v-if="children.year_filter == true"
                class="accord"
                :class="{ active: activeTab === children.id }"
              >
                <AccordionItem
                  v-for="reports in children.reports"
                  :key="reports.id"
                >
                  <template slot="accordion-trigger">
                    <h4>
                      {{ reports.interval }}
                    </h4>
                  </template>
                  <template slot="accordion-content">
                    <div class="cards pt-0">
                      <div
                        v-for="card in reports.reports"
                        :key="card.id"
                        class="cardo"
                      >
                        <img
                          v-if="card.image == null"
                          src="@/assets/img/logo/brand-tra2.svg"
                          alt=""
                          class="card__logo"
                        />
                        <div class="card__top">
                          <div v-if="card.image != null" class="card__img">
                            <img :src="card.image" alt="" class="card__pic" />
                          </div>
                          <p class="name">
                            {{ card.title }}
                          </p>
                        </div>
                        <a
                          target="_blank"
                          :href="card.file"
                          class="downloader"
                          download
                        >
                          <i class="bx bx-download"></i>
                          {{ $store.state.translations['inner.download'] }}
                        </a>
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
  </div>
</template>

<script>
import investorsApi from '@/api/investors'

import Accordion from '@/components/Accordion.vue'
import AccordionItem from '@/components/AccordionItem.vue'

export default {
  name: 'HajtexReport',

  components: {
    Accordion,
    AccordionItem,
  },

  layout: 'inner',

  async asyncData({ params, $axios }) {
    const investors = await investorsApi.getInvestors($axios, params.lang)
    const investor = await investorsApi.getInvestor(
      params.slug,
      $axios,
      params.lang
    )

    return {
      investors,
      investor,
    }
  },

  data() {
    return {
      activeTab: 1,
    }
  },

  mounted() {
    this.activeTab = this.investor.children[0].id
  },

  methods: {},
}
</script>

<style scoped>
.master {
  padding: 160px 0 88px 0;
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
  background: white;
  border-bottom: 1px solid #ebebeb;
}
.item a {
  padding: 24px;
  display: flex;
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
.pic {
  height: 500px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
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
  padding: 16px;
}
.cardo {
  background: #f8f8f8;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  min-height: 288px;
}
.card__pic {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
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
.downloader:hover {
  text-decoration: none;
}
.card__logo {
  position: absolute;
  bottom: 0;
  right: 0;
  pointer-events: none;
}
.accord {
  display: none;
}
.accord.active {
  display: block;
}
@media screen and (max-width: 1500px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
  }
  .pic {
    height: 400px;
  }
}
@media screen and (max-width: 1024px) {
  .main-kun {
    padding: 16px;
    margin: 16px;
  }
  .pic {
    height: 200px;
  }
  .button {
    padding: 10px 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;
  }
  .main-kun h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    margin: 0;
  }
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
  .cardo {
    min-height: 200px;
  }
  .card__pic {
    height: 100px;
  }
}
</style>
