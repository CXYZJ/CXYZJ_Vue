<template>
  <div id="index">
    <myhead></myhead>
  </div>
</template>

<script>
  import myhead from '../../../components/Header'

  export default {
    name: "index",
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
    background-color: rgb(243, 243, 243);
    min-width: 1340px;
    min-height: 720px;
  }
</style>
