<template>
  <div class="admin-table">
    <div class="tab-title">
      <tab-top></tab-top>
      <admin-tab-table :adm="admi"></admin-tab-table>
    </div>

  </div>
</template>

<script>
    import TabTop from "./adminTabTop";
    import AdminTabTable from "./adminTabTable";
    export default {
        name: "adminTable",
      props:["admi"],
      components: {AdminTabTable, TabTop}
    }
</script>

<style lang="scss" scoped>
  .admin-table{
    width: 100%;
    height: 100%;
    /*background: white;*/
    .tab-title{
      width: 100%;
      /*background: #e4b9c0;*/
      box-sizing: border-box;
      border: 1px solid #dddddd;
    }
  }
</style>
