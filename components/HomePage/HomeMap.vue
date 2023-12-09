<template>
  <div class="wrap">
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98152.29585246046!2d64.40872142692498!3d39.75628740346906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2z0JHRg9GF0LDRgNCwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1681200517250!5m2!1sru!2s"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div class="container">
        <div class="items">
          <div class="item">
            <div class="img">
              <img src="@/assets/img/logo/map.svg" alt="" class="pic" />
            </div>
            <div class="content">
              <p class="title">Production site: LLC “Parvoz plyus fayz”</p>
              <p class="txt">
                111700, Uzbekistan, Tashkent region, Chirchik city,Bakhora str.
                28
              </p>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img/logo/map.svg" alt="" class="pic" />
            </div>
            <div class="content">
              <p class="title">Production site: LLC “Parvoz ravnaq trans”</p>
              <p class="txt">
                200500, Uzbekistan, Bukhara region, Gijduvan city, str. Yusuf
                Hamadoniy.
              </p>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/img/logo/map.svg" alt="" class="pic" />
            </div>
            <div class="content">
              <p class="title">Representation in polandhaj tex sp zo.o.</p>
              <p class="txt">90-057, Henrik’s Lods Senkevich85/87/8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HajtexHomeMap',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  padding-bottom: 56px;
  background: var(--blue);
  color: white;
}
.map {
  position: relative;
}
.map::after {
  background: linear-gradient(180deg, rgba(19, 36, 82, 0) 0%, #132452 84.48%);
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
}
iframe {
  height: 769px;
  width: 100%;
  filter: invert(90%);
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px 72px;
  background: rgba(19, 36, 82, 0.16);
  border: 1px solid #384b7e;
  backdrop-filter: blur(12px);
  border-radius: 8px;
  gap: 64px;
  position: relative;
  z-index: 7;
  margin-top: -100px;
}
.item {
  display: flex;
  justify-content: center;
  gap: 16px;
}
.title {
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
}
.txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  margin: 0;
}
.pic {
  width: 32px;
}
</style>
