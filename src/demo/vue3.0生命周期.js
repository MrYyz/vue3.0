// beforeCreate -> use setup()
// created -> use setup()
// beforeMount -> onBeforeMount
// mounted -> onMounted
// beforeUpdate -> onBeforeUpdate
// updated -> onUpdated
// beforeUnmount -> onBeforeUnmount
// unmounted -> onUnmounted
// errorCaptured -> onErrorCaptured
// renderTracked -> onRenderTracked
// renderTriggered -> onRenderTriggered
// activated -> onActivated
// deactivated -> onDeactivated

import {
  onBeforeMount, // beforceMount
  onMounted, // mounted
  onBeforeUpdate, // beforeUpdate
  onUpdated, // updated
  onBeforeNumount, // beforeDestory
  onUnmounted, // destoryed

  onErrorCaptured, // errorCaptured
  onRenderTracked, // renderTracked
  onRenderTriggered, //renderTriggered

  onActivated, // activated
  onDeactivated, // deactivated

  toRefs, toRef, reactive, watch, computed
} from 'vue'

export default {
  props: { // 因为props响应式，所以不能使用ES6解构
    title: String,
  },
  setup (props, context) {
    // props解构
    const { title } = toRefs(props)
    console.log(title.value)
    // 若title非必传，则手动创建ref
    const title = toRef(props, 'title')

    // context是一个普通的javascript对象，它暴露三个组件的property
    
    // Attribute（非响应式对象）
    console.log(context.attrs)
    // 插槽（非响应式对象）
    console.log(context.slots)
    // 触发事件（方法）
    console.log(context.emit)

    return {

    }
  }
}