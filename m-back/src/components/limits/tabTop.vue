<template>
  <div class="tab-top">
    <div class="top-delete">
      <el-button class="sc" type="primary" icon="el-icon-delete">删除</el-button>
      <el-button class="tj" type="primary" icon="el-icon-edit">添加权限</el-button>
    </div>
    <div class="top-search">
      <el-input placeholder="请输入内容" class="input-with-select sea">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>


<script>
    export default {
        name: "tabTop"
    }
</script>

<style lang="scss" scoped>
  .tab-top{
    width: 100%;
    height: 80px;
    /*background: white;*/
    .top-delete{
      width: 50%;
      height: 100%;
      float: left;
      /*background: #8a6de9;*/
      line-height: 80px;
      padding-left: 20px;
      box-sizing: border-box;
    }
    .top-search{
      width: 50%;
      float: left;
      height: 100%;
      /*background: #00bbff;*/
      box-sizing: border-box;
      padding-right: 20px;
    }
  }
  .sc{
    background: #d15b47;
    /*border: none;*/
  }
  .tj{
    height: 48px;
  }
  .sea{
    width: 350px;
    float: right;
    margin-top: 20px;
  }
</style>
