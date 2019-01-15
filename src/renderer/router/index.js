import Vue from 'vue'
import Router from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Router, Buefy)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'survey-page',
      component: require('@/components/Survey').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
