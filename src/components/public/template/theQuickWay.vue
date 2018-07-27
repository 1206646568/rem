<template>
  <div class="quick">
    <Header></Header>
    <router-view class="content"></router-view>
    <navbar class="navbar"></navbar>
  </div>
</template>
<script>
import Header from '@/components/public/layout/Header.vue'
import navbar from '@/components/public/layout/navbar.vue'
export default {
  components: { navbar,Header },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.quick {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .content {
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  & > .content::-webkit-scrollbar {
    width: 0;
  }
  .navbar {
    height: 60px;
  }
}
</style>