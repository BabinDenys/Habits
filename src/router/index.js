import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddHabit from '../views/AddHabit.vue'
import MyHabits from '../views/MyHabits.vue'
import Practice from '../views/Practice.vue'
import Basket from '../views/Basket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addHabit',
    name: 'AddHabit',
    component: AddHabit
  },
  {
    path: '/myHabits',
    name: 'MyHabits',
    component: MyHabits
  },
  {
    path: '/practice',
    name: 'Practice',
    component: Practice
  },
  {
    path: '/basket',
    name: 'basket',
    component: Basket
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
