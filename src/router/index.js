import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import ProductRouter from './productRouter'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
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
          },
          component: () => import('@/test/vueTest.vue')
        },
        {
          path: '/index',
          name: 'home',
          meta: {
            title: '首页',
          },
          component: () => import('@/test/contents.vue')
        },
        {
          path: '/gojs',
          name: 'go',
          meta: {
            title: '流程图',
          },
          component: () => import('@/test/gojs/test.vue')
        },
        {
          path: '/card',
          name: 'card',
          meta: {
            title: '卡片',
          },
          component: () => import('@/test/cardContainer.vue')
        }
      ]
    },
    ...ProductRouter
  ]
})
