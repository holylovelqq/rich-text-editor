import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyVueEditor from '@/components/MyVueEditor'
import Vue2Editor from '@/components/Vue2Editor'
import UEditor from '@/components/UEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/myvueeditor',
      name: 'MyVueEditor',
      component: MyVueEditor
    },
    {
      path: '/vue2editor',
      name: 'Vue2Editor',
      component: Vue2Editor
    },
    {
      path: '/ue',
      name: 'UEditor',
      component: UEditor
    }
  ]
})
