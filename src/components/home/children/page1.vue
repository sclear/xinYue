<template>
  <div class="page1">
      <div class="logo">
          <img src="./../../../assets/img/LOGO.png" alt="">
      </div>

      <img src="./../../../assets/img/txt.png" alt="">

      <div class="centerPng">
          <img src="./../../../assets/img/rt.png" alt="">
          <img src="./../../../assets/img/ct.png" alt="">
          <img src="./../../../assets/img/lt.png" alt="">
      </div>
      <div @click=" $router.push('/login') " class="login">登录</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang='less' scoped >
.page1{
    height: calc(~"100% - 70px");
    width: 100%;
    background:url('./../../../assets/bg.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    &>img{
        position: absolute;
        left: 40%;
        transform: scale(0.8) translatex(-50%);
        @media screen and (max-width: 1680px) {
            width: 80%;
        }
        @media (min-width: 1920px) {
            width: 100%;
        }
    }
    .logo{
        position: absolute;
        top:17px;
        left:40px;
    }
    .login{
        position: absolute;
        height: 37px;
        width:92px;
        border-radius: 20px;
        background: #434343;
        font-size: 18px;
        line-height: 37px;
        text-align: center;
        color: rgba(255, 255, 255, 0.801);
        right: 53px;
        top:27px;
        cursor: pointer;
    }
    .centerPng{
        position: absolute;
        left:45%;
        bottom: 20px;
        transform: scale(0.5);
        margin-left: -30px;
        display: flex;
        align-items: center;
        img:nth-child(1){
           margin-right: 45px;
        }
        img:nth-child(2){
           transform: scale(0.8);
        }
        img:nth-child(3){
           margin-left: 40px;
        }
    }
}
</style>
