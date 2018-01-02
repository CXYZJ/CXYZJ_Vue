<template>
  <div>
    <div id="other">第三方登录</div>
    <div class="div_10"></div>
    <div>
      <div class="third">
        <a href="#" class="hvr-fade-blue iconfont icon-qq "></a>
      </div>
      <div class="width_20"></div>
      <div class="third">
        <a href="#" class="hvr-fade-green iconfont icon-wechat "></a>
      </div>
      <div class="width_20"></div>
      <div class="third">
        <a href="#" class="hvr-fade-red iconfont icon-weibo  "></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    //todo 第三方登录和注册待实现
    name: "third"
  }
</script>

<style scoped>
  @import "../../../assets/css/index.scss";

  #other {
    color: gray;
    text-align: center;
  }

  .third {
    display: inline-block;

  }
</style>
