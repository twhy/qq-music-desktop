// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

const state = {
  tabs: {
    radio: 'hot'
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: { state },
  template: '<App/>',
  components: { App }
})
