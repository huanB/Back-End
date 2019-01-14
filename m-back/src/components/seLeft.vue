<template>
  <div class="se-left">
    <router-link tag="p" to="/Dash">订单类列表</router-link>
    <br/>
    <router-link tag="p" to="/Dispose">订单处理</router-link>
    <br/>
    <router-link tag="p" to="/Logistics">物流管理</router-link>
    <br/>
    <router-link tag="p" to="">账号管理</router-link>
    <br/>
    <router-link tag="p" to="">支付管理</router-link>
    <br/>
    <router-link tag="p" to="/PlyClass">支付配置</router-link>
    <br/>
    <router-link tag="p" to="">系统信息</router-link>
    <br/>
    <router-link tag="p" to="">导航栏设置</router-link>
    <br/>
    <router-link tag="p" to="">管理员设置</router-link>
    <br/>
    <router-link tag="p" to="/Limits">权限设置</router-link>
    <br/>
    <router-link tag="p" to="/Administrator">管理员列表</router-link>
    <br/>
    <router-link tag="p" to="/Personal">个人信息</router-link>
  </div>
</template>

<script>
    export default {
        name: "seLeft"
    }
</script>

<style lang="scss" scoped>
  .se-left{
    width: 260px;
    height: 100%;
    background: yellow;
    float: left;
  }

</style>
