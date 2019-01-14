<template>
    <div class="bigbox">
        <div class="container">            
                    <form class="form-login" action="index.html">
                        <h2 class="form-login-heading">sign in now</h2>
                        <div class="login-wrap">
                            <input type="text" class="form-control" placeholder="User ID" autofocus>
                            <br>
                            <input type="password" class="form-control" placeholder="Password">
                            <label class="checkbox">
                                <span class="pull-right">
                                    <a data-toggle="modal"> Forgot Password?</a>
                
                                </span>
                            </label>
                            <router-link tag="button" to="/InDex" class="btn-theme" type="submit">
                                <img src="../../static/img/sign.png" alt=""> SIGN IN</router-link>
                            <hr>
                
                            <div class="login-social-link centered">
                                <p>or you can sign in via your social network</p>
                                <button class="btn-facebook" type="submit">
                                        <img src="../../static/img/login1.png">Facebook</button>
                                <button class="btn-facebook2" type="submit">
                                        <img src="../../static/img/login2.png">Twitter</button>
                            </div> 
                            <div class="yes">
                                <span>Don't have an account yet?</span>
                                <i>Create an account</i>
                            </div>                     
                        </div>                            
                    </form> 
                    </div>             
                </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.bigbox {
  width: 100%;
  height: 754px;
  background: url(../../static/img/login-bg.png) no-repeat;
  background-size: 100%;
  overflow: hidden;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.form-login {
  width: 320px;
  margin: 100px auto 0;
  background: #fff;
  border-radius: 5px;
  -webkit-border-radius: 5px;
}
.form-login h2.form-login-heading {
  margin: 0;
  padding: 25px 20px;
  text-align: center;
  background: #68dff0;
  border-radius: 5px 5px 0 0;
  -webkit-border-radius: 5px 5px 0 0;
  color: #fff;
  font-size: 18px;
  font-weight: normal;
  text-transform: uppercase;
}
.login-wrap {
  padding: 20px;
}
.form-control {
  display: block;
  width: 90%;
  height: 26px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.checkbox {
  position: relative;
  display: block;
  min-height: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
label {
  width: 100%;
  font-weight: 400;
}
.pull-right {
  float: right;
}
.pull-right a {
  color: #428bca;
  background: transparent;
}
.btn-theme {
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  width: 100%;
  background: #68dff0;
  color: #fffaf9;
  margin-bottom: 20px;
}
.centered {
  text-align: center;
}
.btn-facebook {
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  border-radius: 4px;
  background: #5193ea;
  color: white;
  margin-top: 10px;
}
.btn-facebook img {
  display: inline-block;
  vertical-align: middle;
  margin-right: 3px;
}
.btn-facebook2 img {
  display: inline-block;
  vertical-align: middle;
  margin-right: 3px;
}
.btn-facebook2 {
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  border-radius: 4px;
  background: #44ccfe;
  color: white;
  margin-top: 10px;
}
.login-wrap .registration {
  text-align: center;
}
.yes {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.yes span {
  color: #797979;
  font-size: 12px;
  margin-top: 15px;
}
.yes i {
  font-style: normal;
  font-size: 12px;
  color: #5a94cc;
}
</style>
