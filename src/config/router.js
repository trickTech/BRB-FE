/**
 * Created by lhy95 on 2016/12/3.
 */

import VueRouter from 'vue-router'
import About from '../components/About.vue'
import PostNew from '../components/PostEvent.vue'

const routes = [
  {
    path: '/about',
    component: About
  },
  {
    path: '/addnew',
    component: PostNew
  }
]

const router = new VueRouter({
  routes
})

module.exports = router
