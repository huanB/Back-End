<template>
  <div class="tab-top">
    <div class="top-delete">
      <el-button class="sc" type="primary" icon="el-icon-delete">删除</el-button>
      <el-button class="tj" type="primary" icon="el-icon-edit">添加权限</el-button>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
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
    name: "adminTabTop",
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
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
