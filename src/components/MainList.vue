<template>
  <div class="main-container">
    <div class="detail mask" v-for="item in list">
      <p class="title">{{item.title}}</p>
      <p class="content">{{item.content}}</p>
      <p class="clearfix">
        <span class="author">{{item.author}}</span>
        <button class="vote-btn" v-on:click="doVote(item, 1)">&#x1f44d;</button>
        <button class="vote-btn" v-on:click="doVote(item, 0)">&#x1f44e;</button>
        <span class="vote-count">评分：{{item.vote_count}}</span>
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

    .vote-count {
      float: right;
      margin-right: 10px;
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
        queryParam: {
          event_type: 0,
          order: 'desc'
        },
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
          if (res.data.detail.is_login === true) {
            that.isLogin = true
            if (res.data.detail.is_admin === true) {
              that.isAdmin = true
            }
          } else {
            that.doAuth()
          }
        })
      }

      bus.$on('showList', function (type) {
        that.queryParam.event_type = type
        that.getData()
      })
    },
    methods: {
      getData () {
        let that = this
        this.$http.get(API.getEvent, {params: that.queryParam}).then(function (res) {
          that.list = res.data.results
        })
      },
      getIsLogin () {
        return this.$http.get(API.isLogin)
      },
      doAuth () {
        if (getQueryString('verify_request') === null) {
          window.location.href = API.goYibanOauth
        } else {
          this.$http.post(API.auth, {'verify_request': getQueryString('verify_request')}).then(function (res) {
            window.location.hash = '/'
          }, function () {
            // 网络错误
          })
        }
      },
      doVote (item, type) {
        let url = API.vote(item.id)
        let postData = {}
        if (type === 0) {
          postData.vote_value = -1
        } else if (type === 1) {
          postData.vote_value = 1
        }
        this.$http.post(url, postData).then(function (res) {
          console.log(res)
          if (res.status === 200) {
            item.vote_count += postData.vote_value
          }
        })
      }
    }
  }
</script>
