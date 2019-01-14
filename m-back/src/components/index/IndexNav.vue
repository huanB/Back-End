<template>
<nav>
  <div class="logo">
      <span>Creative Tim</span>
  </div>
  <div class="user">
    <div class="user-pic">
    <img src="../../../static/img/indexuser.png" alt="">
    </div>
    <div class="Info"><span>Tania Andrew</span></div>
  </div>
  <div id="app1">
    <el-row class="tac">
    <el-col :span="12">
      <el-menu default-active="2" class="el-menu-vertical-demo"
      active-text-color="white" :unique-opened="true" :router="true" background-color="#484848"
      text-color="#fff">
        <el-submenu index="1">
          <template slot="title">
            <i class="iconfont icon-fangzihouse128"></i>
            <span>系统首页</span>
          </template>
            <el-menu-item index="/InDex/IndSection">
              <template slot="title"><span>首页</span></template>
            </el-menu-item>
        </el-submenu>

        <!--此下方是循环 案例在最下方-->
        <el-submenu index="2" >
          <template slot="title" class="mymenu">
            <i class="iconfont icon-diannao"></i>
            <span>商品管理</span>
          </template>
            <el-menu-item index="">
              <template slot="title"><span>商品分类</span></template>
            </el-menu-item>
            <el-menu-item index="">
              <template slot="title"><span>品牌分类</span></template>
            </el-menu-item>
            <el-menu-item index="">
              <template slot="title"><span>添加产品</span></template>
            </el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="iconfont icon-tubiaozhizuo-"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item index="/InDex/Dash">
            <template slot="title">
              <span>
                订单类表
              </span>

            </template>
          </el-menu-item>
          <el-menu-item index="">
            <template slot="title">
              <span>
                订单处理
              </span>

            </template>
          </el-menu-item>
          <el-menu-item index="/InDex/Logistics">
            <template slot="title"><span>物流管理</span></template>
          </el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="iconfont icon-cardb"></i>
            <span>支付管理</span>
          </template>
          <el-menu-item index="">
            <template slot="title"><span>账号管理</span></template>
          </el-menu-item>
          <el-menu-item index="">
            <template slot="title"><span>支付管理</span></template>
          </el-menu-item>
          <el-menu-item index="/InDex/PlyClass">
            <template slot="title"><span>支付配置</span></template>
          </el-menu-item>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <i class="iconfont icon-ziyuan"></i>
            <span>系统管理</span>
          </template>
          <el-menu-item index="">
            <template slot="title"><span>系统信息</span></template>
          </el-menu-item>
          <el-menu-item index="">
            <template slot="title"><span>导航栏设置</span></template>
          </el-menu-item>
          <el-menu-item index="/InDex/Administrator">
            <template slot="title"><span>管理员设置</span></template>
          </el-menu-item>
        </el-submenu>

        <el-submenu index="6">
          <template slot="title">
            <i class="iconfont icon-wenzhang-copy"></i>
            <span>文章管理</span>
          </template>
        </el-submenu>

        <el-submenu index="7">
          <template slot="title">
            <i class="iconfont icon-guanliyuan"></i>
            <span>管理员</span>
          </template>
          <el-menu-item index="/InDex/Limits">
            <template slot="title"><span>权限设置</span></template>
          </el-menu-item>
          <el-menu-item index="/InDex/Administrator">
            <template slot="title"><span>管理员列表</span></template>
          </el-menu-item>
          <el-menu-item index="/InDex/Personal">
            <template slot="title"><span>个人信息</span></template>
          </el-menu-item>
        </el-submenu>

        <el-submenu index="8">
          <template slot="title">
            <i class="iconfont icon-huiyuan21"></i>
            <span>会员管理</span>
          </template>
        </el-submenu>

        <el-submenu index="9">
          <template slot="title">
            <i class="iconfont icon-icon-p_mrpbaobiao"></i>
            <span>报表管理</span>
          </template>
        </el-submenu>

        <el-submenu index="10">
          <template slot="title">
            <i class="iconfont icon-leiguanggaoxiaoshoux"></i>
            <span>广告管理</span>
          </template>
          <el-menu-item index="">
            <template slot="title"><span>广告列表</span></template>
          </el-menu-item>
          <el-menu-item index="">
            <template slot="title"><span>分类管理</span></template>
          </el-menu-item>
          <el-menu-item index="">
            <template slot="title"><span>分类管理</span></template>
          </el-menu-item>

        </el-submenu>

      </el-menu>
    </el-col>
    </el-row>
  </div>
</nav>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    components: {

    },
    methods: {

    }

  }
</script>

<style scoped lang="scss">
#app1{
  height: calc(100% - 240px)
}
.el-menu-item span{
  font-size: 15px;
  color:white;
  margin-left:20px;
}
nav{
    width:260px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
}
nav::-webkit-scrollbar{
    display: none;
}
.el-col-12{
    width:100%;
}
.el-submenu {
  width:90%;
  margin:0 auto;
}
.mymenu{
    display: flex;
}

.el-submenu__title i{
    font-size: 22px;
    color:white;
    font-weight: 300;
}
.el-submenu__title span{
  font-size: 15px;
  color:white;
  margin-left:15px;
}
.logo{
  width:100%;
  height:60px;
  background: #484848;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo span{
    text-transform: uppercase;
    padding: 7px 0px;
    font-size: 16px;
    color: #FFFFFF;
    font-weight: 400;
    line-height: 30px;
    overflow: hidden;
    width:80%;
    text-align: center;
    border-bottom: 1px white solid;
}
.user{
  width:100%;
  display: flex;
  flex-direction: column;
  height:180px;
  align-items: center;
  background: #484848;
  justify-content: center;
}
.user-pic{
  width:78px;
  height:78px;
  border-radius:50%;
  overflow: hidden;
  box-sizing: border-box;
  border:3px #f9b87a solid;
  display: flex;

}
.user-pic img{
  width:72px;
  height:72px;
}
.Info{
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:10px;
}

.Info span{
  color:white;
  font-size: 14px;
} 
</style>













