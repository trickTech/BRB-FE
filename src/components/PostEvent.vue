<template>
  <div class="event-content">
    <input v-model="title" placeholder="标题" class="title">
    <br/>
    <textarea v-model="content" placeholder="内容" class="content"></textarea>
    <br/>
    <button type="button" v-on:click="submitEvent" class="submit">提交</button>
    <button type="button" v-on:click="goback" class="back">返回主页面</button>
  </div>
</template>
<style lang="less" scoped>
  .event-content{
    text-align: center;
    font-size: 16px;
    color: #000;
    padding-top: 60px;

    .title{
      width: 90%;
      height: 35px;
      margin: 20px 0;
      outline: none;
    }

    .content{
      width: 90%;
      height: 100px;
      outline: none;
      resize: none;
    }

    .submit{
      width: 90%;
      border-radius: 0;
      height: 40px;
      margin-top: 20px;
      outline: none;
      border: none;
      border: 1px solid #ffffff;
    }

    .back{
      color: #666;
      font-size: 12px;
      margin: 10px;
      border: none;
      background-color: #ffffff;
      outline: none;
    }
  }
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
      },
      goback () {

      }
    },
    components: {}
  }
</script>
