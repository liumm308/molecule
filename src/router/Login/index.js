

import Main from '@/components/Main'

export default[{
  name:"login",
  path: '/login',
  component: Main,
  children: [
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录',
        needIn: false
      },
      component: () => import('@/test/Login/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        title: '注册',
        needIn: false
      },
      component: () => import('@/test/Login/Register.vue')
    }
  ]
}]
