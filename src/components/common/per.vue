<template>
  <div class="heads">
    234
    <img class="logo" src="./../../assets/img/login.png" alt>
    <div class="title">个人作品</div>
    <div class="btn">团队作品</div>
    <div class="out">●●●</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang='less' scoped >
.heads {
  height: 50px;
  width: 100%;
  background: #424242;
  position: relative;
  .logo {
    position: absolute;
    top: 7.5px;
    width: 35px;
  }
  .title {
    color: white;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -32px;
    line-height: 50px;
  }
  .btn {
    width: 94px;
    height: 36px;
    border-radius: 20px;
    background: #efb81c;
    text-align: center;
    line-height: 36px;
    color: #424242;
    position: absolute;
    top: 7px;
    right: 80px;
  }
  .out{
    position: absolute;
    right: 20px;
    color:#efb81c;
    line-height: 50px;
    top: 0;
  }
}
</style>
