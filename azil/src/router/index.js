import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import DogsView from '../views/DogsView.vue'
import CatsView from '../views/CatsView.vue'
import BirdsView from '../views/BirdsView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dogs',
    name: 'dogs',
    component: DogsView
  },
  {
    path: '/cats',
    name: 'cats',
    component: CatsView
  },
  {
    path: '/birds',
    name: 'birds',
    component: BirdsView
  },

]

const router = new VueRouter({
  mode: 'history',
  //
  base: process.env.BASE_URL,
  routes
})

export default router
