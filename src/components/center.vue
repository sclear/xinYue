<template>
  <div class="ceneter">
    <per></per>
    <div class="w1200">
      <div class="w300">
        <div class="name-group">
          <span class="name">陈海塔</span> |
          <span class="txtcol">原画/插画设计师</span>
        </div>
        <div class="img-group">
          <div class="img"></div>
          <div class="img-txt">
            <div>2018年毕业与计算机应用技术</div>
            <div>Email:xxxxx@qq.com</div>
          </div>
        </div>
        <hr class="fir-hr">
        <div class="contents">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
        <hr>
        <div class="card-title">
          <img src="./../assets/img/adr.png" alt>
          <div>创新领域</div>
        </div>
        <div class="card-box">
          <div class="card">平面设计</div>
          <div class="card">平面设计</div>
          <div class="card">平面设计</div>
          <div class="card">平面设计</div>
          <div class="card">平面设计</div>
          <div class="card">平面设计</div>
          <div class="card">平面设计</div>
        </div>
      </div>
      <div class="w890">
        <div class="zp-title">作品集</div>
        <hr style="margin-top:0;margin-bottom:40px">
        <div class="w-group">
          <div class="w-detail">
            <div class="img"></div>
            <div class="head-title">这是一个标题</div>
            <div class="time">25456453</div>
          </div>
          <div class="w-detail">
            <div class="img"></div>
            <div class="head-title">这是一个标题</div>
            <div class="time">25456453</div>
          </div>
          <div class="w-detail">
            <div class="img"></div>
            <div class="head-title">这是一个标题</div>
            <div class="time">25456453</div>
          </div>
          <div class="w-detail">
            <div class="img"></div>
            <div class="head-title">这是一个标题</div>
            <div class="time">25456453</div>
          </div>
          <div class="w-detail">
            <div class="img"></div>
            <div class="head-title">这是一个标题</div>
            <div class="time">25456453</div>
          </div>
          <div class="w-detail">
            <div class="img"></div>
            <div class="head-title">这是一个标题</div>
            <div class="time">25456453</div>
          </div>
          <div class="w-detail">
            <div class="img"></div>
            <div class="head-title">这是一个标题</div>
            <div class="time">25456453</div>
          </div>
          <div class="w-detail">
            <div class="img"></div>
            <div class="head-title">这是一个标题</div>
            <div class="time">25456453</div>
          </div>
          <div class="w-detail">
            <div class="img"></div>
            <div class="head-title">这是一个标题</div>
            <div class="time">25456453</div>
          </div>
        </div>
      <pagination class="pagin" :total="total" :current-page='nowSize' :display='display' @pagechange="pagechange"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 1,
      nowSize: 1,
      display:9
    };
  },
  methods: {
    pagechange(res) {
      this.nowSize = res;
    }
  },
  components: {
    per: () => import("./common/per.vue"),
    pagination: ()=> import('./common/pagin.vue')
  }
};
</script>

<style lang='less' scoped >
.ceneter {
  height: 100vh;
  background: #eeeeee;
  .w1200 {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    left: 50%;
    margin-left: -600px;
    overflow: auto;
    top: -59px;
    transform: scale(0.8);
    // transform: translateX(-80%);
    & > div {
      float: left;
      box-sizing: border-box;
      padding: 12px 0 22px 0;
      background: white;
      border-radius: 8px;
    }
    .w300 {
      width: 400px;
      height: 700px;
      .name-group {
        margin-left: 30px;
        .name {
          font-weight: bold;
        }
        .txtcol {
          color: rgb(177, 170, 170);
        }
      }
      .img-group {
        overflow: hidden;
        margin-top: 40px;
        margin-left: 30px;
        & > div {
          float: left;
        }
        .img {
          width: 80px;
          height: 80px;
          background: red;
          border-radius: 50%;
        }
        .img-txt {
          margin-left: 20px;
          font-size: 14px;
          color: rgb(177, 170, 170);
          margin-top: 35px;
        }
      }
      .contents {
        width: 300px;
        margin: 0 auto;
      }
      .card-title {
        font-size: 18px;
        line-height: 20px;
        position: relative;
        margin-top: 20px;
        div {
          position: absolute;
          left: 40px;
        }
        img {
          position: absolute;
          width: 20px;
          left: 20px;
        }
      }
      .card-box {
        margin-top: 50px;
        overflow: hidden;
        .card {
          float: left;
          width: 90px;
          height: 25px;
          border-radius: 20px;
          text-align: center;
          line-height: 25px;
          font-size: 14px;
          border: 1px solid #eeeeee;
          margin: 10px 0 0 20px;
        }
      }
    }
    .w890 {
      width: 790px;
      margin-left: 10px;
      height: 700px;
      .zp-title {
        line-height: 40px;
        font-size: 18px;
        text-align: center;
      }
      .w-group {
        overflow: hidden;
        margin-left: 100px;
        .w-detail {
          float: left;
          width: 180px;
          height: 165px;
          margin: 5px 0 0 14px;
          .img {
            width: 100%;
            border-radius: 9px;
            background: black;
            height: 110px;
          }
          .head-title {
            margin: 8px 0 0 10px;
          }
          .time {
            margin: 2px 0 0 10px;
            font-size: 12px;
            color: rgb(177, 170, 170);
          }
        }
      }
    }
  }
}
hr {
  margin-top: 30px;
  border-top: 1px solid rgb(207, 204, 204);
}
.fir-hr {
  margin: 30px 0 40px 0;
}
.pagin{
  margin-top: 30px;
}
</style>
