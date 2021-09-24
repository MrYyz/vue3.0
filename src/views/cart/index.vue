<template>
  <div class="cart">
    cart
    <!-- <nav-bar /> -->
    <p @click="go2GoodsDetail">跳转至商品列表页</p>
  </div>
</template>

<script>
// import NavBar from '@/components/navBar'
import { useRouter } from 'vue-router'
export default {
  // components: { NavBar },
  setup() {
    const router = useRouter()
    const go2GoodsDetail = () => {
      router.push('/goodsDetail')  
    }
    return {
      go2GoodsDetail
}
  },
}
</script>