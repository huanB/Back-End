<template>
  <div class="tab-table">
    <table>
      <tr class="tr1">
        <!--选择-->
        <th class="th-chack">
          <el-checkbox></el-checkbox>
        </th>
        <!--登录名-->
        <th class="th-log">登录名</th>
        <!--手机-->
        <th class="th-phone">手机</th>
        <!--邮箱-->
        <th class="th-e-mail">邮箱</th>
        <!--角色-->
        <th class="th-name">角色</th>
        <!--加入时间-->
        <th class="th-times">加入时间</th>
        <!--状态-->
        <th class="th-state">状态</th>
        <!--操作-->
        <th class="th-operation">操作</th>
      </tr>
      <tr :key="d" v-for="(a,d) in adm.person">
        <!--选择-->
        <td class="th-chack">
          <el-checkbox></el-checkbox>
        </td>
        <!--登录名-->
        <td class="th-log">{{a.log}}</td>
        <!--手机-->
        <td class="th-phone">{{a.mobile}}</td>
        <!--邮箱-->
        <td class="th-e-mail">{{a.mail}}</td>
        <!--角色-->
        <td class="th-name">{{a.role}}</td>
        <!--加入时间-->
        <td class="th-times">{{a.addTime}}</td>
        <!--状态-->
        <td class="th-state">
          <el-button class="el" disabled>{{a.state}}</el-button>
        </td>
        <!--操作-->
        <td class="th-operation">
          <el-row>
            <el-button class="el" type="warning">{{a.operOne}}</el-button>
            <el-button class="el" type="primary">{{a.operTow}}</el-button>
            <el-button class="el" type="danger">{{a.operThree}}</el-button>
            <el-button class="el" type="info">{{a.operForm}}</el-button>
          </el-row>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "adminTabTable",
      props:["adm"]
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
      }
      tr{
        width: 100%;
        height:60px;
        th{
          box-sizing: border-box;
          border-top: 1px solid #dddddd;
          border-right: 1px solid #dddddd;
        }
        td{
          text-align: center;
          box-sizing: border-box;
          border-right: 1px solid #dddddd;
          border-top: 1px solid #dddddd;
          font-size: 14px;
        }
        td:last-child{
          border-right:none;
        }
        th:last-child{
          border-right: none;
        }
        /*选择*/
        .th-chack{
          width: 5%;
        }
        /*登录名*/
        .th-log{
          width: 12%;
        }
        /*手机*/
        .th-phone{
          width: 11%;
        }
        /*邮箱*/
        .th-e-mail{
          width: 12%;
        }
        /*名字*/
        .th-name{
          width: 10%;
        }
        /*加入时间*/
        .th-times{
          width: 18%;
        }
        /*状态*/
        .th-state{
          width: 7%;
        }
        /*操做*/
        .th-operation{
          width: 25%;
        }
      }
      /*tr:last-child td{*/
        /*border-top:none;*/
      /*}*/
    }
    /*.bj{*/
      /*padding: 20px 15px;*/
      /*margin: 5px ;*/
    /*}*/
    .el{
      padding: 12px 10px;
    }
  }
</style>
