<template>
  <div id="app">
    <br-header></br-header>
    <router-view></router-view>
    <br-footer></br-footer>
  </div>
</template>

<style>
  #app {
  /*background: #58a;*/
    min-height: 100vh;
    /*background: linear-gradient(-45deg, transparent 185px, #58a 0),*/
    /*linear-gradient(45deg, transparent 15px, #655 0);*/
    background: repeating-linear-gradient(-45deg, #acadad, #acadad 20%, #959696 0, #959696 80%);}
</style>

<script>
  import BrHeader from './components/Header.vue'
  import BrFooter from './components/Footer'

  export default {
    name: 'app',
    components: {
      BrHeader,
      BrFooter
    }
  }
</script>

<style>
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: " ";
}
.clearfix:after {
  clear: both;
}

</style>
