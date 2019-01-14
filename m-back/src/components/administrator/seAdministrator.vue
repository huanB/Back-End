<template>
  <div class="se-administrator">
    <admin-table v-if="admin[0]" :admi="admin[0]"></admin-table>
  </div>
</template>

<script>
    import AdminTable from "./adminTable";
    export default {
        name: "seAdministrator",
      data(){
         return{
           admin:[]
         }
      },
      components: {AdminTable},
      created(){
          fetch("http://localhost:3000/back").then(res=>{
            res.json().then(data=>{
              this.admin=data.staff
              console.log(this.admin)
            })
          })
      }
    }
</script>

<style scoped>
  .se-administrator{
    width:100%;
    height: 100%;
    background: white;
    box-sizing: border-box;
    padding: 10px;
    float: left;
  }
</style>
