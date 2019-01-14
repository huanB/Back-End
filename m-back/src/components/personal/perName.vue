<template>
  <div class="per-names">
    <ul >
      <li>
        <div class="state">
          <span>用户名:</span>
        </div>
        <div class="state matter">
          <span>伶</span>
        </div>

      </li>
      <li>
        <div class="state">
          <span>真实姓名:</span>
        </div>
        <div class="state matter">
          <span>张小泉</span>
        </div>

      </li>
      <li>
        <div class="state">
          <span>性别:</span>
        </div>
        <div class="state matter">
          <span>男</span>
        </div>

      </li>
      <li>
        <div class="state">
          <span>年龄:</span>
        </div>
        <div class="state matter">
          <span>18</span>
        </div>

      </li>
      <li>
        <div class="state">
          <span>移动电话:</span>
        </div>
        <div class="state matter">
          <span>13571528452</span>
        </div>

      </li>
      <li>
        <div class="state">
          <span>电子邮箱:</span>
        </div>
        <div class="state matter">
          <span>123856qq.com</span>
        </div>

      </li>
      <li>
        <div class="state">
          <span>QQ:</span>
        </div>
        <div class="state matter">
          <span>6565196516</span>
        </div>

      </li>
      <li>
        <div class="state">
          <span>权限:</span>
        </div>
        <div class="state matter">
          <span>普通管理员</span>
        </div>

      </li>
      <li>
        <div class="state">
          <span>注册时间:</span>
        </div>
        <div class="state matter">
          <span>20198562</span>
        </div>

      </li>
      <li>
        <div class="state">
          <span>密码:</span>
        </div>
        <div class="state matter">
          <span>**********</span>
        </div>

      </li>
    </ul>
    <div class="modifier">
      <el-button type="primary">修改密码</el-button>
      <el-button type="info">修改信息</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "perName",
    }
</script>

<style lang="scss" scoped>
  .per-names{
    width: 100%;
    height: 300px;
    /*background: #00bbff;*/
    float: left;
    box-sizing: border-box;
    border: 1px solid #999999;
    ul{
      width: 100%;
      /*height: 200px;*/
      /*background: palegreen;*/
      overflow: hidden;
      li{
        width: 25%;
        height: 60px;
        /*background: teal;*/
        float: left;
        margin-bottom: 10px;
        .state{
          width: 50%;
          float: left;
          height: 100%;
          line-height: 60px;
          font-size: 16px;
          span{
            float: right;
          }
        }
        .matter{
          span{
            float: left;
          }
        }
      }
    }
    .modifier{
      width: 100%;
      height: 90px;
      /*background: yellow;*/
      text-align: center;
      line-height: 90px;
    }
  }
</style>
