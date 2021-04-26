import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require ('./assets/css/normalize.css')



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
