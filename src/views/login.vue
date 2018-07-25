<template>
  <div class="bg">
    <Header>登陆</Header>
    <div class="login">
      <p class="blgoIcon">BLGO 登陆</p>
      <div  class="form">
        <ul>
          <li>
            <label>用户名</label>
            <input type="text"></input>
          </li>
          <li>
            <label>密&emsp;码</label>
            <input type="password"></input>
          </li>
          <li class="forget">
            <span>忘记密码?</span>
          </li>
        </ul>
        <btn class="blockBtn">登陆</btn>
      </div>
    </div>
  </div>
</template>
<script>
// import img from '@'
import Header from '@/components/public/layout/Header'
import btn from '@/components/core/btn'
export default {
  components: { Header, btn },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
.bg {
  height: 100%;
  background: url("../assets/image/login2.png") no-repeat;
  background-size: cover;
  overflow-x: scroll;
}
.login {
  // height: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  .blgoIcon {
    font-size: 20px;
    text-align: center;
    padding: 60px 0;
  }
  .form {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    padding: 0 20px;
    li {
      display: flex;
      margin-bottom: 20px;
      height: 35px;
      line-height: 35px;
      label {
        padding: 0 10px;
        width: 70px;
        color: #fff;
        background-color: $primaryDeep;
        background-color: rgba(13, 107, 177, 0.9);
        // border: 1px solid $primary;
        box-sizing: border-box;
      }
      input {
        flex: 1;
        font-size: inherit;
        background: #fff;
        background-color: rgba(239, 239, 239, 0.9);
        // border: none;
        // border-bottom: 1px solid #dcdfe6;
        border: 1px solid $primary;
        border-left: none;
        box-sizing: border-box;
        color: #606266;
        outline: none;
        padding: 0 10px;
        // transition: border-color 0.5, box-shadow 0.5s;
      }
      input:focus {
        // border-color: $primaryDeep;
        // box-shadow: $primaryDeep 1px 1px 1px;
        // box-shadow: $primaryDeep 0px 0px 1px 0px;
      }
    }
    .forget {
      color: #757575;
      justify-content: flex-end;
    }
    .blockBtn {
      height: 25px;
      line-height: 25px;
    }
  }
}
</style>

