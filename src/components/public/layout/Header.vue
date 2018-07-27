<template>
  <div class="header">
    <div class="back" v-if="type === 'default'">
      <a class="quick" @click="historyGo(-1)">&lt; </a>
      <span><slot>登陆</slot></span>
    </div>
    <div class="back" v-if="type === 'search'">
      <span>搜索</span>
    </div>
    <div class="back" v-if="type === 'quick'">
      <span>快捷方式</span>
      <span>首页</span>
    </div>
  </div>
</template>
<script>
/**
 * @param type
 * back 带有返回的标题
 * search 带有搜索的标题
 * quick 带有快捷方式
 */
export default {
  props: {
    type: {
      value: String,
      default: 'default'
    }
  },
  data () {
    return {

    }
  },
  methods: {
    historyGo (val) {
      this.$router.go(val)
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  font-size: 19px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  background: linear-gradient(to right, $primary, $primaryDeep);
  text-align: center;
}
.back {
  position: relative;
  display: flex;
  justify-content: center;
}
.quick {
  position: absolute;
  left: 0;
  width: 50px;
  font-size: 20px;
}
</style>

