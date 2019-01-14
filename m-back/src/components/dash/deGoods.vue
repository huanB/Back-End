<template>
  <div class="de-goods">
    <div class="go-delete">
      <a class="dele" href="javascript:;">删除</a>
      <div class="dele-order">
        <div class="ord-inq">
          <span>订单号:</span>
          <input type="text">
        </div>
        <div class="ord-inq">
          <span>下单时间:</span>
          <input class="inp" type="text">
          <i class="iconfont icon-rili"></i>
        </div>
        <a class="sou" href="javascript:;">
          <i class="iconfont icon-sousuo"></i>
          搜索
        </a>
      </div>
    </div>
    <table>
      <thead class="stact">
        <tr>
          <!--选择-->
          <th class="stac-th sta-chack">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>
            <div style="margin: 15px 0;"></div>
            <!--<input type="checkbox">-->
          </th>
          <!--排序-->
          <th class="stac-th sta-sort">排序</th>
          <!--订单编号-->
          <th class="stac-th sta-order">订单编号</th>
          <!--下单时间-->
          <th class="stac-th sta-time">下单时间</th>
          <!--消费金额-->
          <th class="stac-th sta-money">消费金额</th>
          <!--数量-->
          <th class="stac-th sta-sort num">数量</th>
          <!--状态-->
          <th class="stac-th sta-state">状态</th>
          <!--发货时间-->
          <th class="stac-th sta-time goo">发货时间</th>
          <!--备注-->
          <th class="stac-th sta-rema">备注</th>
          <!--操作-->
          <th class="stac-th sta-opera">操作</th>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr v-if="zong3[0].tabForm" :key="o" v-for="(z,o) in zong3[0].tabForm">
          <!--选择-->
          <td class="stac-th sta-chack">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>
            <div style="margin: 15px 0;"></div>
            <!--<input type="checkbox">-->
          </td>
          <!--排序-->
          <td class="stac-th sta-sort">{{z.sort}}</td>
          <!--订单编号-->
          <td class="stac-th sta-order">{{z.serial}}</td>
          <!--下单时间-->
          <td class="stac-th sta-time">{{z.orderTime}}</td>
          <!--消费金额-->
          <td class="stac-th sta-money">{{z.money}}</td>
          <!--数量-->
          <td class="stac-th sta-sort num">{{z.num}}</td>
          <!--状态-->
          <td class="stac-th sta-state">{{z.stateTow}}</td>
          <!--发货时间-->
          <td class="stac-th sta-time goo">{{z.shipTime}}</td>
          <!--备注-->
          <td class="stac-th sta-rema">{{z.remarkOne}}</td>
          <!---->
          <td class="stac-th sta-opera">
            <el-row>
              <el-button type="danger">{{z.macOne}}</el-button>
              <el-button class="ck" type="info">{{z.macTow}}</el-button>
            </el-row>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import $ from "jquery"
  const cityOptions = [];
    export default {
        name: "deGoods",
      props:["zong3"],
      data() {
        return {
          checkAll: true,
          checkedCities: ['上海', '北京'],
          cities: cityOptions,
          isIndeterminate: true
        };
      },
      methods: {
        handleCheckAllChange(val) {
          this.checkedCities = val ? cityOptions : [];
          this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
          let checkedCount = value.length;
          this.checkAll = checkedCount === this.cities.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },


      },
      mounted(){
          $(".sta-opera").click(()=> {
            $(".tbody").children().css({
              "display":"none"
            })
          })
        console.log(this.zong3)
      }

    }
</script>

<style lang="scss" scoped>
  $px:100%;
  .de-goods{
    width: 100%;
    /*height: 300px;*/
    /*background: aqua;*/
    border:1px solid #dddddd;
    .go-delete{
      width: 100%;
      height: 80px;
      /*background: #e4b9c0;*/
      padding: 20px 10px;
      box-sizing: border-box;
      .dele{
        float: left;
        /*display: block;*/
        padding: 10px 20px;
        font-size: 12px;
        color: white;
        background: saddlebrown;
        border-radius: 5px;

      }
      .dele-order{
        /*width: 300px;*/
        height: 100%;
        /*background: #795da3;*/
        float: right;
        padding: 0px 10px;
        .ord-inq{
          /*width: 415px;*/
          height: 100%;
          /*background: beige;*/
          float: left;
          margin-right: 20px;
          margin-left: 80px;
          position: relative;
          span{
            font-size: 16px;
            line-height: 40px;
            margin-right: 30px;
            float: left;
          }
          input{
            float: left;
            width: 300px;
            height: 100%;
            box-sizing: border-box;
            border: 1px solid black;
          }
          .inp{
            width: 200px;
          }
          .iconfont{
            position: absolute;
            display: block;
            font-size: 20px;
            color: #999999;
            top: 10px;
            left: 270px;
          }
        }
        .sou{
          float: left;
          /*display: block;*/
          width: 100px;
          height: 100%;
          background: #438eb9;
          border-radius: 5px;
          font-size: 18px;
          color: white;
          text-align: center;
          line-height: 40px;
        }
      }
    }
    table{
      width: 100%;
      height: 10px;
      /*background: yellow;*/
      thead {
        height: 120px;
        /*border: none;*/
      }
      tr {
        width: 100%;
        height: 60px;
        /*border: none;*/
        /*background: chocolate;*/
        /*border-top: 1px solid red;*/
        th {
          box-sizing: border-box;
          font-size: 14px;
          border-right: 1px solid #dddddd;
          border-top: 1px solid #dddddd;
          /*border: none;*/
        }
        th:last-child{
          border-right: none;
        }
        td{
          font-size:13px;
          box-sizing: border-box;
          border-right: 1px solid #dddddd;
          border-top: 1px solid #dddddd;
          /*border: none;*/
        }
        td:last-child{
          border-right: none;
        }
        /*选择*/
        .stac-th {
          display: -webkit-flex;
          align-items: center;
          justify-content: center;

          float: left;
        }
        .sta-chack {
          width: 4%;
          height: nth($px, 1);
          /*background: #e4b9c0;*/
        }
        /*排序  /  数量*/
        .sta-sort {
          width: 3%;
          height: nth($px, 1);
          /*background: #8a6de9;*/
          box-sizing: border-box;
          padding: 12px;
          /*font-size: 14px;*/
        }
        /*订单编号*/
        .sta-order {
          width: 14%;
          height: nth($px, 1);
          /*background: black;*/
        }
        /*下单时间  /   发货时间*/
        .sta-time {
          width: 10%;
          height: 100%;
          /*background: #ec971f;*/
          box-sizing: border-box;
          padding: 0px 5px;
          text-align: center;
        }
        /*消费金额*/
        .sta-money {
          width: 5%;
          height: nth($px, 1);
          /*background: red;*/
        }
        /*状态*/
        .sta-state {
          width: 10%;
          height: nth($px, 1);
          /*background: red;*/
        }
        /*备注*/
        .sta-rema {
          width: 26%;
          height: nth($px, 1);
          /*background: #00bbff;*/
        }
        /*操作*/
        .sta-opera {
          width: 15%;
          height: nth($px, 1);
          /*background: #8a6de9;*/
        }
      }
    }
  }
  .ck{
    background: #00bbff;
  }
</style>
