<template>
  <div class="lim-table">
    <div class="tab-title">
      <tab-top></tab-top>
      <!--表格-->
      <tab-table :ta="tab"></tab-table>
    </div>

  </div>
</template>

<script>
    import TabTop from "./tabTop";
    import TabTable from "./tabTable";
    export default {
        name: "limTable",
      props:["tab"],
      components: {TabTable, TabTop}
    }
</script>

<style lang="scss" scoped>
  .lim-table{
    width: 100%;
    height: 100%;
    background: white;
    .tab-title{
      width: 100%;
      /*background: #e4b9c0;*/
      box-sizing: border-box;
      border: 1px solid #dddddd;
    }
  }
</style>
