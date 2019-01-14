<template>
  <div class="tab-table">
    <table>
      <tr class="tr1">
        <!--选择-->
        <th class="th-chack">
          <el-checkbox></el-checkbox>
        </th>
        <!--权限名称-->
        <th class="th-limits">权限名称</th>
        <!--人数-->
        <th class="th-chack th-number">人数</th>
        <!--用户名字-->
        <th class="th-name">用户名字</th>
        <!--描述-->
        <th class="th-name th-describe">描述</th>
        <!--操作-->
        <th class="th-operation">操作</th>
      </tr>
      <tr v-if="ta.person" :key="a" v-for="(t,a) in ta.person">
        <!--选择-->
        <td class="th-chack">
          <el-checkbox></el-checkbox>
        </td>
        <!--权限名称-->
        <td class="th-limits">{{t.names}}</td>
        <!--人数-->
        <td class="th-chack th-number">{{t.perNum}}</td>
        <!--用户名字-->
        <td class="th-name">{{t.userName}}</td>
        <!--描述-->
        <td class="th-name th-describe">{{t.desName}}</td>
        <!--操作-->
        <td class="th-operation">
          <el-button class="bj" type="primary">{{t.stateOne}}</el-button>
          <el-button class="bj" type="danger">{{t.stateTow}}</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "tabTable",
      props:["ta"],
      mounted(){
          // console.log(this.ta.person)
      }
    }
</script>

<style lang="scss" scoped>
  .tab-table{
    width: 100%;
    /*height: 300px;*/
    /*background: red;*/
    table{
      width: 100%;
      /*height: 100%;*/

      .tr1{
        background:#f0f0f0;
        height: 60px;
      }
      tr{
        width: 100%;
        height:40px;

        th{
          /*height: 100%;*/
          border-top: 1px solid #dddddd;
          border-right: 1px solid #dddddd;
        }
        th:last-child{
          border-right: none;
        }
        td{
          text-align: center;
          font-size: 14px;
          box-sizing: border-box;
          border-right: 1px solid #dddddd;
          border-top: 1px solid #dddddd;
        }
        td:last-child{
          border-right:none;
          /*border-top:none;*/
        }
        .th-chack{
          width: 4%;
        }
        .th-limits{
          width: 8%;
        }
        .th-name{
          width: 34%;
        }
        .th-operation{
          width: 16%;
        }
      }
    }
    .bj{
      padding: 12px 15px;
      margin: 5px ;
    }
  }
</style>
