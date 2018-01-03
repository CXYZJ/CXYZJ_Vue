<template>
  <div id="component" :style="{height:clientHeight}">
    <router-view></router-view>
    <!--此处通过路由配置即可在不同url路径显示不同的组件-->
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        clientHeight: '600px',
        clientWidth: '600px'
      }
    },
    mounted() {
      // 动态设置背景图的高度为浏览器可视区域高度
      // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
      this.clientHeight = `${document.documentElement.clientHeight}px`;
      // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
      window.onresize = () => {
        this.clientHeight = `${document.documentElement.clientHeight}px`;
      };
    }
  }
</script>

<style scoped>
  #component {
    min-height: 720px;
    min-width: 1340px;
  }
</style>
