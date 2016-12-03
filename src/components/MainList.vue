<template>
  <div class="main-container">
    <div class="detail" v-for="item of list">
      <p>{{item.title}}</p>
      <p>{{item.content}}</p>
    </div>
  </div>
</template>
<style lang="less" scoped>

</style>
<script>
  import API from '../config/requestConfig'
  export default{
    data () {
      return {
        type: 1,
        list: []
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      getData () {
        let that = this
        this.$http.get(API.getEvent).then(function (res) {
          that.list = res
        })
      }
    }
  }
</script>
