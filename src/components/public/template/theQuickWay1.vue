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
$initBgColor: #4a8bce;
$initColor: #4e4b4b;
.flexbox {
  height: 100%;
  // display: 设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。
  display: flex;
  // flex-direction: row | row-reverse | column | column-reverse; 默认(水平方向)、水平方向（右起点）、垂直方向（上起点）、垂直方向（下起点）
  flex-direction: column;
  font-size: 16px;
}
.header {
  position: relative;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: $initBgColor;
  font-size: 20px;
  color: #fff;
  .all {
    position: absolute;
    width: 60px;
    display: block;
    i {
      font-size: 16px;
    }
  }
}
.main {
  // display: flex;
  flex: 1;
  // flex-direction: column;
  overflow-y: scroll;
}
// main::-webkit-scrollbar {
//   display: none;
//   width: 0px;
// }
.navList {
  display: flex;
  flex-direction: row;
  text-align: center;
  background: $initBgColor;
  color: #fff;
  height: 60px;
  // line-height: 60px;
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1px;
    i {
      font-size: 20px;
    }
    span {
      margin-top: 3px;
      font-size: 12px;
    }
  }
}
</style>