<template>
 <div class="container">
     <div class="bigbox">
         <div class="main">
             <h3>注册免费帐户</h3>
             <p>创建您的免费帐户</p>
             <input type="text" placeholder="First Name"><br/>
             <input type="text" placeholder="Email"><br/>
             <input type="text" placeholder="Password"><br/>
             <input type="text" placeholder="Confirm Password">
             <div class="bots">
             <p><input type="checkbox" checked="checked"><span>同意条款和条件</span></p>
             <router-link tag="a" to="/" href="javascript:;">注册</router-link>
             </div>
         </div>
         
     </div>
         
     </div>
</template>

<script>
export default {
 data() {
  return {

  }
 },
 components: {

 }
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    display: flex; 
    background: url(../../static/img/login-bg.png) no-repeat;
    background-size:100%;
    position: relative;
}
.bigbox{
    width: 100%;

}
.main{
    width: 480px;
    margin: 50px auto;
    border: 1px #d5d5d5 solid;
    display: flex;
    flex-direction:column; 
    background: #f9f9f9;
    justify-content: center;
    border-radius: 5px;
}
.main h3{
    font-size: 30px;
    color: #444444;
    margin: 27px 36px;
}
.main p{
    font-size: 14px;
    color:#838383;
    margin-left: 36px;
    margin-bottom: 20px;
}
.main input{
    width: 400px;
    height: 40px;
    margin-left: 36px;
    border-radius: 3px;
    border: 1px #cccccc solid;
}
.bots{
    display: flex;
    margin-top: 26px;
    align-items: center;
    margin-bottom: 20px;
}
.bots p{
    display: flex;
    align-items: center;
    margin:5px 0px 8px 0px;
}
.bots p input{
    width: 17px;
    height: 17px;
    display: inline-block;
}
.bots p span{
    font-size: 12px;
    color:#333333;
    margin-left: 5px;
}
.bots a{
    display: inline-block;
    padding:0 20px ;
    background: #20a5e6;
    line-height: 48px;
    color: white;
    border-radius:3px; 
    margin-left:200px;
}
</style>
