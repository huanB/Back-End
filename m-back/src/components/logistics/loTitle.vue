<template>
    <div class="tabl-title">
      <div class="tit-order">
        <span class="ord-span">订单号:</span>
        <input type="text">
      </div>
      <div class="tit-order">
        <span class="ord-span">产品名称:</span>
        <input type="text">
      </div>
      <div class="tit-time">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="value7"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </div>
      </div>
      <el-button class="sou" type="primary" icon="el-icon-search">搜索</el-button>
  </div>
</template>

<script>
    export default {
        name: "loTitle",
      data() {
        return {
          pickerOptions2: {
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }]
          },
          value6: '',
          value7: ''
        };
      }
    }
</script>

<style lang="scss" scoped>
  .tabl-title{
    width: 100%;
    height: 80px;
    background: white;
    float: left;
    box-sizing: border-box;
    padding: 24px 0px;
    .tit-order{
      width:26%;
      height: 100%;
      /*background: #ec971f;*/
      float: left;
      margin: 0px 20px;
      .ord-span{
        font-size: 14px;
      }
      input{
        width: calc(100% - 87px);
        height: 30px;
        border: 1px solid #999999;
        margin-left: 10px;
      }
    }
    .tit-time{
      width: 400px;
      height: 100%;
      /*background: red;*/
      float: left;
      display: -webkit-flex;
      justify-content: center;
      align-items: center;

    }
    .sou{
      margin-right: 17px;
      height: 35px;
      padding: 10px 20px;
    }
  }
</style>
