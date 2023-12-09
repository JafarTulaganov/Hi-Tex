<template>
  <div class="master">
    <div class="container">
      <div class="top">
        <div class="crumbs">
          <NuxtLink :to="`/${$route.params.lang}`" class="last">{{
            $store.state.translations['inner.home']
          }}</NuxtLink>
          /
          <p to="/media" class="current">
            {{ $store.state.translations['inner.media'] }}
          </p>
        </div>
        <h4 class="page">{{ $store.state.translations['inner.media'] }}</h4>
      </div>
      <div class="items">
        <div
          v-for="item in media"
          :key="item.id"
          class="item"
          @click="getId(item.id)"
        >
          <div v-if="item.type == 'image'" class="img">
            <img :src="item.image" alt="" class="pic" />
          </div>
          <div v-else class="img">
            <div v-if="item.video != null">
              <video :src="item.video"></video>
            </div>
            <div v-else>
              <iframe
                width="560"
                height="315"
                :src="item.link"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <!-- <p class="txt" v-html="item.text"></p> -->
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
          <div v-if="mediaId.video != null">
            <video controls :src="mediaId.video"></video>
          </div>
          <div>
            <img :src="mediaId.image" alt="" class="big" />
          </div>
          <!-- <p v-html="mediaId.text"></p> -->
        </div>

        <img class="tra" src="@/assets/img/logo/tra.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import mediaApi from '@/api/media'

export default {
  name: 'HajtexMedia',

  layout: 'inner',

  async asyncData({ $axios }) {
    const media = await mediaApi.getMedia($axios)

    return {
      media,
    }
  },

  data() {
    return {
      modalHandle: false,
      mediaId: {},
    }
  },

  watch: {
    $route() {
      this.modalHandle = false
    },
  },

  mounted() {},

  methods: {
    getId(id) {
      this.mediaId = this.media.find((item) => item.id === id)

      this.modalHandle = true
    },
  },
}
</script>

<style scoped>
.master {
  padding: 160px 0;
  background: #f8f8f8;
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-top: 32px;
}
.item {
  cursor: pointer;
  overflow: hidden;
}
.pic,
video,
iframe {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
}
.txt {
  height: 56px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #353437;
  margin: 0;
}
.item:nth-child(1) {
  grid-column: 1/3;
  grid-row: 1/3;
}
.item:nth-child(2) {
  grid-column: 3/5;
}
.item:nth-child(7) {
  grid-column: 3/5;
  grid-row: 3/5;
}
.item:nth-child(8) {
  grid-column: 1/3;
}
.item:nth-child(1) .pic,
.item:nth-child(7) .pic {
  height: 824px;
}

.modaller {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
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
  z-index: 1;
  pointer-events: none;
}
.modal__wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
}
.modal__top {
  max-width: 80%;
  margin: 0 auto;
  position: relative;
  z-index: 9;
}
.big {
  width: 100%;
  border-radius: 12px;
  max-height: 720px;
  object-fit: cover;
}
.modal__top p {
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  margin: 0;
}
.tra {
  pointer-events: none;
}
.txt p {
  margin: 0 !important;
}
@media screen and (max-width: 1500px) {
  .master {
    padding-bottom: 80px;
  }
  .big,
  .modal__body video {
    max-height: 360px;
    height: 100%;
  }
  .modal__top {
    max-width: 90%;
  }
  .modal__top p {
    font-size: 18px;
  }

  .txt {
    font-size: 18px;
  }
  .item:nth-child(1) .pic,
  .item:nth-child(7) .pic {
    height: 524px;
  }
  .pic,
  video {
    height: 250px;
  }
}
@media screen and (max-width: 1024px) {
  .master {
    padding-bottom: 80px;
  }
  .items {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .pic {
    max-height: 400px;
  }
  .modal__body {
    min-width: 90%;
    padding: 16px !important;
  }
  .modal__body p {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
  }
  .x {
    top: 6px;
    right: 6px;
  }
}
@media screen and (min-height: 700px) {
  .big {
    max-height: 600px;
  }
  .modal__body {
    padding: 24px;
  }
}
</style>
