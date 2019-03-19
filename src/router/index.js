import Vue from 'vue'
import Router from 'vue-router'
import maskDemo from '@/components/mask-demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/maskDemo'
    },
    {
      path: '/maskDemo',
      name: 'maskDemo',
      component: maskDemo
    }
  ]
})
