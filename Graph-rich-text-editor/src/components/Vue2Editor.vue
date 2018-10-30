<template>
  <div>
    <!-- <vue-editor id="vue-editor" v-model="content"></vue-editor> -->
    <vue-editor id="vue-editor" v-model="content" :editorToolbar="customToolbar"></vue-editor>
    <button @click="saveContent" style="display:block;margin: 50px auto">save</button>
  </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
export default {
  name: 'Vue2Editor',
  components: {
    VueEditor
  },
  data () {
    return {
      content: 'vue2-editor',
      customToolbar: [
        [{
          header: [!1, 1, 2, 3, 4, 5, 6]
        }],
        ['bold', 'italic', 'underline', 'strike'],
        [{
          align: ''
        }, {
          align: 'center'
        }, {
          align: 'right'
        }, {
          align: 'justify'
        }],
        [
          // 'blockquote',
          'code-block'
        ],
        [{
          list: 'ordered'
        }, {
          list: 'bullet'
        }, {
          list: 'check'
        }],
        [{
          indent: '-1'
        }, {
          indent: '+1'
        }],
        [{
          color: []
        }, {
          background: []
        }],
        // ['clean'],
        [
          // 'link',
          'video',
          'image'
        ]
      ]
    }
  },
  methods: {
    saveContent () {
      console.log(this.content)
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style scoped>

</style>
