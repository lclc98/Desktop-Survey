import Vue from 'vue'
import Router from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Router, Buefy)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'survey',
      component: require('@/components/Survey').default
    },
    {
      path: '/questions',
      name: 'questions',
      component: require('@/components/Questions').default
    },
    {
      path: '/complete',
      name: 'complete',
      component: require('@/components/Complete').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
