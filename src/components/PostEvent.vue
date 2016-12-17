<template>
  <div class="event-content">
    <input v-model="title" placeholder="标题" class="title">
    <br/>
    <textarea v-model="content" placeholder="内容" class="content"></textarea>
    <br/>
    <div class="typeradio">
      <input type="radio" v-model="event_type" value="0">红榜
      <input type="radio" v-model="event_type" value="1">黑榜
    </div>
    <button type="button" v-on:click="submitEvent" class="submit">提交</button>
    <button type="button" v-on:click="goback" class="submit" style="margin-top: 10px">返回主页面</button>
    <p v-show="failed" class="error">{{errorMsg}}</p>
  </div>
</template>
<style lang="less" scoped>
  .event-content {
    text-align: center;
    font-size: 16px;
    color: buttonface;
    padding-top: 60px;

    .title {
      width: 90%;
      height: 35px;
      margin: 20px 0;
      outline: none;
    }

    .content {
      width: 90%;
      height: 100px;
      outline: none;
      resize: none;
    }

    .typeradio {
      margin-top: 20px;
    }

    .submit {
      width: 90%;
      border-radius: 0;
      height: 40px;
      margin-top: 20px;
      outline: none;
      border: none;
      border: 1px solid #ffffff;
    }

    .error {
      color: red;
      margin-top: 20px;
    }
  }
</style>
<script>
  import API from '../config/requestConfig'
  export default{
    data () {
      return {
        title: '',
        content: '',
        event_type: null,
        failed: false,
        errorMsg: ''
      }
    },
    methods: {
      submitEvent () {
        let postData = {
          title: this.title,
          content: this.content,
          event_type: parseInt(this.event_type)
        }
        let that = this

        if (!this.checkForm()) {
          return
        }
        this.$http.post(API.postEvent, postData).then(function (res) {
          console.log(res)
          this.$router.push('/')
        }, function (respose) {
          console.log(respose)
          that.failed = true
          this.errorMsg = '网络异常'
        })
      },
      checkForm () {
        if (this.title !== '' && this.content !== '' && this.event_type !== null) {
          this.failed = false
          return true
        } else {
          this.failed = true
          this.errorMsg = '您输入的数据有误,请检查后重新提交'
          return false
        }
      },
      goback () {
        this.$router.push('/')
      }
    }
  }
</script>
