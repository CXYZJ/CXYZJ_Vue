<template>
  <div id="index">
    <myhead></myhead>
  </div>
</template>

<script>
  import myhead from './Header'

  export default {
    name:"index",
    components: {
      myhead
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/css/index";

  #index {
    width: auto;
    height: 100%;
    margin: 0 auto;
    position: relative;
    background-color: gray;
    min-width: 1000px;
    min-height: 710px;
  }
</style>
