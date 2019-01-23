import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home/home.vue'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login/login.vue'], resolve)
    },
    {
      path: '/work',
      name: 'work',
      component: resolve => require(['@/components/mywork/work.vue'], resolve)
    },
    {
      path: '/center',
      name: 'center',
      component: resolve => require(['@/components/center.vue'], resolve)
    },
    {
      path: '/team',
      name: 'team',
      component: resolve => require(['@/components/team/team.vue'], resolve)
    },
    {
      path: '/detail',
      name: 'detail',
      component: resolve => require(['@/components/team/detail.vue'], resolve)
    }
  ]
})
