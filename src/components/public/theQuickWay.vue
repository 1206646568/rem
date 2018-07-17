<template>
  <div class="flexbox">
    <header class="header">
      <a class="all">
        <i class="iconfont icon-all"></i>
      </a>
      首页
    </header>
    <router-view class="main"></router-view>
    <nav class="navList">
      <a>
        <i class="iconfont icon-hot"></i>
        <span>热门</span>
      </a>
      <a>
        <i class="iconfont icon-form"></i>
        <span>文章</span>
      </a>
      <a>
        <i class="iconfont icon-category"></i>
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
.flexbox {
  height: 100%;
  // display: 设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。
  display: flex;
  // flex-direction: row | row-reverse | column | column-reverse; 默认(水平方向)、水平方向（右起点）、垂直方向（上起点）、垂直方向（下起点）
  flex-direction: column;
  font-size: px2rem(16px);
}
.header {
  position: relative;
  height: px2rem(60px);
  line-height: px2rem(60px);
  text-align: center;
  background: $initBgColor;
  font-size: px2rem(20px);
  color: #fff;
  .all {
    position: absolute;
    width: px2rem(60px);
    display: block;
    i {
      font-size: px2rem(16px);
    }
  }
}
.main {
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;
}
.navList {
  background: $initBgColor;
  color: #fff;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-around;
  height: px2rem(60px);
  line-height: px2rem(60px);
  a {
    width: 25%;
  }
  i {
    font-size: px2rem(16px);
  }
}
</style>