<template>
  <div class="page1">
      <div class="logo">
          <img src="./../../../assets/img/LOGO.png" alt="">
      </div>

      <div class="content">
        <div class="title">成员构成</div>
        <img src="./../../../assets/img/p1.png" alt="">
        <img src="./../../../assets/img/p2.png" alt="">
        <img src="./../../../assets/img/p3.png" alt="">
        <img src="./../../../assets/img/p4.png" alt="">
        <img src="./../../../assets/img/p5.png" alt="">
        <img src="./../../../assets/img/p6.png" alt="">
        <img src="./../../../assets/img/p7.png" alt="">
        <img class="ml mt" src="./../../../assets/img/p8.png" alt="">
        <img class="mt" src="./../../../assets/img/p9.png" alt="">
        <img class="mt" src="./../../../assets/img/p10.png" alt="">
        <img class="mt" src="./../../../assets/img/p11.png" alt="">
        <img class="mt" src="./../../../assets/img/p11.png" alt="">
      </div>

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
    .content{
      text-align: center;
      width: 920px;
      // margin: 0 auto;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%,-55%);
      // &>div{
      //   color:#b4b0b0;
      //   margin-top: 9px;
      // }
      .ml{
        margin-left: 103px;
      }
      .mt{
        margin-top: 10px;
      }
      &>img{
        display: inline-block;
        // transform: scale(0.5);
        width: 130px;
        float: left;
      }
      .title{
        color:#efb81c;
        font-size: 40px;
        text-align: center;
        margin-bottom: 34px;
      }
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
