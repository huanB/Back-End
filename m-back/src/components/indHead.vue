<template>
  <div class="header">
    <div class="he-left">
      <div class="quit">
        <span>退出系统</span>
      </div>
      <div class="quit reg">
        <span>个人信息</span>
      </div>
    </div>
    <div class="he-right">
      <div class="left">
        i标签
      </div>
      <head-flex></head-flex>
      <div class="right">
        <div class="rig">
          <!--//小图标-->
        </div>
        <div class="center">
          <a href="javascript:;">
            <span>页面操作</span>
          </a>
        </div>
        <div class="rig">
          <!--//小图标-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import HeadFlex from "./headFlex";
  export default {
    name: 'indhead',
    components: {HeadFlex},
  }
</script>
<style lang="scss" scoped>
  $px:100% 100px 300px 50% 85.3% ;
  $color:pink blue yellow;
  .header{
    width: nth($px,1);
    height: nth($px,2);
    background:nth($color,1);
    display: flex;
    float: left;
    .he-left{
      width: nth($px,3);
      height: nth($px,2);
      background: nth($color,2);
      .quit{
        width: nth($px,4);
        height: nth($px,2);
        background: #4cd964;
        float: left;
        span{
          display: block;
          font-size: 20px;
          color: white;
          line-height: nth($px,2);
        }
      }
      .reg{
        background: #213a80;
      }
    }
    .he-right {
      flex: 1;
      height: nth($px,2);
      background-color: nth($color,3);
      display: flex;
      .left{
        width: 60px;
        height: nth($px, 2);
        background: #000;
      }
      //中间部分
      .right{
        width: 230px;
        height: nth($px,2);
        background: #8a6de9;
        display: flex;
        .rig{
          width: 60px;
          height: nth($px,2);
          background: #ec971f;
        }
        .center{
          flex: 1;
          background: yellow;
          a{
            display: block;
            width: 100%;
            height: 100%;
            span{
              display: block;
              font-size: 18px;
              color: white;
              line-height: nth($px,2);
            }
          }
        }
      }
    }
  }

</style>


