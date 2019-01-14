<template>
  <div class="flex">
    <ul >
      <li>
        <a href="javascript:;">首页</a>
      </li>
      <li>
        <a href="javascript:;">首页</a>
      </li>
      <li>
        <a href="javascript:;">首页</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "headFlex"
    }
</script>

<style lang="scss" scoped>
  $px:100% 100px 300px 50% 85.3% ;
  $color:pink blue yellow;
  .flex{
    flex: 1;
    background: #4cd964;
    ul{
      width: 100%;
      height: 100%;
      li{
        width: 100px;
        height: 100%;
        background: nth($color,1);
        float: left;
        a{
          display: block;
          width: 100%;
          height: 100%;
          font-size: 20px;
          line-height: nth($px,2);
          background: #795da3;
        }
      }
    }
  }
</style>
