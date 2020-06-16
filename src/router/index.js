import Vue from 'vue'
import Router from 'vue-router'
import maskDemo from '@/components/mask/mask-demo'
import maskClipDemo from '@/components/mask/mask-clip-demo'
import maskOriginDemo from '@/components/mask/mask-origin-demo'
import maskSizeDemo from '@/components/mask/mask-size-demo'
import maskComposite from '@/components/mask/mask-composite-demo'
import nthChildEle from '@/components/nthChild/nthChildEle'
import nthChildClass from '@/components/nthChild/nthChildClass'
import nthTypeEle from '@/components/nthType/nthTypeEle'
import nthTypeClass from '@/components/nthType/nthTypeClass'
import adaptiveTextarea from '@/components/adaptiveTextarea/adaptive-textarea'
import adaptiveDiv from '@/components/adaptiveTextarea/adaptive-div'
import autoPos from '@/components/autoPos/autoPos'
import autoPosJS from '@/components/autoPos/autoPosJS'
import column from '@/components/column/column'
import scrollSnap from '@/components/scrollSnap/scrollSnap'
import formSkill from '@/components/formSkill/formSkill'

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
    {
      path: '/nthChildEle',
      name: 'nthChildEle',
      component: nthChildEle
    },
    {
      path: '/nthChildClass',
      name: 'nthChildClass',
      component: nthChildClass
    },
    {
      path: '/nthTypeEle',
      name: 'nthTypeEle',
      component: nthTypeEle
    },
    {
      path: '/nthTypeClass',
      name: 'nthTypeClass',
      component: nthTypeClass
    },
    {
      path: '/adaptiveTextarea',
      name: 'adaptiveTextarea',
      component: adaptiveTextarea
    },
    {
      path: '/adaptiveDiv',
      name: 'adaptiveDiv',
      component: adaptiveDiv
    },
    {
      path: '/autoPos',
      name: 'autoPos',
      component: autoPos
    },
    {
      path: '/autoPosJS',
      name: 'autoPosJS',
      component: autoPosJS
    },
    {
      path: '/column',
      name: 'column',
      component: column
    },
    {
      path: '/scrollSnap',
      name: 'scrollSnap',
      component: scrollSnap
    },
    {
      path: '/formSkill',
      name: 'formSkill',
      component: formSkill
    }
  ]
})
