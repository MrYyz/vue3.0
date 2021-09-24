<template>
  <div class="my">
    <div class="user_info__box">
      <div class="user_avatar">
        <van-image
          round
          fit="cover"
          width="2.4rem"
          height="2.4rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
    </div>
    <van-cell-group>
      <van-cell  icon="location-o" title="单元格" value="内容" />
      <van-cell  icon="location-o" title="首页" value="内容" is-link to="home" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>
<style lang="less" scoped>
.my {
  .user_info__box {
    height: 4.8rem;
    position: relative;
    .user_avatar {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>