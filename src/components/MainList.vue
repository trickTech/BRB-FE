<template>
  <div class="main-container">
    <div class="detail" v-for="item in list">
      <p>{{item.title}}</p>
      <p>{{item.content}}</p>
    </div>
  </div>
</template>
<style lang="less" scoped>

</style>
<script>
  import API from '../config/requestConfig'
  import getQueryString from '../util/getQueryString'
  export default{
    data () {
      return {
        type: 1,
        list: []
      }
    },
    mounted () {
      this.getData()
      if (this.getIsLogin()) {
        console.log(123)
      } else {
        // if ()
        // window.location.href = 'https://openapi.yiban.cn/oauth/authorize?client_id=07f11a3f2773e24e&redirect_uri=http://f.yiban.cn/iapp28401&display=html'
        // console.log(getQueryString('verify_request'))
        // console.log(getQueryString('yb_uid'))
        if (getQueryString('verify_request') === null) {
          window.location.href = 'https://openapi.yiban.cn/oauth/authorize?client_id=07f11a3f2773e24e&redirect_uri=http://f.yiban.cn/iapp28401&display=html'
        } else {
          let postData = {
            msg: getQueryString('verify_request')
          }
          this.$http.post(API.auth, postData).then(function (res) {
            console.log(res)
          })
        }
      }
    },
    methods: {
      getData () {
        let that = this
        this.$http.get(API.getEvent).then(function (res) {
          // console.log(res.data)
          that.list = res.data
        })
      },
      getIsLogin () {
        this.$http.get(API.isLogin).then(function (res) {
          console.log(res.data)
        })
      }
    }
  }
</script>
