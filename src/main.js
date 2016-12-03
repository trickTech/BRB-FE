import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.use(VueResource)

Vue.http.options.credentials = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  http: {
    headers: {
      'Content-Type': 'application/json'
    }
  },
  template: '<App/>',
  components: { App }
})
