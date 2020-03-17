import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: "main"},
    component: () => import('../views/Home')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'Empty'},
    component: () => import('../views/Login')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {layout: 'Main'},
    component: () => import('../views/Categories')
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: {layout: 'Main'},
    component: () => import('../views/Detail')
  },
  {
    path: '/history',
    name: 'History',
    meta: {layout: 'Main'},
    component: () => import('../views/History')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: {layout: 'Main'},
    component: () => import('../views/Planning')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'Main'},
    component: () => import('../views/Profile')
  },
  {
    path: '/record',
    name: 'Record',
    meta: {layout: 'Main'},
    component: () => import('../views/Record')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {layout: 'Empty'},
    component: () => import('../views/Register')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
