<template>
  <transition name="router">
    <router-view></router-view>
  </transition>
</template>


<style lang="scss">
@import "./scss/_mixin.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body {
  height: 100%;
}
html {
  font-size: calc(100vw / 750 * 100);
}
body {
  font-size: 0.16rem;
  // @include grayscale()
}

// 过渡组件样式
.slideup-enter,
.slideup-leave-to {
  transform: translateY(100%);
}
.slideup-enter-to,
.slideup-leave {
  transform: translateY(0);
}
.slideup-enter-active,
.slideup-leave-active {
  transition: transform 0.3s linear;
}

.slideleft-enter,
.slideleft-leave-to {
  .list {
    transform: translateX(100%);
  }
  .mask {
    opacity: 0;
  }
}
.slideleft-enter-to,
.slideleft-leave {
  .list {
    transform: translateX(0);
  }
  .mask {
    opacity: 1;
  }
}
.slideleft-enter-active,
.slideleft-leave-active {
  transition: all .3s linear;
  .list {
    transition: transform .3s linear;
  }
  .mask {
    transition: opacity .3s linear;
  }
}
// 路由过渡效果
.router-enter{
  opacity: 0;
  transform: translateX(100%);
}
.router-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.router-enter-to,
.router-leave {
  transform: translateX(0);
  opacity: 1;
}
.router-enter-active,
.router-leave-active {
  transition: all 0.3s linear;
}
</style>
