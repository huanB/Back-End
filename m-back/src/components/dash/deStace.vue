<template>
  <div class="de-stace">
    <ul>
      <li :key="o" v-for="(z,o) in zong1" style="background: #ff5151">
        <div class="sum_moneys">
          <span>{{z.tit}}</span>
          <span class="sum_span">
            <em>￥</em>
            {{z.lot}}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "deStace",
      props:["zong1"],
      mounted(){
          console.log(this.zong1)
      }
    }
</script>

<style lang="scss" scoped>
  .de-stace{
    width: 100%;
    height: 120px;
    /*background: pink;*/
    /*padding: 20px;*/
    box-sizing: border-box;
    ul{
      width: 100%;
      height: 100%;
      li{
        width: calc(25% - 20px);
        height: 100%;
        margin-right: 20px;
        /*background: red;*/
        float: left;
        padding: 20px;
        box-sizing: border-box;
        .sum_moneys{
          width: 100%;
          height: 100%;
          float: left;
          span{
            font-size: 14px;
            color: white;
            float: left;
            line-height: 100px;
            /*display: block;*/
            em{
              font-size: 20px;
              /*display: block;*/
              float: left;
              line-height: 100px;
            }
          }
          .sum_span{
            font-size: 35px;
            font-weight: 700;
            float: left;
            line-height: 80px;
          }
        }
      }
      li:last-child{
        margin-right: 0px;
        width: 25%;
      }
    }
  }
</style>
