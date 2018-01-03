<template>

  <div id="wrapper">
    <!--头部组件-->
    <div class="div_10">&nbsp;</div>
    <myHeader></myHeader>
    <!--登录或注册组件容器-->
    <div class="div_30">&nbsp;</div>
    <myMain></myMain>
    <div class="div_10">&nbsp;</div>
    <myFooter></myFooter>
  </div>


</template>

<script>
  import myHeader from './Header'//导入Header组件
  import myMain from './Main'//导入Main1组件
  import myFooter from '../../../components/Footer'

  export default {
    name: 'login',//当前组件的名字，没有也无所谓
    components: {myHeader, myMain, myFooter},//使用组件
  }
</script>
<style>
  @import "../../../assets/css/index.scss";

  #wrapper {
    width: auto;
    height: 100%;
    margin: 0 auto;
    position: relative;
    background: url("../assets/img/back_login.jpeg") no-repeat;
    background-size: cover;
    min-width: 1000px;
    min-height: 710px;
  }


</style>
