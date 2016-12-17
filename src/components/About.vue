<template>
  <div class="about-container">
    <h1>关于本应用</h1>
    <p>号外号外,期待已久的红黑榜终于出炉啦!</p>
    <br>
    <p>红榜,用来表扬在学校遇见的好人好事；<br>黑榜,用来批评在学校遇见的烦心事儿。</p>
    <p>(对事不对人哦同学!)</p>
    <p class="copyright">版权所有: 飞鸢科技</p>
    <button type="button" v-on:click="goback" class="goback" style="margin-top: 10px">返回主页面</button>
  </div>
</template>
<style lang="less" scoped>
  .about-container {
    margin-top: 20px;
    text-align: center;
    line-height: 25px;
    color: #fff;

    h1 {
      font-size: 20px;
      margin-bottom: 20px;
    }

    p {
      font-family: "微软雅黑", serif;
    }

    .copyright {
      margin-top: 50px;
    }

    .back {
      color: #666;
      font-size: 12px;
      margin: 10px;
      border: none;
      background-color: #ffffff;
      outline: none;
    }

    .goback {
      width: 90%;
      border-radius: 0;
      height: 40px;
      margin-top: 20px;
      outline: none;
      border: none;
      border: 1px solid #ffffff;
      color: #fff;
    }
  }
</style>
<script>
  export default{
    methods: {
      goback () {
        this.$router.push('/')
      }
    },
    components: {}
  }
</script>
