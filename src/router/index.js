import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import Main from '@/components/HelloWorld'
import UserLogin from '@/components/UserLogin'

Vue.use(VueRouter)
Vue.use(Meta)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  }
  const position = {}
  if (to.hash) {
    position.selector = to.hash
  }
  if (to.matched.some(m => m.meta.scrollToTop)) {
    position.x = 0
    position.y = 0
  }
  return position
}


export default function createRouter() {
  const router = new VueRouter({
    mode: 'history',
    scrollBehavior,
    routes: [
      {
        name: 'index',
        path: '/',
        component: Main,
        meta: {
          typeId: 'indexPage',
          scrollToTop: true
        }
      }, {
        name: 'login',
        path: '/users/login',
        component: UserLogin
      }
    ]
  })
  return router
}
