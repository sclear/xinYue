<template>
  <div class="detail">
      <heads></heads>
      <div class="w1200">
          <div class="group">
              <div class="video"></div>
              <div class="content">
                  <div>LOGO设计</div>
                  <div>这是一个标题</div>
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
.detail{
    .w1200{
        width: 1200px;
        margin: 0 auto;
        background: bisque;
        box-sizing: border-box;
        padding: 20px 0 0 20px;
        .group{
            overflow: hidden;
            width: 100%;
            .video{
                width: 820px;
                height: 200px;
                float: left;
                background: red;
            }
            .content{
                float: left;
                background: black;
                width: 300px;
                height: 200px;
                margin-left: 20px;

            }
        }
    }
}
</style>
