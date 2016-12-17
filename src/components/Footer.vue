<template>
  <footer class="footer-container">
    <button class="red" v-on:click="changeType(0)">红榜</button><button class="red" v-on:click="changeType(1)">黑榜</button>
  </footer>
</template>
<style lang="less" scoped>
  .footer-container {
    position: fixed;
    bottom: 0;
    width: 100%;

    button {
      outline: none;
      border: none;
      background: none;
      border: 1px solid #ff7c72;
      box-sizing: border-box;
      width: 50%;
      padding: 10px 0;
      font-size: 18px;
      color: white;
      background-color: #611e20;
      font-family: 华文琥珀,serif;
    }
  }

</style>
<script>
  import bus from '../util/eventBus'

  export default{
    methods: {
      changeType (type) {
        bus.$emit('showList', type)
      }
    }
  }
</script>
