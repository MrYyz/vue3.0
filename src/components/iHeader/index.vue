<template>
  <div class="i-header__block">
    <header class="i-header van-hairline--bottom">
      <van-icon
        v-if="!isNoback"
        class="i-header__back"
        name="arrow-left"
        @click="goBack"
      />
      <div class="i-header-name">{{ name }}</div>
      <i class="nbicon nbmore"></i>
    </header>
    <div class="block"></div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    back: {
      type: String,
      default: ''
    },
    noback: {
      type: Boolean,
      default: false
    }
  },
  emits: ['callback'],
  setup(props, ctx) {
    const isNoback = ref(props.noback)
    const router = useRouter()
    const goBack = () => {
      if (!props.back) {
        router.go(-1)
      } else {
        router.push({ path: props.back })
      }
      ctx.emit('callback')
    }
    return {
      goBack,
      isNoback
    }
  },
}
</script>

<style lang="less" scoped>
  @import '@/common/style/mixin';
  .i-header {
    position: fixed;
    top: 0;
    left: 0;
    .fj();
    .wh(100%, 40px);
    line-height: 40px;
    color: #252525;
    background: #fff;
    .boxSizing();
    .i-header__back { // 返回按钮
      .wh(40px, 40px);
      .flc(18px, 40px);
      text-align: center;
    }
    .i-header-name {
      font-size: 14px;
      text-align: center;
      width: 100%;
    }
  }
  .block {
    height: 40px;
  }
</style>
