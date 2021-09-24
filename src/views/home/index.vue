<template>
  <div class="home">
    <div class="content">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>

      <van-grid square>
        <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
      </van-grid>

      <p v-for="i in Array.from({ length: 100 })" :key="i">Home</p>
    </div>
  </div>
</template>
<script>
import { onMounted } from 'vue'
export default {
  setup () {
    const images = [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
      'https://img.yzcdn.cn/vant/apple-3.jpg'
    ]
    onMounted(() => {
      console.log('home page')
    })
    return {
      images
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/common/style/mixin.less';
.van-swipe {
  height: 5rem;
  margin-bottom: 0.2rem;
  .van-swipe-item {
    overflow: hidden;
    img {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }
  }
}
.van-grid {
  margin-bottom: 0.2rem;
}
</style>