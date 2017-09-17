import Vue from 'vue'
import Router from 'vue-router'
import Ranking from '@/components/Ranking'
import Recommend from '@/components/Recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: 'ranking',
      name: 'Ranking',
      component: Ranking
    }
  ]
})
