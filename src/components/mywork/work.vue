<template>
  <div class="container">
      <heads></heads>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {
      heads: ()=> import('./../common/heads.vue')
  }
}
</script>

<style lang='less' scoped >

</style>
