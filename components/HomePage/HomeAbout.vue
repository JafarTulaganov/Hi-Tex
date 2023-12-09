<template>
  <div class="wrap">
    <div class="container container-sec">
      <div class="free">
        <div class="top" data-aos="fade-up">
          <p class="melly">
            {{ $store.state.translations['main.about-1'] }}
          </p>
        </div>
        <div class="mid">
          <div>
            <img src="@/assets/img/logo/repost.svg" alt="" class="repost" />
          </div>
          <div class="right">
            <p class="murder">
              {{ $store.state.translations['main.lothric'] }}
            </p>
            <NuxtLink :to="`/${$route.params.lang}/about`" class="link">{{
              $store.state.translations['main.more']
            }}</NuxtLink>
            <!-- <p>
              {{ $store.state.translations['main.lorian'] }}
            </p> -->
          </div>
        </div>
      </div>
      <div class="images">
        <div
          class="movie"
          data-aos="fade-up"
          data-aos-duration="200"
          data-aos-easing="linear"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fDPqDPtsvX4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div
          class="movie"
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-easing="linear"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Sk4CP_eZ1Fo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="items">
        <div class="item">
          <p class="sup">{{ $store.state.translations['main.num-1'] }}</p>
          <ICountUp
            class="num"
            :delay="delay"
            :endVal="endVal"
            :options="options"
          />
          <p class="sub">{{ $store.state.translations['main.num-2'] }}</p>
        </div>
        <div class="item">
          <p class="sup">{{ $store.state.translations['main.num-5'] }}</p>
          <ICountUp
            class="num"
            :delay="delay"
            :endVal="endVal3"
            :options="options"
          />
          <p class="sub">{{ $store.state.translations['main.num-6'] }}</p>
        </div>
        <div class="item">
          <p class="sup">{{ $store.state.translations['main.num-9'] }}</p>
          <ICountUp
            class="num"
            :delay="delay"
            :endVal="endVal5"
            :options="options"
          />
          <p class="sub">{{ $store.state.translations['main.num-10'] }}</p>
        </div>
        <div class="item">
          <p class="sup">{{ $store.state.translations['main.num-3'] }}</p>
          <ICountUp
            class="num"
            :delay="delay"
            :endVal="endVal2"
            :options="options"
          />
          <p class="sub">{{ $store.state.translations['main.num-4'] }}</p>
        </div>
        <div class="item">
          <p class="sup">{{ $store.state.translations['main.num-7'] }}</p>
          <ICountUp
            class="num"
            :delay="delay"
            :endVal="endVal4"
            :options="options"
          />
          <p class="sub">{{ $store.state.translations['main.num-8'] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from 'vue-countup-v2'

export default {
  name: 'HajtexHomeAbout',

  data() {
    return {
      delay: 1000,
      endVal: 40000,
      endVal2: 4.2,
      endVal3: 9400,
      endVal4: 7.2,
      endVal5: 8400,
      options: {
        useEasing: true,
        enableScrollSpy: true, // start animation when target is in view
        scrollSpyDelay: 100, // delay (ms) after target comes into view
        scrollSpyOnce: true,
      },
    }
  },

  components: {
    ICountUp,
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  padding: 98px 0 144px 0;
}
.top p {
  font-weight: 400;
  font-size: 30px;
  line-height: 130%;
}
.top {
  margin-bottom: 42px;
}
.top p {
  color: var(--Black, #020105);
  text-align: center;
  font-family: var(--decor);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 41.6px */
  max-width: 1133px;
  margin: 0 auto;
}
.mid {
  display: flex;
  align-items: flex-start;
  flex-direction: column-reverse;
  justify-content: space-between;
  margin-bottom: 64px;
}
.mid p {
  color: var(--grey-80, #353437);
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  max-width: 1133px;
  margin: 0 auto;
}
.link {
  color: var(--Dark-blue, #132452);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  padding: 12px 44px;
  border-radius: 500px;
  border: 1px solid var(--Dark-blue, #132452);
  display: inline-flex;
  max-width: 220px;
  margin: 0 auto;
  transition: 0.4s;
}
.link:hover {
  text-decoration: none;
  background: var(--blue);
  color: white;
}
.right {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  justify-content: center;
}
.links {
  display: flex;
  align-items: center;
  gap: 45px;
}
.links a {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: var(--black);
  text-decoration: underline;
}
.images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 56px;
}
.images iframe {
  width: 100%;
  height: 495px;
  object-fit: cover;
  border-radius: 12px;
}
.movie {
  position: relative;
}
.movie button {
  position: absolute;
  bottom: 24px;
  right: 24px;
  background: white;
  padding: 12px;
  border-radius: 50%;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.items {
  display: flex;
  justify-content: space-between;
}
.num {
  font-weight: 500;
  font-size: 80px;
  line-height: 110%;
  color: var(--blue);
  font-family: var(--decor);
  margin-bottom: 8px;
}
.sup {
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  margin-bottom: 10px;
}
.sub {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: var(--blue);
  font-family: var(--medium);
}
.free {
  display: flex;
  flex-direction: column;
  position: relative;
}
.repost {
  position: absolute;
  bottom: 64px;
  right: 0;
}
@media screen and (max-width: 1500px) {
  .top p {
    font-size: 32px;
  }
  .num {
    font-size: 64px;
  }
  .images iframe {
    height: 380px;
  }
}
@media screen and (max-width: 1024px) {
  .right {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .items {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .top p {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    margin: 0;
  }
  .links {
    gap: 0;
    justify-content: space-between;
  }
  .mid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 24px;
  }
  .repost {
    display: none;
  }
  .right {
    gap: 24px;
  }
  .right p {
    margin: 0;
  }
  .top {
    margin-bottom: 24px;
  }
  .wrap {
    padding: 80px 0;
  }
  .images {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
  .images iframe {
    height: 200px;
  }
  .movie button {
    padding: 6px;
  }
  .num {
    font-weight: 500;
    font-size: 40px;
    line-height: 110%;
  }
  .items {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}
</style>
