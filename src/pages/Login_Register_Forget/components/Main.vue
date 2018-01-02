<template>
  <div class="box">
    <transition enter-active-class="flipInY" @before-enter="before" @after-enter="after" leave-active-class="flipOutY">
      <router-view class="animated"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    methods: {
      before(el) {
        //动画播放前
        //加入一些css样式
        let cssObj = {
          "animation-delay": "1.1s",//延迟，为了防止多个元素同时出现，影响布局
          "-webkit-animation-delay": "1.1s",//chrome和Safari浏览器只支持该css样式
          "animation-duration": "1.3s",//动画持续时间
          "-webkit-animation-duration": "1.3s",
        }
        let getCssText = function (obj) {
          let text = [];
          for (let o in obj) {
            text.push(o + ":" + obj[o]);//将css样式写入元素中
          }
          return text.join(';')
        }
        el.style.cssText = getCssText(cssObj);
      },
      after(el) {
        //动画播放后
        let cssObj = {
          "animation-delay": "0s",//将延迟重新归0
          "-webkit-animation-delay": "0s",
          "animation-duration": "1.3s",
          "-webkit-animation-duration": "1.3s",
        }
        let getCssText = function (obj) {
          let text = [];
          for (let o in obj) {
            text.push(o + ":" + obj[o])
          }
          return text.join(';')
        }
        el.style.cssText = getCssText(cssObj);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/animate.css";

</style>
