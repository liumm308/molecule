

import Main from '@/components/Main'

export default[{
  name:"solution",
  path: '/solution',
  component: Main,
  children: [
    {
      path: '/solution',
      name: 'solution',
      meta: {
        title: '解决方案',
        needIn: true
      },
      component: () => import('@/test/solution/solution.vue')
    },{
      path: '/public_solution',
      name: 'public_solution',
      meta: {
        title: '通用解决方案',
        needIn: true
      },
      component: () => import('@/test/solution/public_solution.vue')
    },{
      path: '/profession_solution',
      name: 'profession_solution',
      meta: {
        title: '行业解决方案',
        needIn: true
      },
      component: () => import('@/test/solution/profession_solution')
    }
  ]
}]

