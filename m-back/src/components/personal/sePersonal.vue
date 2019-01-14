<template>
    <div class="se-personal">
      <per-name></per-name>
      <per-record v-if="per[0].record" :per="per[0].record"></per-record>
    </div>
</template>

<script>
    import PerName from "./perName";
    import PerRecord from "./perRecord";
    export default {
        name: "sePersonal",
      components: {PerRecord, PerName},
      data(){
        return{
          per:[
            {num:""}
          ]
        }
      },
      created(){
          fetch("http://localhost:3000/back").then(res=>{
            res.json().then(data=>{
              this.per=data.personal
              console.log(this.per)
            })
          })
      }
    }
</script>

<style scoped>
  .se-personal{
    width:100%;
    height: 100%;
    /*background: red;*/
    box-sizing: border-box;
    padding: 10px;
    float: left;
  }
</style>
