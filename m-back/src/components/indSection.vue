<template>
    <div class="section">
      <!--<se-left></se-left>-->
      <router-view></router-view>
    </div>
</template>

<script>
    // import SeLeft from "./seLeft";
    // import SeDetails from "./dash/seDetails";
    export default {
        name: "indSection",
      components: { }
    //  SeLeft,SeDetails,
    }
</script>

<style lang="scss" scoped>
  .section{
    width: 100%;
    height: 100%;
    background: white;
    float: left;
    /*display: flex;*/
  }
</style>
