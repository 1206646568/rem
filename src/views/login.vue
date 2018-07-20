<template>
  <div class="login">
    <ul>
      <li>
        <div>用户名</div>
        <input class="user"></input>
      </li>
      <li>
        <div>密&emsp;码</div>
        <input class="pwd"></input>
      </li>
      <li>
        <input class="btn" type="button" value="login">
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
@import "@/assets/css/_benchmark.scss";
.login {
  display: flex;
  // justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: url("../assets/image/login.png") no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  ul {
    flex: 1;
    margin: 0 px2rem(20px);
    font-size: px2rem(15px);
    li {
      display: flex;
      height: px2rem(40px);
      margin-bottom: 20px;
      background: #64a8da;
      border: 1px solid #4b9bf9;
      color: #fff;
      div {
        line-height: px2rem(40px);
        padding: 0 10px;
      }
      .user,
      .pwd {
        flex: 1;
        background: #93eae3;
        border-style: none; //无边框
        outline: none; //获得焦点也无边框
        padding-left: px2rem(10px);
        color: #463e3e;
      }
      .btn {
        flex: 1;
        color: #fff;
        font-size: px2rem(20px);
        font-weight: bold;
        background: #64a8da;
        border-style: none; //无边框
        outline: none; //获得焦点也无边框
      }
    }
  }
}
</style>

