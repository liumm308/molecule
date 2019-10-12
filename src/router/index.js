import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import ProductRouter from './productRouter'
import SolutionRouter from './solutionRouter'
import LoginRouter from './Login'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
      meta: {
        needIn: false
      }
    },
    {
      name:"Router",
      path: '/',
      component: Main,
      children: [
        {
          path: '/vueTest',
          name: 'vueTest',
          meta: {
            title: '测试内容',
            needIn: true
          },
          component: () => import('@/test/vueTest.vue')
        },
        {
          path: '/index',
          name: 'home',
          meta: {
            title: '首页',
            needIn: true
          },
          component: () => import('@/test/contents.vue')
        },
        {
          path: '/card',
          name: 'card',
          meta: {
            title: '卡片',
            needIn: true
          },
          component: () => import('@/test/cardContainer.vue')
        }
      ]
    },
    ...ProductRouter,
    ...SolutionRouter,
    ...LoginRouter
  ]
})
