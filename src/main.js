// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Tab from './components/Tab'
import Carousel from './components/Carousel'
import router from './router'

Vue.config.productionTip = false

Vue.use(Tab)
Vue.use(Carousel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
