<template>
  <div>
    <editor  v-model="editorText" mode="wysiwyg" :visible="editorVisible" :options="options" :html="editorHtml" height="300px" @load="onEditorLoad"
    @focus="onEditorFocus"
    @blur="onEditorBlur"
    @change="onEditorChange"
    @stateChange="onEditorStateChange" ref="tuiEditor"/>
    <button @click="saveContent" style="display:block;margin: 50px auto">save</button>
   <viewer
    class="viewer"
    v-model="viewerText"
    />
  </div>
</template>
<script>
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'codemirror/lib/codemirror.css'
import 'tui-color-picker/dist/tui-color-picker.css'
import 'tui-editor/dist/tui-editor-extTable.js'
import 'tui-editor/dist/tui-editor-extColorSyntax.js'
import { Editor, Viewer } from '@toast-ui/vue-editor'
export default{
  components: {
    Editor, Viewer
  },
  data () {
    return {
      editorText: '',
      viewerText: '',
      testText: [],
      editorVisible: false,
      editorHtml: '',
      options: {
        minHeight: '200px',
        language: 'ja_JP',
        // initialEditType: 'wysiwyg',
        useCommandShortcut: true,
        useDefaultHTMLSanitizer: false,
        usageStatistics: false,
        hideModeSwitch: true,
        exts: ['colorSyntax', 'table'],
        toolbarItems: [
          'heading',
          'bold',
          'italic',
          'strike',
          'colorsyntax',
          'divider',
          // 'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          // 'task',
          'indent',
          'outdent',
          'divider',
          'table',
          'image',
          'link',
          'divider',
          // 'code',
          'codeblock'
        ],
        // test donot whrite hooks:default is base64
        hooks: {
        // 图片上传的 hook
        // https://github.com/nhnent/tui.editor/issues/57
          addImageBlobHook: function (file, callback) {
            console.log(file) // get!!---------------------------------------------------!!!!!!!!!!!!!
          // callback(blob, 'alt text');
            // function callback_for_image_upload (image_url) {
            //   console.log(image_url)
            //   let img_url = get_full_image_url(image_url) // 图片URL 只有一部分，我们这里处理成 https://img.wittcims.com... 这样的全地址
            //   callback(img_url, 'image')
            // }
            // self.upload_file_with_callback(file, callback_for_image_upload)
          }
        }
      }
    }
  },
  methods: {
    saveContent () {
      console.log(this.editorText)
      let html = this.$refs.tuiEditor.editor.convertor.toHTML(this.editorText)
      console.dir(this.$refs.tuiEditor.editor._ui._popups[1]._$imageFileInput[0].value)
      console.dir(this.$refs.tuiEditor.invoke)
      console.log(html)
      let XSSContent = this.myXSS(html)
      console.log(XSSContent)
      // console.log(this.myXSS('<p style="width:expression(xxx)"></p>'))
      this.viewerText = XSSContent
    },
    // XSSを設定する
    myXSS (html) {
      let options = {
        whiteList: {
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          p: ['style'],
          span: ['style'],
          strong: [],
          em: [],
          br: [],
          s: [],
          u: [],
          blockquote: [],
          a: ['href'],
          ol: [],
          ul: [],
          li: [],
          img: ['src', 'alt'],
          table: [],
          tbody: [],
          thead: [],
          td: ['colspan', 'rowspan', 'align'],
          th: ['colspan', 'rowspan', 'align'],
          tr: [],
          pre: [],
          code: []
        },
        css: {
          whiteList: {
            color: /^#[a-f0-9]{3,6}$/
          }
        },
        stripIgnoreTag: true,
        onTagAttr: function (tag, name, value, isWhiteAttr) {
          // default src only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
          // ここで'data:image/jpeg;base64,' | 'data:image/gif;base64,' | 'data:image/png;base64,' を追加する
          if (tag === 'img' && name === 'src') {
            value = value.trim()
            if (value.substr(0, 23) === 'data:image/jpeg;base64,' || value.substr(0, 22) === 'data:image/gif;base64,' || value.substr(0, 22) === 'data:image/png;base64,') {
              return 'src="' + value + '"'
            }
          }
        }
      }
      let myxss = new this.$xss.FilterXSS(options)
      return myxss.process(html)
    },
    onEditorLoad () {
      // implement your code It would be emitted when editor fully load
    },
    onEditorFocus () {
      // implement your code It would be emitted when editor get focus
    },
    onEditorBlur () {
      // implement your code It would be emitted when editor loose focus
      // console.log(a)
    },
    onEditorChange () {
      // implement your code It would be emitted when content changed
      // console.dir(this.$refs.tuiEditor)
    },
    onEditorStateChange () {
      // implement your code It would be emitted when format change by cursor position
    }
  },
  created () {

  },
  mounted () {

  },
  watch: {
    // this.$refs.tuiEditor.editor._ui._popups[1]._$imageFileInput[0].value: function () {}
  },
  computed: {

  }
}
</script>
<style scoped>

</style>
