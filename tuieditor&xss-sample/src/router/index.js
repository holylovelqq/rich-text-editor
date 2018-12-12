import Vue from 'vue'
import Router from 'vue-router'
import TUIEditor from '@/components/TUIEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TUIEditor',
      component: TUIEditor
    }
  ]
})
