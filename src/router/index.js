import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [

  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/Parent.vue'),
    redirect:'/table'

  },
  {
    path: '/layout',
    component: () => import(/* webpackChunkName: "about" */ '../views/element/Layout')
  },
  {
    path: '/pop',
    component: () => import(/* webpackChunkName: "about" */ '../views/element/Pop')
  },

  {
    path: '/table',
    component: () => import(/* webpackChunkName: "about" */ '../views/element/Table')
  },

  {
    path: '/home/:id',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children:[
      {
        path: './child',
        component: () =>import('../views/Child')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
