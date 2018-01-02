import Vue from 'vue'//vue框架
import router from './router/index'//路由配置
import './assets/css/scss/hover.scss'
import Element from 'element-ui'//element-ui组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css样式
import api from './api/index'//与后端通信的接口

import container from './Index'//自己编写的组件，置于最顶层用于存放整个不同的页面,相当于一个容器
import store from './store'//vuex的配置


Vue.prototype.$api = api//绑定全局属性

Vue.use(Element)//使用element


new Vue({//实例化一个vue
  el: '#app',//选择器
  store,//vuex配置
  router,//路由配置
  render: h => h(container)//加载组件
})
