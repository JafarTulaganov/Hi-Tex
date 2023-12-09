<template>
  <div class="wrap" v-if="product.same_products.length > 0">
    <h4 class="title">{{ $store.state.translations['inner.other'] }}</h4>
    <div class="row">
      <div class="col-md-1 col-xs-0"></div>
      <div class="col-md-10 col-xs-12">
        <div class="grid">
          <div
            v-for="item in product.same_products"
            :key="item.id"
            class="cardo"
          >
            <NuxtLink :to="`/${$route.params.lang}/product/${item.slug}`">
              <div class="img">
                <img :src="item.image" alt="" class="pic" />
              </div>
              <div class="content">
                <p class="name">{{ item.name }}</p>
                <div class="specs sasuke">
                  <div
                    v-for="spec in product.specification"
                    :key="spec.id"
                    class="spec"
                  >
                    <p class="question">
                      {{ spec.specification }}
                    </p>
                    <p class="answer">
                      {{ spec.value }}
                    </p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="col-md-1 col-xs-0"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HajtexProductMore',

  props: ['product'],

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.cardo {
  border: 1px solid #ebebeb;
  border-radius: 12px;
  overflow: hidden;
}
.img {
  overflow: hidden;
}
.pic {
  width: 100%;
  height: 331px;
  object-fit: cover;
  transition: 0.4s;
}
.img {
  overflow: hidden;
}
.content {
  padding: 24px 32px;
}
.name {
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  margin-bottom: 8px;
  transition: 0.4s;
}
.sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #353437;
  margin-bottom: 24px;
}
.top {
  margin-bottom: 50px;
}

.label {
  margin: 0;
  font-size: 24px;
}
.cardo a {
  color: black;
}
.cardo a:hover {
  text-decoration: none;
  color: var(--blue);
}

.cardo:hover .pic {
  transform: scale(1.1);
}
.wrap {
  padding-top: 88px;
}
.title {
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  margin-bottom: 40px;
  font-family: var(--decor);
  text-transform: uppercase;
  text-align: center;
}
.spec {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
}
.spec .answer {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  font-family: var(--medium);
  position: relative;
  z-index: 9;
  margin-bottom: 2px;
}
.spec .question {
  font-family: var(--light);
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 2px;
}
@media screen and (max-width: 1500px) {
  .content {
    padding: 16px;
  }
  .pic {
    height: 300px;
  }
}
@media screen and (max-width: 1024px) {
  .title {
    font-weight: 400;
    font-size: 20px;
    line-height: 110%;
    text-align: left;
    margin-bottom: 16px;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .pic {
    height: 220px;
  }
  .name {
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 8px;
  }
  .content {
    padding: 16px;
  }
}
</style>
