<template>
  <header>
    <h1>石大红黑榜</h1>
    <div>
      <button class="learn-more" v-on:click="learnMore">了解更多</button>
      <button class="publish" v-on:click="publishNew">我要发布</button>
    </div>
  </header>
</template>
<style lang="less" scoped>
  header {
    margin-top: 0;
    background-color: #611e20;
    color: #fff;
    padding: 17px 10px;

    h1 {
      text-align: center;
      font-size: 18px;
      font-family: 微软雅黑, serif;
      margin: 0;
      padding: 8px 0 3px 0;
    }
    button {
      border: none;
      background: none;
      margin: 0px 5px 8px 5px;
      outline: none;
      padding: 5px 20px;
    }
    .publish {
      float: right;
      color: #fff;
      background: rgba(255, 255, 255, 0.5);
    }
    .learn-more {
      color: #fff;
      background: rgba(255, 255, 255, 0.5);
    }
  }
</style>
<script>
  import router from '../config/router'
  export default{
    data () {
      return {
        modalStatus: false
      }
    },
    methods: {
      learnMore () {
        router.push('about')
      },
      publishNew () {
        router.push('addnew')
      }
    }
  }
</script>
