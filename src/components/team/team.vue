<template>
  <div class="team">
    <heads></heads>
    <div class="w1200">
      <div class="works">
        <div class="img"></div>
        <div class="txt">
          <div class="title">动画作品</div>
          <div class="cont">contcontcontcontcontcont</div>
          <div class="cont">contcontcontcontcontcont</div>
          <div class="cont">contcontcontcontcontcont</div>
          <div class="cont">contcontcontcontcontcont</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {
    heads: ()=> import('./../common/tehead.vue')
  }
}
</script>

<style lang='less' scoped >
.team{
  .w1200{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 22px;
    .works{
      width: 580px;
      height: 225px;
      background: chartreuse;
      margin: 9px 0 0 20px;
      overflow: hidden;
      .img{
        float: left;
        height: 100%;
        width:280px;
        background: red;
      }
      .txt{
        float: left;
        height: 100%;
        width: 300px;
        background: #f2f2f2;
        box-sizing: border-box;
        padding: 30px  0 0 30px;
        .title{
          font-size: 16px;
          font-weight: bold;
        }
        div{
          font-size: 12px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
