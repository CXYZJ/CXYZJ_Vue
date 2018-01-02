import login_register from '../components/Login_Register'
import forget from '../components/Forget'
import login from '../components/Login'
import register from '../components/Register'

export default [
  {
    path: "/",
    component: login_register,
    children: [
      {path: "login", component: login},
      {path: "register", component: register},
      {path: '/', redirect: 'login'}
    ]
  },
  {
    path: "forget",
    component: forget
  },
]
