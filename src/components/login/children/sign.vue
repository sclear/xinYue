<template>
  <div class="loging">
    <div class="content">
      <img @click=" $router.push('/') " class="logo" src="./../../../assets/img/login.png" alt>
      <div class="input-user">
        <div>输入注册账号</div>
        <input placeholder="邮箱/手机号码" type="text">
      </div>
      <div class="input-group">
        <div class="input-users">
          <div>输入密码</div>
          <input placeholder="●●●●●●●" type="text">
        </div>
        <div class="input-users ml">
          <div>再次输入</div>
          <input placeholder="●●●●●●●" type="text">
        </div>
      </div>
      <div class="btn-group">
        <div class="btn-bor">返回</div>
        <div @click=" $emit('toSize',0) " class="btn">立即使用</div>
      </div>
    </div>
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
.loging {
  height: 100%;
  width: 100%;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 710px;
    height: 466px;
    border-radius: 8px;
    background: white;
    text-align: center;
    .logo {
      width: 80px;
      cursor: pointer;
      margin: 45px 0 31px 0;
    }
    .input-user {
      text-align: left;
      color: #929090;
      margin-left: 143.5px;
      input {
        width: 422px;
        height: 39px;
        outline: none;
        border-radius: 5px;
        border: 1px solid #929090;
        margin-top: 9px;
        box-sizing: border-box;
        padding-left: 20px;
      }
    }
  }
}
.btn {
  width: 94px;
  height: 36px;
  border-radius: 20px;
  background: #434343;
  text-align: center;
  line-height: 36px;
  color: white;
}
.btn-bor {
  width: 94px;
  height: 36px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid #434343;
  text-align: center;
  line-height: 36px;
}
.btn-group {
  display: flex;
  justify-content: center;
  div {
    margin: 62px 30px 30px 30px;
  }
}

.input-group {
  overflow: hidden;
  margin-top: 19px;
  .ml {
    margin-left: 123px !important;
  }
  .input-users {
    float: left;
    text-align: left;
    color: #929090;
    margin-left: 143.5px;
    width: 100px;
    input {
      width: 200px;
      height: 39px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #929090;
      margin-top: 9px;
      box-sizing: border-box;
      padding-left: 20px;
    }
  }
}
</style>
