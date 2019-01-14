<template>

  <div class="play-conf">
    <shop-name v-if="pla" :key="l" v-for="(p,l) in pla" :tab="p"></shop-name>
    <!--这个地方后期添加内容-->
    <!--<div class="else-name"></div>-->
  </div>
</template>

<script>
    import ShopName from "./shopName";
    export default {
        name: "playConf",
      props:["pla"],
      components: {ShopName}
    }
</script>

<style lang="scss" scoped>
  .play-conf{
    width: 100%;
    height: 100%;
  }
</style>
