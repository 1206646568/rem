<template>
  <div class="quick">
    <router-view class="content"></router-view>
    <navbar class="navbar"></navbar>
  </div>
</template>
<script>
import navbar from '@/components/public/layout/navbar.vue'
export default {
  components: { navbar },
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
  min-height: 100vh;
  .content {
    flex: 1;
  }
  .navbar {
    height: 60px;
  }
}
</style>