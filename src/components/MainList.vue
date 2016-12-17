<template>
  <div class="main-container">
    <div class="detail mask" v-for="item in list" v-if="item.event_type === eventType">
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
    color: #666;
    line-height: 25px;
  }

  .mask {
    background: rgba(255, 255, 255, 1);
  }

  .detail {
    /*border: solid 1px black;*/
    margin: 5px 0;
    padding: 20px 5px 10px 5px;

    .title {
      text-align: center;
      font-size: 20px;
      margin: 5px 0;
    }

    .content {
      text-indent: 32px;
      padding: 8px 10px;
    }

    .author {
      font-size: 12px;
      vertical-align: sub;
      margin-top: 8px;
      color: #d3d3d3;
    }

    .vote-btn {
      float: right;
    }
  }
</style>
<script>
  import API from '../config/requestConfig'
  import getQueryString from '../util/getQueryString'
  import bus from '../util/eventBus'

  export default{
    data () {
      return {
        type: 1,
        list: [],
        isLogin: false,
        isAdmin: false,
        eventType: 0
      }
    },
    mounted () {
      let that = this
      this.getData()
      if (this.isLogin === false) {
        this.getIsLogin().then(function (res) {
          // console.log(res)
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
                // console.log(res)
              })
            }
          }
        })
      }

      bus.$on('showList', function (type) {
        that.eventType = type
      })
    },
    methods: {
      getData () {
        let that = this
        this.$http.get(API.getEvent).then(function (res) {
          // console.log(res.data.results)
          that.list = res.data.results
        })
      },
      getIsLogin () {
        return this.$http.get(API.isLogin)
      }
    }
  }
</script>
