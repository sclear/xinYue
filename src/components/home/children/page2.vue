<template>
  <div class="page1">
      <div class="logo">
          <img src="./../../../assets/img/LOGO.png" alt="">
      </div>
      <div class="content">
        <div class="title">团队简介</div>
        <div class="con1">
          新锐创意工作室，电子与信息工程学院16级计算机应用专业的10名同学组成集聚多位全国职业院校广东省职业院校技能大赛的动画、广告设计、图像图形等项目的获奖选手三年专注于计算机应用专业作为新兴行业发展极速跟上时代的脚步只能不断的去涉猎最新最尖端的技术!从大一到大三不断参 与商业项目以项目为核心不断学习与进步!
        </div>
        <div class="con2">
          每个人都有自己发光发热的地方，最大的发挥每个人的长处
        </div>
        <div class="con3">
          动画片制作/广告平面设计/电商设计活动策划与设计/电影概念图设计/电影分镜头设计/电影特效制作/电影后期统筹
        </div>
        <div class="con4">
          参与影视项目:《西游学院》 《笔仙大战贞子3》 《大蛇》 《狄仁 杰之幽冥道》《齐天大圣2》 等
        </div>
        <div class="con5">
           参与活动策划: [“顺马”马拉松]参与动画项目: (90天试爱》 《单轨大讲堂》 等
        </div>
        <div class="con6">
          其中2018年上映的《大蛇》由工作室成员设计概念氛、分镜头与演示动画，后期统筹并参与特效制作的影片
        </div>
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
      width: 820px;
      margin: 0 auto;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%,-50%);
      &>div{
        color:#b4b0b0;
        margin-top: 9px;
      }
      .title{
        color:#efb81c;
        font-size: 40px;
        text-align: center;
      }
      .con1{
        margin-top: 60px;
        line-height: 28px;
      }
      .con2{
        text-align: center;
      }
      .con3{
        color:white;
      }
      .con4{
        text-align: center;
      }
      .con5{
        text-align: center;
      }
      .con6{
        color:#efb81c;
        margin-top: 43px;
        text-align: center;
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
