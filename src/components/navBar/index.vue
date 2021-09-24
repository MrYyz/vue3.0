<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <li :class="{ 'nav-active': routeName === 'home' }">
        <router-link to="home">
          <van-icon name="fire-o" />
          <span>首页</span>
        </router-link>
      </li>
      <li :class="{ 'nav-active': routeName === 'category' }">
        <router-link to="category">
          <van-icon name="apps-o" />
          <span>分类</span>
        </router-link>
      </li>
      <li :class="{ 'nav-active': routeName === 'cart' }">
        <router-link to="cart">
          <van-icon  name="shopping-cart-o" :badge="!count ? '' : count" />
          <span>购物车</span>
        </router-link>
      </li>
      <li :class="{ 'nav-active': routeName === 'my' }">
        <router-link to="my">
          <van-icon name="contact" />
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup () {
    const router = useRouter()
    const store = useStore()

    // 变量
    const state = reactive({
      routeName: ''
    })
    // 路由变化
    router.beforeEach((to) => {
      state.routeName = to.name
    })
    // 计算属性
    const compute = {
      count: computed(() => store.state.cartCount)
    }
    return {
      ...toRefs(state),
      ...compute
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/common/style/mixin';
.nav-bar {
  // position: fixed;
  // left: 0;
  // bottom: 0;
  height: 40px;
  width: 100%;
  transform: translate(0);
  border-top: 1px solid @bc;
  .nav-list {
    height: 100%;
    .fj();
    li {
      flex: 1;
      a {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: @fc;
        .van-icon {
          font-size: 14px;
        }
      }
    }
    .nav-active {
      a {
        color: @theme-color;
      }
    }
  }
}
</style>