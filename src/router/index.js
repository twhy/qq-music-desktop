import Vue from 'vue'
import Router from 'vue-router'
import Radio from '@/components/radio/Radio'
import Ranking from '@/components/Ranking'
import Recommend from '@/components/Recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/radio/:id?',
      name: 'Radio',
      props: true,
      component: Radio
    }
  ]
})
