<template>
  <div class="home">
    <div class="swiper swiper-no-swiping">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
            <login @toSize='toSize'></login>
        </div>
        <div class="swiper-slide">
            <sign @toSize='toSize'></sign>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "swiper";
export default {
  data() {
    return {
      myswiper: {},
      nowSize: 0
    };
  },
  mounted() {
    this.myswiper = new swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        clickableClass: "my-pagination-clickable"
      }
    });
  },
  methods: {
    toSize(res) {
      this.myswiper.slideTo(res, 1000, false);
    }
  },
  components: {
      login: ()=> import('./children/loging.vue'),
      sign: ()=> import('./children/sign.vue')
  }
};
</script>

<style lang='less' scoped >
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .swiper {
    width: 100%;
    height: 100%;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
      .swiper-slide {
        width: 100%;
        height: 100%;
        position: relative;
      }
    }
  }
}
</style>
