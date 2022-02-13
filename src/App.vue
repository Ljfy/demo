<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <router-view/>
  </div>
</template>

<script>
export default{
  // mounted: function () {
  //   // 页面开始加载时修改font-size
  //   var html = document.getElementsByTagName("html")[0];
  //   var oWidth =
  //     document.body.clientWidth || document.documentElement.clientWidth;
  //   // 这里的1920是指设计图的大小,自己根据实际情况改变
  //   html.style.fontSize = (oWidth / 1920) * 100 + "px";
  //   console.log("rem:", html.style.fontSize);
  // }
}
</script>
<style lang="scss">
html,body{
  background: #505253;
}
@media screen and (max-width: 3840) {
  body,
  html {
    font-size: 1rem;
  }
}
// @media screen and (max-width: 1920) {
//   body,
//   html {
//     font-size: 16px;
//   }
// }

</style>
