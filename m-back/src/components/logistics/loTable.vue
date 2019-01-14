<template>
  <div>
    <div :key="o" v-for="(l,o) in log" class="tab">
      <!--以上需循环-->
      <div class="table">
        <ul>
          <li :key="a" v-for="(t,a) in l.tab">
            <span>{{t.title}}</span>
            <span>{{t.code}}</span>
          </li>
        </ul>
      </div>
      <!--以下是商品内容-->
      <div class="tab-pru">
        <table>
          <tr :key="s" v-for="(a,s) in l.ask">
            <td  class="td">
              <div class="td-div" :key="r" v-for="(p,r) in a.pru">
                <div class="div">{{p.title}}</div>
                <em>{{p.num}}</em>
                <em>{{p.unit}}</em>
              </div>

            </td>
            <td>
              <span>{{a.tatol}}</span>
            </td>
            <td>
              <span>{{a.stateTow}}</span>
            </td>
            <td class="td-last">
              <el-row>
                <el-button type="info">{{a.macOne}}</el-button>
                <el-button type="success">{{a.macTow}}</el-button>

              </el-row>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>


</template>

<script>
    export default {
        name: "loTable",
      props:["log"]
    }
</script>

<style lang="scss" scoped>
  .tab{
    width: 100%;
    /*height: 500px;*/
    /*background: red;*/
    float: left;
    .table{
      width: 100%;
      height: 50px;
      background: #999999;
      ul{
        width: 100%;
        height: 100%;
        li{
          width: 25%;
          height: 100%;
          /*background: #ec971f;*/
          text-align: center;
          float: left;
          display: flex;
          justify-content: center;
          span{
            float: left;
            line-height: 50px;
            font-size: 14px;
          }
        }
      }
    }
    .tab-pru{
      width: 100%;
      /*background: #f0ad4e;*/
      table{
        width: 100%;
        height: 100%;
        /*background: #e4b9c0;*/

        border-collapse: separate;
        border-spacing: 0px;
        tr{
          width: 100%;
          display: table;

          /*background: #00bbff;*/

          .td{
            width: 65%;
            height: 100%;
            /*background: #8a6de9;*/
            box-sizing: border-box;
            padding: 0px 10px;
            .td-div{
              width: 100%;
              height: 40px;
              box-sizing: border-box;
              border-bottom: 1px solid #dddddd;
              .div{
                font-size: 14px;
                /*padding: 0px 10%;*/
                float: left;
                width: 70%;
                line-height: 40px;
              }
              em{
                font-size: 14px;
                /*padding: 0px 8%;*/
                float: left;
                width: 15%;
                line-height: 40px;
              }
            }
            .td-div:last-child{
              border-bottom: none;
            }
          }
          td{
            width: 10%;
            height: 100%;
            /*background: #e4b9c0;*/
            text-align: center;
            border-right:1px solid #dddddd;
          }

          td:last-child{
            width: 15%;
            border-right: none;
          }
        }
      }
    }
  }

</style>
