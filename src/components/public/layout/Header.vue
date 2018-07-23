<template>
  <div class="header">
    <div class="back">
      <span @click="historyGo(-1)">&lt; </span>
      <span>登录</span>
    </div>
  </div>
</template>
<script>
/**
 * @param type
 * back 带有返回的标题
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
  }
}
</script>
<style lang="scss" scoped>
$primary: #4a8bce;
$primaryDeep: #0d6bb1;
.header {
  font-size: 19px;
  height: 60px;
  line-height: 60px;
  color: #fff;
  background: linear-gradient(to right, $primary, $primaryDeep);
  text-align: center;
}
.back {
  height: inherit;
  display: flex;
  // flex: 1;
  justify-content: center;
  & > span:nth-child(odd) {
    width: 60px;
    font-size: 20px;
  }
  & > span:nth-child(even) {
    flex: 1;
    margin-left: -60px;
  }
}
</style>

