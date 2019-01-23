<template>
  <div class="loging">
      <div class="content">
          <img  @click=" $router.push('/') " class="logo" src="./../../../assets/img/login.png" alt="">
          <div class="input-user">
              <div>登录账号</div>
              <input placeholder="邮箱/手机号码" type="text">
          </div>
          <div class="input-user" style="margin-top:17px">
              <div>登录账号</div>
              <input placeholder="●●●●●●●●●" type="text">
          </div>
          <div class="btn-group">
              <div @click=" $emit('toSize',1) " class="btn-bor">注册</div>
              <div class="btn">登录</div>
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

  }
}
</script>

<style lang='less' scoped >
.loging{
    height:100%;
    width:100%;
    background: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    .content{
        width: 710px;
        height:466px;
        border-radius: 8px;
        background: white;
        text-align: center;
        .logo{
            width: 80px;
            margin: 45px 0 31px 0;
            cursor: pointer;
        }
        .input-user{
            text-align: left;
            color: #929090;
            margin-left: 143.5px;
            input{
                width:422px;
                height:39px;
                outline: none;
                border-radius: 5px;
                border:1px solid #929090;
                margin-top: 9px;
                box-sizing: border-box;
                padding-left: 20px;
            }
        }
    }
}
.btn{
    width:94px;
    height:36px;
    border-radius: 20px;
    background: #434343;
    text-align: center;
    line-height: 36px;
    color:white;
}
.btn-bor{
    width:94px;
    height:36px;
    box-sizing: border-box;
    border-radius: 20px;
    border:1px solid #434343;
    text-align: center;
    line-height: 36px;
}
.btn-group{
    display: flex;
    justify-content: center;
    div{
        margin: 62px 30px 30px 30px;
    }
}
</style>
