<template>
  <div class="per-record">
    <div class="rec-seek">
      记录搜索:
      <el-input
        class="see-sou"
        placeholder="请选择日期"
        suffix-icon="el-icon-date"
        type="date"
        :picker-options="pickerOptions1"
        v-model="value1">
      </el-input>
      <el-input class="see-sou" v-model="input" placeholder=""></el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <table>
      <tr>
        <th class="th-sort">排序</th>
        <th class="th-matter">内容</th>
        <th class="th-oper-time">操做时间</th>
        <th class="th-remark">备注</th>
      </tr>
      <tr :key="e" v-for="(p,e) in per">
        <td class="th-sort">{{p.sort}}</td>
        <td class="th-matter">{{p.con}}</td>
        <td class="th-oper-time">{{p.recTime}}</td>
        <td class="th-remark">{{p.rema}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "perRecord",
      props:["per"],
      data() {
        return {
          pickerOptions1: {
            disabledDate(time) {
              return time.getTime() > Date.now();
            },
            shortcuts: [{
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            }, {
              text: '昨天',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              text: '一周前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }]
          },
          value1: '',
          input:''
        };
      }
    }
</script>

<style lang="scss" scoped>
  .per-record{
    width: 100%;
    /*height: 200px;*/
    /*background: pink;*/
    float: left;
    margin-top: 15px;
    box-sizing: border-box;
    border: 1px solid #999999;
    .rec-seek{
      width: 100%;
      height: 70px;
      background: #dddddd;
      line-height: 70px;
      box-sizing: border-box;
      padding-left: 20px;
      .see-sou{
        width: 250px;
      }
    }
    table{
      width: 100%;
      /*height: 200px;*/
      tr{
        width: 100%;
        height: 60px;
        /*background: yellow;*/
        th{
          box-sizing: border-box;
          border-top: 1px solid #999999;
          border-right: 1px solid #999999;
        }
        th:last-child{
          border-right: none;
        }
        td{
          box-sizing: border-box;
          border-top: 1px solid #999999;
          border-right: 1px solid #999999;
          text-align: center;
        }
        td:last-child{
          border-right: none;

        }
        .th-sort{
          width: 5%;
        }
        .th-matter{
          width: 60%;
        }
        .th-oper-time{
          width: 15%;
        }
        .th-remark{
          width: 20%;
        }
      }
    }
  }
</style>
