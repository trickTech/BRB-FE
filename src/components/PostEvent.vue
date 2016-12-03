<template>
  <div>
    <input v-model="title">
    <br/>
    <textarea v-model="content"></textarea>
    <br/>
    <button type="button" v-on:click="submitEvent">提交</button>
  </div>
</template>
<style>

</style>
<script>
  // import HeaderComponent from './components/header.vue'
  import API from '../config/requestConfig'
  export default{
    data () {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      submitEvent () {
        let postData = {
          title: this.title,
          content: this.content,
          event_type: 0
        }
        this.$http.post(API.postEvent, postData).then(function (res) {
          console.log(res)
        })
      }
    },
    components: {}
  }
</script>
