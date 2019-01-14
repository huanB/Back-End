<template>
  <div class="details">
    <de-stace v-if="mi[0].sum" :zong1="mi[0].sum"></de-stace>
    <de-order v-if="mi[0].pos" :zong2="mi[0].pos"></de-order>
    <de-goods v-if="mi[0].tab" :zong3="mi[0].tab"></de-goods>
  </div>
</template>

<script>
    import DeStace from "./deStace";
    import DeOrder from "./deOrder";
    import DeGoods from "./deGoods";
    export default {
        name: "seDetails",
      components: {DeGoods, DeOrder, DeStace},
      data(){
        return{
          mi:[
            {sum:""}
          ]
        }
      },
      created(){
        fetch("http://localhost:3000/back").then(res=>{
          res.json().then(data=>{
            this.mi=data.order
            // console.log(this.mi)
          })
        })
      },
    }
</script>

<style lang="scss" scoped>
  .details {
    width:100%;
    background: white;
    box-sizing: border-box;
    padding: 10px;
    float: left;
  }
</style>
