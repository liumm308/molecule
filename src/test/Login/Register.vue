<template>
  <div class="register-scr">
    <div class="register-scr-inner register-all">
      <Card class='card'>
        <p  class="card-title" slot="title"><img src="../../assets/img/maobi.png" class="card-title-img-position" width="28">  Paper工作室</p>
        <Form ref="registerForm" :rules="ruleValidate" :model="registerForm" class="card-content">
          <FormItem prop="loginName">
            <Input type="text" v-model="registerForm.loginName" placeholder="Loginname">
            <Icon class="card-content-icon" type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="loginPassword">
            <Input type="password" v-model="registerForm.loginPassword" placeholder="Password">
            <Icon class="card-content-icon" type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="confirmLoginPassword">
            <Input type="password" v-model="registerForm.confirmLoginPassword" placeholder="PasswordRegin"  @keyup.enter.native="registerSubmit('registerForm')">
            <Icon class="card-content-icon" type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem class="login-btn">
            <Button type="primary" long @click="registerSubmit('registerForm')">注册</Button>
          </FormItem>
          <FormItem class="register">
            <p @click="login">登录</p>
          </FormItem>
        </Form>
      </Card>
    </div>
  </div>
</template>

<script>
    export default {
        name: "register",
        props:{

        },
        data(){

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
            registerForm: {
              loginName: '',
              confirmLoginPassword: null,
              loginPassword: null
            },
            ruleValidate: {
              loginName: [
                {required: true, validator: validateLoginName, trigger: 'blur'}
              ],
              loginPassword: [
                {required: true, validator: validateLoginPassword, trigger: 'blur'}
              ],
              confirmLoginPassword: [
                {required: true, validator: validateLoginPassword, trigger: 'blur'}
              ]
            }

          }
        },
        mounted(){

        },
        methods:{
          registerSubmit: function (validateForm) {
            this.$refs[validateForm].validate((valid) => {
              if (valid) {
                if(this.loginPassword!==this.confirmLoginPassword){
                  this.$Message.error('两次密码不一致，请重新输入！');
                  return
                }

                let registerParams = {
                  userName: this.registerForm.loginName,
                  userPassword: this.registerForm.loginPassword
                };
                this.$http.post('api/test/createUser', registerParams)
                  .then((response) => {
                    if(response.data.body.length !== 0 && response.data.code === 200){
                      this.$Message.success("注册成功");
                      this.$router.push({path: '/'});
                    } else {
                      this.$Message.error('注册失败');
                    }
                  }).catch((res)=> {
                  console.log(res);
                })
              } else {
                this.$Message.error('注册失败');
              }
            })
          },
          login: function () {
            this.$router.push({path: '/index'});
          }
        },
        components:{

        }
    }
</script>


<style scoped>
  @import "./Login.css";
</style>

<style>
  @import "./LoginAll.css";
</style>
