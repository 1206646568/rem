<template>
  <div>
    <header class="header">
      <!--头部-->
      <div>
        <i class="iconfont icon-all"></i>
      </div>
      首页
    </header>
    <router-view></router-view>
    <nav class="navList">
      <a>
        <i class="iconfont icon-hot"></i>
        <span>热门</span>
      </a>
      <a>
        <i class="iconfont icon-category"></i>
        <span>文章</span>
      </a>
      <a>
        <i class="iconfont icon-form"></i>
        <span>分类</span>
      </a>
      <a>
        <i class="iconfont icon-account"></i>
        <span>用户</span>
      </a>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/css/_benchmark.scss";
$initBgColor: #4a8bce;
$initColor: #4e4b4b;
.header {
  font-size: px2rem(22px);
  height: px2rem(60px);
  line-height: px2rem(60px);
  background: $initBgColor;
  text-align: center;
  color: #fff;
  position: relative;
  & :nth-child(1) {
    height: px2rem(60px);
    width: px2rem(50px);
    display: inline-block;
    position: absolute;
    left: 0px;
    i {
      font-size: px2rem(16px);
    }
  }
  // & :nth-child(2){
  //   display:inline-block;
  //   text-align:center;
  //   width:px2rem(320px);
  //   float:left;
  // }
}

.navList {
  // width: px2rem(375px);
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  text-align: center;
  // height: px2rem(60px);
  // line-height: px2rem(60px);
  // font-weight: bold;
  border-top: px2rem(1px) solid #cdcdcd;
  // border-top-left-radius: 45%;
  // border-top-right-radius: 45%;
  background: $initBgColor;
  overflow: hidden;
  a {
    display: inline-block;
    width: 25%;
    float: left;
    color: #fff;
    i {
      font-size: px2rem(16px);
    }
    span{
      font-size: px2rem(12px);
      display:block;
    }

  }
}
</style>