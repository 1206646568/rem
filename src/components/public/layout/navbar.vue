<template>
  <div class="navbar">
      <router-link tag="span" :to="{name:'hot'}">
        <i class="iconfont icon-hot"></i>
        <span>热门</span>
      </router-link>
      <router-link tag="span" :to="{name:'list'}">
        <i class="iconfont icon-form"></i>
        <span>文章</span>
      </router-link>
      <router-link tag="span" :to="{name:'Recommend'}">
        <i class="iconfont icon-category"></i>
        <span>分类</span>
      </router-link>
      <router-link tag="span" :to="{name:'user'}">
        <i class="iconfont icon-account"></i>
        <span>用户</span>
      </router-link>
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
