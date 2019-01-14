<template>
    <div class="se-limits">
      <lim-table v-if="lim[0]" :tab="lim[0]"></lim-table>
    </div>
</template>

<script>
    import LimTable from "./limTable";
    export default {
        name: "seLimits",
      data(){
        return{
          lim:[]
        }
      },
      components: {LimTable},
      created(){
          fetch("http://localhost:3000/back").then(res=>{
            res.json().then(data=>{
              this.lim=data.setting
              console.log(this.lim)
            })
          })
      }
    }
</script>

<style lang="scss" scoped>
  .se-limits{
    width: 100%;
    height: 100%;
    background: white;
    box-sizing: border-box;
    padding: 10px;
    float: left;
  }
</style>


