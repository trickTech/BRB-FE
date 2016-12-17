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
    margin: 5px 0;
    padding: 5px;

    .title {
      text-align: center;
      font-size: 20px;
    }

    .content {
      text-indent: 32px;
    }

    .author {
      font-size: 12px;
      vertical-align: sub;
    }

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
          console.log(res)
          if (res.data.detail.is_login === true) {
            that.isLogin = true
            if (res.data.detail.is_admin === true) {
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
          that.list = res.data.results
        })
      },
      getIsLogin () {
        return this.$http.get(API.isLogin)
      }
    }
  }
</script>
