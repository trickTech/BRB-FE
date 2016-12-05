<template>
  <footer class="footer-container">
    <button class="red">红榜</button><button class="black">黑榜</button>
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
      padding: 5px 0;
      font-size: 18px;
      color: white;
      background-color: red;
      font-family: 华文琥珀,serif;
    }

    .black {
      color: #000;
    }
  }

</style>
<script>
  export default{}
</script>
