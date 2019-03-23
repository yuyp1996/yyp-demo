import Vue from 'vue'
import Router from 'vue-router'
import maskDemo from '@/components/mask/mask-demo'
import maskClipDemo from '@/components/mask/mask-clip-demo'
import maskOriginDemo from '@/components/mask/mask-origin-demo'
import maskSizeDemo from '@/components/mask/mask-size-demo'
import maskComposite from '@/components/mask/mask-composite-demo'

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
    },
    {
      path: '/maskClipDemo',
      name: 'maskClipDemo',
      component: maskClipDemo
    },
    {
      path: '/maskOriginDemo',
      name: 'maskOriginDemo',
      component: maskOriginDemo
    },
    {
      path: '/maskSizeDemo',
      name: 'maskSizeDemo',
      component: maskSizeDemo
    },
    {
      path: '/maskComposite',
      name: 'maskComposite',
      component: maskComposite
    },
  ]
})
