<template>
  <div class="menu">
    <div  @click="toSize(0)" class="fonts">
      <img v-if="nowSize === 0" class="wSmall" src="./../../../assets/img/yl.png" alt>
      <img v-else class="wSmall" src="./../../../assets/img/wt.png" alt>
      <div>新悦</div>
    </div>
    <div>
      <img class="wMini" src="./../../../assets/img/d.png" alt>
    </div>
    <div  @click="toSize(1)" class="fonts">
      <img v-if="nowSize === 1" class="wSmall" src="./../../../assets/img/yl.png" alt>
      <img v-else class="wSmall" src="./../../../assets/img/wt.png" alt>
      <div>团队</div>
    </div>
    <div>
      <img class="wMini" src="./../../../assets/img/d.png" alt>
    </div>
    <div @click="toSize(2)" class="fonts">
      <img v-if="nowSize === 2" class="wSmall" src="./../../../assets/img/yl.png" alt>
      <img v-else class="wSmall" src="./../../../assets/img/wt.png" alt>
      <div>成员</div>
    </div>
    <div>
      <img class="wMini" src="./../../../assets/img/d.png" alt>
    </div>
    <div @click="toSize(3)" class="fonts">
      <img v-if="nowSize === 3" class="wSmall" src="./../../../assets/img/yl.png" alt>
      <img v-else class="wSmall" src="./../../../assets/img/wt.png" alt>
      <div>更多作品</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nowSize: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  methods: {
    toSize(res) {
      this.$emit('toSize',res)
    }
  },
  components: {}
};
</script>

<style lang='less' scoped >
.menu {
  height: 70px;
  width: 100%;
  background: #434343;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 13.5px;
  &>div{
    margin: 0 20px;
    text-align: center;
    cursor: pointer;
  }
  .fonts {
    width: 60px;
    font-size: 12px;
    color: white;
    .wSmall {
      width: 20px;
      margin-bottom: 9px;
      margin-left: 5px;
    }
  }
}
.wMini {
  width: 40px;
}
</style>
