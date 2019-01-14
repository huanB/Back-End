<template>
    <div class="dispose">
      <div class="dis-h2">
        <h2>404 Not Found</h2>
        <hr/>
        <p>openresty</p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "seDispose"
    }
</script>

<style lang="scss" scoped>
  .dispose{
    width: 100%;
    background: white;
    box-sizing: border-box;
    padding: 10px;
    float: left;
    .dis-h2{
      width: 100%;
      height: 300px;
      /*background: palegreen;*/
      text-align: center;
      h2{
        font-size: 50px;
      }
    }

  }
</style>
