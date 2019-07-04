<template>
    <div class="login">
       <div class="login-inner">
         <Card class='card'>
           <p  class="card-title" slot="title"><img src="../../assets/img/maobi.png" class="card-title-img-position" width="28">  Paper工作室</p>
           <Form ref="loginForm" :rules="ruleValidate" :model="loginForm" class="card-content">
             <FormItem prop="loginName">
               <Input type="text" v-model="loginForm.loginName" placeholder="Loginname">
               <Icon class="card-content-icon" type="ios-person-outline" slot="prepend"></Icon>
               </Input>
             </FormItem>
             <FormItem prop="loginPassword">
               <Input type="password" v-model="loginForm.loginPassword" placeholder="Password"  @keyup.enter.native="loginSubmit('loginForm')">
               <Icon class="card-content-icon" type="ios-lock-outline" slot="prepend"></Icon>
               </Input>
             </FormItem>
             <FormItem class="remember-me">
               <CheckboxGroup  v-model="loginForm.loginRemember">
                 <Checkbox label="Remember Me"></Checkbox>
               </CheckboxGroup>
             </FormItem>
             <FormItem class="login-btn">
               <Button type="primary" @click="loginSubmit('loginForm')">登录</Button>
             </FormItem>
             <FormItem class="register">
               <p>免费注册</p>
             </FormItem>
           </Form>
         </Card>
       </div>
    </div>
</template>

<script>

  import { mapGetters, mapActions, mapState } from 'vuex'

    export default {
        name: "login",
        data: function () {
          const validateLoginName = (rule, value, callback) => {
            if(value == ""){
              return callback('请输入登录名称');
            }
            else{
              if (value.length > 30 || value.length < 5) {
                return callback(new Error('用户名长度5-30'));
              }
              else{
                callback();
              }
            }
          };

          //校验登录名称的格式及长度
          const validateLoginPassword = (rule, value, callback) => {
            if(value === ""){
              return callback('请输入登录密码');
            }
            else{

              if (value.length > 16 || value.length < 5) {
                return callback(new Error('密码长度为5-16'));
              }
              else{
                callback();
              }
            }
          };

          return {
            loginName:'',
            loginForm: {
              loginName: '',
              loginPassword: '',
              loginRemember: []
            },
            ruleValidate: {
              loginName: [
                {required: true, validator: validateLoginName, trigger: 'blur'}
              ],
              loginPassword: [
                {required: true, validator: validateLoginPassword, trigger: 'blur'}
              ]
            }
          }
        },
        methods: {
          loginSubmit: function(params) {
            let that = this;
            this.$refs[params].validate((valid) => {
              if (valid) {
                let loginParams = {
                  loginName: this.loginForm.loginName,
                  loginPassword: this.loginForm.loginPassword
                };
                that.$http.post('api/test/loginByName', loginParams)
                  .then((response) => {
                     if(response.data.body.length !== 0 && response.data.code === 200){
                       this.$store.dispatch("setLoginInfo",response.data.body[0]);
                       this.$store.dispatch("setLoginState",true);
                       this.LocalStorage.inItemByKey("LoginInfo", response.data.body[0]);
                       console.log(this.loginInfo);
                       this.$router.push({path: '/'});
                        //console.log(this.$store.state.otherContents);
                        //console.log(this.$store.getters.showOthersContent);
                       //this.$store.commit('setNewData',"dddddddddddddddd");
                       //this.$store.commit("setOthersContent",'others Data');
                       //console.log(this.$store.getters.showOthersContent);

                     } else {
                       this.$Message.error('登录失败');
                     }
                  }).catch((res)=> {
                  console.log(res);
                })
              } else {
                this.$Message.error('登录失败');
              }
            })
          }
        },
        mounted(){
        },
        computed: {
          ...mapGetters({
           loginInfo: 'getLoginInfo'
          })
        }
    }
</script>

<style scoped>

  .login{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #2c98c1;
  }

  .login-inner{
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(left,rgba(255,255,255,0.5), rgba(255,255,255,0),rgba(255,255,255,0.5));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }

  .card{
    width: 400px;
    height: 350px;
    box-shadow: rgba(128, 128, 128, 0.52) 0 15px 15px;
  }

  .card-title{
    height: 30px;
    line-height: 30px;
    font-size: 20px;
  }

  .card-title-img-position{
    position: absolute;
    top: 15px;
    left: 100px;
  }


  .card-content{
    width: 80%;
  }

  .card-content-icon{
    font-size: 16px;
  }

  .remember-me{
     display: flex;
  }

  .login-btn{
    margin-bottom: 0 !important;
  }

  .register{
    font-size: smaller;
    color: grey;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }

  .register:hover{
    color: #2767f7;
  }


</style>

<style>
  .ivu-card-body{
    padding: 16px;
    display: flex;
    flex: 1;
    height:  calc(100% - 61px);
    justify-content: center;
    align-items: center;
  }

  .ivu-form-item {
    margin-bottom: 18px;
    vertical-align: top;
    zoom: 1;
  }

</style>
