<template>
    <div class="se-logistics">
      <div class="log-table">
        <lo-title></lo-title>
        <lo-table v-if="logis" :log="logis"></lo-table>
      </div>
    </div>
</template>

<script>
    import LoTitle from "./loTitle";
    import LoTable from "./loTable";
    export default {
        name: "seLogistics",
      components: {LoTable, LoTitle},
      data(){
          return{
            logis:[

            ]
          }
      },
      created(){
          fetch("http://localhost:3000/back").then(res=>{
            res.json().then(data=>{
              this.logis=data.logistics
              console.log(this.logis)
            })
        })
      }
    }
</script>

<style lang="scss" scoped>
  .se-logistics{
    width:100%;
    background: white;
    box-sizing: border-box;
    padding: 10px;
    float: left;
    .log-table{
      width: 100%;
      /*height: 300px;*/
      /*background: #8a6de9;*/
      float: left;
      border: 1px solid #999999;
    }
  }
</style>
