<template>
  <div class="de-order">
    <ul>
      <li :key="o" v-for="(z,o) in zong2">
        <a href="javascript:;">
          <span>{{z.tit}}</span>
          <p>({{z.orde}})</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import $ from "jquery"
    export default {
        name: "deOrder",
      props:["zong2"],
      mounted(){

      },
      mounted:function(){
          console.log($)
      }
    }
</script>

<style lang="scss" scoped>
  .de-order{
    width: 100%;
    height: 42px;
    /*background: firebrick;*/
    margin: 20px 0px;
    ul{
      width: 100%;
      height: 100%;
      li{
        padding: 10px;
        background: palegreen;
        float: left;
        box-sizing: border-box;
        border-radius: 10px;
        margin-right: 15px;
        a{
          display: block;
          width: 100%;
          height: 100%;
          color: white;
          span{
            float: left;
          }
          p{
            float: left;
          }
        }
      }
    }
  }
</style>
