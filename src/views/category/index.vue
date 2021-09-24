<template>
  <div class="category">
    <!-- <i-header name="分类" noback @callback="cb"  /> -->
    category
    <p v-for="i in Array.from({ length: 100 })" :key="i">Category</p>
  </div>
</template>

<script>
// import NavBar from '@/components/navBar'
// import IHeader from '@/components/iHeader'
export default {
  // components: { IHeader },
  setup() {
    const cb = function () {
      console.log(2134234)
    }
    return {
      cb
    }
  },
}
</script>