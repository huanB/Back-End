<template>
<footer>
    <div class="footer-left">
        <ul>
            <li>Home</li>
            <li>Company</li>
            <li>Portfolio</li>
            <li>Blog</li>
        </ul>
    </div>
    <div class="footer-right">
        <span>© 2016 Creative Tim</span>
    </div>
</footer>
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
footer{
    width:100%;
    height:70px;
    display: flex;
}
.footer-left{
    width:50%;
    height:70px;
    display: flex;
    align-items: center;
    margin-left:20px;
}
.footer-left ul{
    display: flex;
}
.footer-left ul li{
    padding:0px 20px;
    font-size: 16px;
    color: #9A9A9A;
}
.footer-right{
    width:50%;
    height:70px; 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right:50px;
}
.footer-right span{
    color:#23CCEF;
    font-size: 16px;
}
</style>
