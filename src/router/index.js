import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Chatroom from '../views/Chatroom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rooms/:id',
    name: 'Chatroom',
    component: Chatroom
  }
]

const router = new VueRouter({
  routes
})

export default router
