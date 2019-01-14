<template>
    <div class="se-plyClass">
      <div class="ply-left">
        <play-conf v-if="ply" :pla="ply"></play-conf>
      </div>
    </div>
</template>

<script>
    import PlayConf from "./playConf";
    export default {
        name: "sePlyClass",
      components: {PlayConf},
      data(){
        return{
          ply:[]
        }
      },
      created(){
          fetch("http://localhost:3000/back").then(res=>{

            res.json().then(data=>{
              this.ply=data.ply
              console.log(this.ply)
            })
          })
      }
    }
</script>

<style lang="scss" scoped>
  .se-plyClass{
    width: 100%;
    height: 100%;
    background: white;
    box-sizing: border-box;
    padding: 10px;
    float: left;
    .ply-left{
      width: 100%;
      height: 100%;
      /*background: palegreen;*/
    }
  }
</style>
