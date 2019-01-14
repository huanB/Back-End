<template>
 <div class="counter">
     <Index-Header></Index-Header>
      <div class="fle">
        <router-view></router-view>
      </div>
     <Index-Footer></Index-Footer>
 </div>
</template>

<script>
import  IndexHeader from './IndexHeader.vue'
import  IndexFooter from './IndexFooter.vue'
export default {
 data() {
  return {

  }
 },
 components: {
     IndexHeader,
     // IndexSection,
     IndexFooter
 }
}
</script>

<style scoped>
.counter{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
  .fle{
    flex: 1;
    overflow: auto;
  }
  .fle::-webkit-scrollbar{
    display: none;
  }
</style>
