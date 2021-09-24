import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // hash模式:createWebHashHistory, history模式:createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
      meta: {
        index: 1
      }
    }, {
      path: '/category',
      name: 'category',
      component: () => import(/* webpackChunkName: "category" */ '@/views/category/index.vue'),
      meta: {
        index: 1
      }
    }, {
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName: "cart" */ '@/views/cart/index.vue'),
      meta: {
        index: 1
      },
    }, {
      path: '/my',
      name: 'my',
      component: () => import(/* webpackChunkName: "my" */ '@/views/my/index.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('@/views/unusual/404.vue')
    },
    { // 商品详情
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: () => import(/* webpackChunkName: "goodsDetail" */ '@/views/cart/goodsDetail'),
      meta: {
        index: 1
      }
    }
  ]
})

export default router