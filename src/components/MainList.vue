<template>
  <div class="main-container">
    <div class="detail" v-for="item in list">
      <p class="title">{{item.title}}</p>
      <p class="content">{{item.content}}</p>
      <p class="clearfix">
        <span class="author">{{item.author}}</span>
        <button class="vote-btn">&#x1f44d;</button>
        <button class="vote-btn">&#x1f44e;</button>
      </p>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .main-container {
    margin-bottom: 30px;
  }

  .detail {
    border: solid 1px black;
    margin: 10px 5px;
    clear: both;

    .vote-btn {
      float: right;
    }
  }
</style>
<script>
  import API from '../config/requestConfig'
  import getQueryString from '../util/getQueryString'
  export default{
    data () {
      return {
        type: 1,
        list: [],
        isLogin: false,
        isAdmin: false
      }
    },
    mounted () {
      let that = this
      this.getData()
      if (this.isLogin === false) {
        this.getIsLogin().then(function (res) {
          if (res.detail.is_login === true) {
            that.isLogin = true
            if (res.detail.is_admin === true) {
              that.isAdmin = true
            }
          } else {
            if (getQueryString('verify_request') === null) {
              window.location.href = API.goYibanOauth
            } else {
              this.$http.post(API.auth, {'verify_request': getQueryString('verify_request')}).then(function (res) {
                window.location.hash = '/'
                console.log(res)
              })
            }
          }
        })
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
        return this.$http.get(API.isLogin)
      }
    }
  }
</script>
