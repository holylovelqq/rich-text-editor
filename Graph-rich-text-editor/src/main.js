// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import my-vue-editor
import myVueEditor from 'my-vue-editor'
import 'font-awesome/css/font-awesome.min.css'

// import Echarts from 'echarts'

// import only used
import Echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/graph'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

Vue.prototype.$echarts = Echarts
Vue.use(myVueEditor, {
  modules: [
    'font',
    'foreColor',
    'bold',
    'italic',
    'underline',
    'linethrough',
    'ul',
    'ol',
    'indent',
    'outdent',
    'align',
    'image',
    'quote',
    'todo'
    // 这是一个自定义的模块
    // 'customSave'
  ],
  language: 'en-us'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
