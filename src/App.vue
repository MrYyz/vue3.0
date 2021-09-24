<template>
  <div id="app">
    <router-view class="router-view" v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
    <NavBar v-show="showBar" />
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { NavBar },
  setup() {
    const router = useRouter();
    const state = reactive({
      transitionName: "slide-left",
      showBar: false,
    });
    router.beforeEach((to, from) => {
      if (to.meta.index > from.meta.index) {
        // 下一页
        state.transitionName = "slide-left"; // 向左滑动
      } else if (to.meta.index < from.meta.index) {
        // 上一页
        state.transitionName = "slide-right"; // 由次级到主级
      } else {
        state.transitionName = ""; // 同级无过渡效果 ???
      }
      state.showBar = ["home", "category", "cart", "my"].includes(to.name);
    });
    onMounted(() => {
      console.log("App on Mounted.");
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="less">
html,
body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.router-view {
  flex: 1;
  width: 100%;
  overflow: scroll;
  // height: auto;
  // position: absolute;
  // top: 0;
  // bottom: 0;
  // margin: 0 auto;
  -webkit-overflow-scrolling: touch;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.van-badge--fixed {
  z-index: 1000;
}
</style>
