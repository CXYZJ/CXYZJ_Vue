<template>
  <el-form id="login" :model="login" :rules="rules" ref="login" status-icon>
    <div class="div_50"></div>
    <el-form-item prop="e_mail">
      <el-input type="text" class="hvr-shadow" placeholder="  请输入邮箱" v-model="login.e_mail" id="email"
                prefix-icon="iconfont icon-email1"></el-input>
    </el-form-item>
    <div class="div_10"></div>
    <el-form-item prop="password">
      <el-input type="password" class="hvr-shadow" placeholder="  请输入密码" v-model="login.password" id="password"
                prefix-icon="iconfont icon-password"></el-input>
    </el-form-item>
    <div class="div_5"></div>
    <div id="line">
      <div id="remember">
        <el-checkbox v-model="login.checked" class="hvr-fade-blue">记住我</el-checkbox>
      </div>
      <div id="forget">
        <router-link to="/login&register/forget" class="hvr-fade-blue">忘记密码？</router-link>
      </div>
    </div>
    <div class="div_5"></div>
    <el-form-item>
      <el-button type="primary" id="submit" @click="submitForm('login')">登录</el-button>
    </el-form-item>
    <div class="div_5"></div>
    <third></third>
  </el-form>


</template>

<script>
  import {mapMutations} from 'vuex'
  import third from './Third'
  import api from '../api/index'

  export default {
    name: "login",
    data() {
      return {
        login: {
          e_mail: "",
          password: "",
          checked: false
        },
        rules: {
          e_mail: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
          ],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}]
        }
      }
    },
    methods: {
      ...mapMutations(['update_user']),
      submitForm(form) {
        console.log("method")

        this.$refs[form].validate((valid) => {
          if (valid) {
            console.log("valid")
            api.login(this.login, (data) => {
              console.log("success")
              this.update_user(data.data)
              this.$router.push({path: '/Index'})
            }, (data) => {
              console.log("failure")
              this.$message.error(data.statusInfo.message)
            })
          }
        });
      },
    },
    components: {third}

  }
</script>

<style lang="scss">
  @import "../../../assets/css/index";

  #login ::-moz-placeholder {
    color: gray;
  }

  #login ::-webkit-input-placeholder {
    color: gray;
  }

  #login :-ms-input-placeholder {
    color: gray;
  }

  #login #email {
    @include my_input;

  }

  #login #password {
    @include my_input
  }

  #login #submit {
    clear: both;
    width: 300px;
    border-radius: 20px;

  }

  #login #line {
    height: 50px;
  }

  #login #line #remember {
    float: left;
  }

  #login #line #forget {
    float: right;
  }

  #login {
    width: 300px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  [v-cloak] {
    display: none;
  }
</style>
