

import Main from '@/components/Main'

export default[{
  name:"product",
  path: '/product',
  component: Main,
  children: [
    {
      path: '/product',
      name: 'product',
      meta: {
        title: '产品管理',
      },
      component: () => import('@/test/product/product.vue')
    },{
      path: '/product_classification',
      name: 'product_classification',
      meta: {
        title: '产品分类',
      },
      component: () => import('@/test/product/product_classification.vue')
    },{
      path: '/product_competitive',
      name:"product_competitive",
      meta:{
        title:'产品精选'
      },
      component: () => import('@/test/product/product_competitive.vue')
    },{
      path: '/product_redis',
      name: 'product_redis',
      meta: {
        title: '云数据库',
      },
      component: () => import('@/test/product/product_redis.vue')
    },{
      path: '/product_nova',
      name:"product_nova",
      meta:{
        title:'云服务器'
      },
      component: () => import('@/test/product/product_nova.vue')
    },{
      path: '/product_cinder',
      name: 'product_cinder',
      meta: {
        title: '云存储',
      },
      component: () => import('@/test/product/product_cinder.vue')
    },{
      path: '/product_docker',
      name:"product_docker",
      meta:{
        title:'容器服务'
      },
      component: () => import('@/test/product/product_docker.vue')
    }
  ]
}]

