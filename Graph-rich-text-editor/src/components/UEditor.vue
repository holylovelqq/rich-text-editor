<template>
<div>
  <!-- 该UEditor为基于官方版开发的，API与官网相同，来源：https://github.com/HaoChuan9421/vue-ueditor-wrap -->
  <vue-ueditor-wrap v-model="msg" :config="myConfig" @ready="ready"></vue-ueditor-wrap>
</div>
</template>
<script>
import VueUeditorWrap from 'vue-ueditor-wrap'
export default{
  name: 'UEditor',
  components: {
    VueUeditorWrap
  },
  data () {
    return {
      msg: 'ueditor test',
      myConfig: {
        // 如果需要上传功能,找后端小伙伴要服务器接口地址
        // serverUrl: 'http://api.demo.com/ueditor/upload',
        // 你的UEditor资源存放的路径,相对于打包后的index.html(路由使用history模式注意使用绝对路径或者填写正确的相对路径)
        UEDITOR_HOME_URL: './static/UEditor/',
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 240,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 关闭自动保存
        enableAutoSave: false
      }
    }
  },
  methods: {
    ready (editorInstance) {
      console.log(`编辑器实例${editorInstance.key}: `, editorInstance)
    }
  },
  created () {

  },
  mounted () {

  },
  watch: {},
  computed: {}
}
</script>
<style scoped>

</style>
