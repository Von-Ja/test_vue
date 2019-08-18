import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [{ path: '/', redirect: '/login' }, { path: '/login', component: Login }, { path: '/home', component: Home }]
})

// 注册全局前置守卫
router.beforeEach((to, from, next) => {
  // 如果去登录页面，直接放行
  if (to.path === '/login') return next()
  // 获取token值
  const tokenStr = window.sessionStorage.getItem('token')
  // 如果不存在token，跳转到登录页面
  if (!tokenStr) return next('/login')
  // 判定存在之后放行
  next()
})

export default router
