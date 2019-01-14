<template>
  <div class="shop-name">
    <div class="name-top">
      <span>{{tab.payMess}}</span>
    </div>
    <ul v-if="tab.mess">
      <li>
        <div class="li-name">支付名称</div>
        <div class="li-name li-state">状态</div>
        <div class="li-name li-describe">描述</div>
      </li>
      <li :key="a" v-for="(t,a) in tab.mess" >
        <div class="li-name">{{t.name}}</div>
        <div class="li-name li-state">
          <el-radio v-model="t.stateOne" label="1">启动</el-radio>
          <el-radio v-model="t.stateTow" label="1">关闭</el-radio>
        </div>
        <div class="li-name li-describe">{{t.desc}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "shopName",
      props:["tab"],
      data() {
        return {
          // visible2: false,
          // radio: '1',
          // radio2: '2'
        };
      }
    }
</script>

<style lang="scss" scoped>
  .shop-name{
    width: 100%;
    /*height: 300px;*/
    /*background: chocolate;*/
    box-sizing: border-box;
    border: 1px solid #999999;
    margin-bottom: 20px;
    .name-top{
      width: 100%;
      height:60px;
      background: #dbdbdb;
      box-sizing: border-box;
      padding-left: 40px;
      span{
        line-height: 60px;
        font-size: 18px;
      }
    }
    ul{
      width: 100%;
      /*height: 200px;*/
      /*background: #00bbff;*/
      li{
        width: 100%;
        height: 50px;
        /*background: #2ac845;*/
        border-top: 1px solid #999999;
        .li-name{
          width: 200px;
          height: 100%;
          /*background: #f0ad4e;*/
          float: left;
          text-align: center;
          line-height: 50px;
          box-sizing: border-box;
          border-right: 1px solid #999999;
          font-size: 13px;
        }
        .li-state{
          /*background: #8a6de9;*/
        }
        .li-describe{
          width: calc(100% - 400px);
          /*background: yellow;*/
          padding:0px  100px;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          border-right: none;
        }
      }
    }
  }
</style>
