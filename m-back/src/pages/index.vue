<template>
  <div class="box">
    <Index-Nav></Index-Nav>
    <main>
      <Index-Counter></Index-Counter>
    </main>
  </div>
</template>

<script>
    import FontCss from "../../static/css/iconfont.css"
    import PrulisCss from "../../static/css/prulis.css"
    import  IndexNav from '../components/index/IndexNav.vue'
    import  IndexCounter from '../components/index/IndexCounter.vue'
    export default {
        name: "index",
      components: { PrulisCss,FontCss,IndexNav,IndexCounter},


    }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
    display: flex;
  }
  main{
    width: calc(100% - 260px);
    position: relative;
    overflow: auto;
    flex: 1;
  }
</style>
