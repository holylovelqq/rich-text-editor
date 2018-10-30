<template>
<div>
  <my-vue-editor :content="content" @change='ctnChange' @imageUpload='imageUpload'></my-vue-editor>
  <button @click="saveContent" style="margin: 50px">save</button>
</div>
</template>
<script>
export default{
  name: 'Editor',
  data () {
    return {
      content: 'needs install font-awesome'
    }
  },
  methods: {
    ctnChange (data) {
      this.content = data
      console.log(data)
    },
    imageUpload () {
      console.log('imageUpload')
    },
    saveContent () {
      console.log(this.content)
    }
  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  computed: {

  }

}
</script>
<style scoped>

</style>
