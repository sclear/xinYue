<template>
  <div class="home">
    <div class="swiper swiper-no-swiping">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <page1></page1>
          <menus :nowSize="nowSize" @toSize="toSize"></menus>
        </div>
        <div class="swiper-slide">
          <page2></page2>
          <menus :nowSize="nowSize" @toSize="toSize"></menus>
        </div>
        <div class="swiper-slide">
          <page3></page3>
          <menus :nowSize="nowSize" @toSize="toSize"></menus>
        </div>
        <div class="swiper-slide">
          <page4></page4>
          <menus :nowSize="nowSize" @toSize="toSize"></menus>
        </div>
      </div>
      <!-- <div class="swiper-pagination"></div> -->
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
      this.nowSize = res;
      this.myswiper.slideTo(res, 1000, false);
    }
  },
  components: {
    menus: () => import("./children/menu.vue"),
    page1: () => import("./children/page1.vue"),
    page2: () => import("./children/page2.vue"),
    page3: () => import("./children/page3.vue"),
    page4: () => import("./children/page4.vue")
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
