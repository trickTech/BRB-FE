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
      return {}
    },
    methods: {
      submitEvent () {

      }
    },
    components: {}
  }
</script>
