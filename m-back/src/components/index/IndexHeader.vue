<template>
  <div class="head">
    <header>
      <div class="header-left">
        <img src="../../../static/img/ih1.png" class="tag">
        <span>Dashboard PRO</span>
        <div class="input">
          <img src="../../../static/img/ih2.png">
          <input type="text" placeholder="Search...">
        </div>
      </div>
      <div class="header-right">
        <ul>
          <li><img src="../../../static/img/ih3.png" class="one"><span class="Stats">Stats</span></li>
          <!--<router-link tag="li" to="">注册</router-link>-->
          <li class="three">
            <el-dropdown trigger="click">
              <i class="iconfont">&#xe645;</i>
              <span>5</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Notification 1</el-dropdown-item>
                <el-dropdown-item>Notification 2</el-dropdown-item>
                <el-dropdown-item>Notification 3</el-dropdown-item>
                <el-dropdown-item disabled>Notification 4</el-dropdown-item>
                <el-dropdown-item divided>Another notification</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown></li>
          <router-link class="li" tag="li" to="">
            <i class="iconfont icon-menu"></i>
            <div class="li-div">
                <router-link tag="div" to="/Reg" class="div-sign">注册</router-link>
                <div class="div-sign">退出</div>
            </div>
          </router-link>
        </ul>

      </div>

    </header>
    <div class="navOne">
      <ul>
        <li>订单类列表</li>
        <li>订单处理</li>
        <li>物流管理</li>
        <li>支付配置</li>
        <li>权限设置</li>
        <li>管理员列表</li>
        <li>个人信息</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import $ from "jquery"
export default {
 data() {
  return {

  }
 },
  mounted(){
   $(".li").click(function(){
     $(".li-div").fadeToggle()
   })
  },
 methods: {
     show(){

     }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
  .li-div{
    width: 100%;
    height: 80px;
    background: white;
    position: absolute;
    display: none;
    top: 39px;
    .div-sign{
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }
  .head{
    width: 100%;
    /*height: 110px;*/
    background: white;
  }
  header{
      width:100%;
      height:60px;
      align-items: center;
      display: flex;
  }
  .tag{
      width:38px;
      height:38px;
      border-radius: 50%;
      margin-left:20px;
  }
  .header-left{
      width:50%;
      height:60px;
      display: flex;
      align-items: center;
  }
  .header-left span{
      color:#777777;
      margin-left:20px;
      font-size: 18px;
  }
  .input{
      width:50px;
      height:100%;
      display: flex;
      align-items: center;
  }
  .input input::-webkit-input-placeholder {
      color:#c3c5c9;
      font-size: 16px;
  }
  .input img{
      width:20px;
      height:20px;
      margin-left:20px;
  }
  .input input{
      border:none;
      margin-left:5px;
  }
  .header-right{
      width:50%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height:60px;
  }
  .header-right ul{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .header-right ul li{
      width:70px;

      display: flex;
      justify-content: center;
      align-items: center;
  }
  .header-right ul :nth-child(3){
      position: relative;
  }
  .Stats{
      font-size: 15px;
      color:#9a9a9a;
  }
  .two{
      width:20px;
      height:20px;
  }
  .one{
      width:22px;
      height:18px;
      margin-right:5px;
  }
  .three i{
      font-size: 26px;
      color:#9a9a9a;
      font-weight: 600;
  }
  .three i:hover {
      color:#23ccef;
  }
  .three span{
      position: absolute;
      background: #fb404b;
      width:16px;
      height:16px;
      border-radius: 50%;
      text-align: center;
      vertical-align: middle;
      font-size: 13px;
      color:white;
      top: -2px;
      left: 10px;
  }
  .four{
      width:22px;
      height:16px;
  }
  .navOne{
    width: 100%;
    height: 50px;
    background: black;
    display: none;
    ul{
      width: 100%;
      height: 100%;
      li{
        width: 100px;
        height: 100%;
        background: white;
        box-sizing: border-box;
        /*border: 1px solid #dddddd;*/
        border-top: 1px solid #999999;
        border-right: 1px solid #999999;
        border-bottom: 1px solid #999999;
        line-height: 50px;
        text-align: center;
        float: left;
        font-size: 14px;
      }
      li:first-child{
        border-left: 1px solid #999999;
      }
      li:last-child{
        border-right: none;
      }
    }
  }
</style>
