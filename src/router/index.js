import Vue from 'vue'
import VueRouter from 'vue-router'
import ContainerView from '../views/ContainerView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'container',
    component:() => import('../views/ContainerView.vue'),
    redirect:"/home",
    meta:{
      needRequire:true,
    },
    children:[
      {
        path:"home",
        name:"home",
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'classify',
        name: 'classify',
        component: () => import('../views/ClassifyView.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/CartView.vue')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('../views/MyView.vue')
      },
    ]
  },
  {
    path: '/find',
    name: 'find',
    component: () => import('../views/FindView.vue')
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path:'/register',
    name:'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path:'/search',
    name:'search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path:'/details',
    name:'details',
    component: () => import('../views/DetailsView.vue')
  },
  {
    path:"/findDetails",
    name:"findDetails",
    component: () => import('../views/FindDetailsView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
