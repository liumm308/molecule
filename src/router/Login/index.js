

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
      },
      component: () => import('@/test/Login/Login.vue')
    }
  ]
}]
