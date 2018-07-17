<template>
  <div id="app">
    <!--设置页面切换动画-->
    <transition name="bounce">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    // console.log(this.$axios)
    // console.log(this.$moment)
    // console.log(this.$_)
    // console.log(this.$_)
  }
}
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
}
body {
  background: #efefef;
}
</style>
<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-out 0.2s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0);
  }
}
</style>
