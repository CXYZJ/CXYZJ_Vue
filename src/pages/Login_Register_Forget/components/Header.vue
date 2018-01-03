<template>
  <div id="head">
    <!--将logo引入-->
    <router-link to="/index"><img id="icon" src="../../../assets/img/icon.gif"/></router-link>
  </div>
</template>
<script>
  export default {
    name: "my_header"
  }
</script>

<style scoped>
  #head {
    width: 100%;
    height: 80px;
    text-align: center;
  }

  #icon {
    height: 100%;
  }
</style>
