<template>
  <div class="navbar">
      <span @click="routeGo('hot')">
        <i class="iconfont icon-hot"></i>
        <span>热门</span>
      </span>
      <span @click="routeGo('list')">
        <i class="iconfont icon-form"></i>
        <span>文章</span>
      </span>
      <span @click="routeGo('Recommend')">
        <i class="iconfont icon-category"></i>
        <span>分类</span>
      </span>
      <span @click="routeGo('user')">
        <i class="iconfont icon-account"></i>
        <span>用户</span>
      </span>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    routeGo (name) {
      this.$router.push({ name: name })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 60px;
  color: #fff;
  background: $primary;
  & > span {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    i {
      font-size: 23px;
    }
  }
}
</style>
