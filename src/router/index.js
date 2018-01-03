import Vue from 'vue'
import Router from 'vue-router'//使用路由
import Login_Register_Forget from '../pages/Login_Register_Forget/components/Index'//导入login页面组件
import login_register_config from '../pages/Login_Register_Forget/router/router_config'
import Index from '../pages/Index/components/Index'
import index_config from '../pages/Index/router/router_config'

Vue.use(Router);//使用router
// todo 等index界面完成后路由需要重新进行调整
export default new Router({//实例化一个router路由对象
  mode: 'history',
  routes: [//路由配置
    {
      //登录和注册界面的路由
      path: '/login&register',//路由的地址
      component: Login_Register_Forget,//该路由地址下的组件
      children: login_register_config//子路由
    },
    {
      //主页的路由
      path: '/index',
      component: Index,
      children: index_config
    },
    {
      //文章路由
      path:'/article',

    },
    {
      //论坛路由
      path:'forum'
    },
    {
      path:'user'
    },
    {
      //介绍路由
      path:'introduce'
    },
    {
      //学堂路由
      path:'education',

    },
    {
      path: '/',
      redirect: '/index'//路由重定向
    }

  ]
})
