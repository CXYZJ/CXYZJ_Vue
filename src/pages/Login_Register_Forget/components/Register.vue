<template>
  <el-form id="register" :model="register" status-icon :rules="rules" ref="register">
    <div class="div_30"></div>
    <el-form-item prop="nickname">
      <el-input type="text" class="hvr-shadow" placeholder="  请输入昵称" v-model="register.nickname" id="nickname"
                prefix-icon="iconfont icon-user"></el-input>
    </el-form-item>

    <el-form-item prop="email">
      <el-input type="text" class="hvr-shadow" placeholder="  请输入邮箱" v-model="register.email" id="email"
                prefix-icon="iconfont icon-email1">
      </el-input>
    </el-form-item>

    <el-row>
      <el-col :span="14">
        <el-form-item prop="code">

          <el-input id="code" text="text" class="hvr-shadow" placeholder="  邮箱验证码" v-model="register.code"
                    prefix-icon="iconfont icon-verified" :disabled="send"></el-input>

        </el-form-item>
      </el-col>
      <el-col :span="1">
        <div>&nbsp;</div>
      </el-col>
      <el-col :span="4">
        <el-button round type="info" :disabled="send">发送验证码</el-button>
      </el-col>

    </el-row>
    <el-form-item prop="password">
      <el-input type="password" class="hvr-shadow" placeholder="  请输入密码" v-model="register.password" id="password"
                prefix-icon="iconfont icon-password"></el-input>
    </el-form-item>

    <div class="div_10"></div>
    <el-form-item>
      <el-button type="success" id="submit" @click="submitForm('register')">注册</el-button>
    </el-form-item>
    <third></third>
  </el-form>

</template>

<script>
  import third from './Third'
  import api from '../api/index'
  import {mapMutations} from 'vuex'

  export default {
    name: "register",
    data() {
      let check_Nick = (rule, value, callback) => {
        let regular = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/
        if (!regular.exec(value)) {
          callback(new Error('昵称只能包含英文中文数字和下划线！'))
        } else if (value.length > 10) {
          callback(new Error('昵称长度不能超过10个字符！'))
        } else {
          callback()
        }
      };
      let check_Pass = (rule, value, callback) => {
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,15}$/.test(value)) {
          callback(new Error('必须包含大小写字母和数字的组合，不能使用特殊字符！'))
        } else if (!/^.{8,15}$/.test(value)) {
          callback(new Error('密码长度在8-15之间'))
        } else {
          callback()
        }
      };
      let check_email = (rule, value, callback) => {
        if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
          this.send = true
          callback(new Error('请输入正确的邮箱'))
        } else {
          this.send = false
          callback()
        }
      };
      return {
        register: {
          nickname: null,
          email: null,
          password: null,
          code: null,
        },
        send: true,
        rules: {
          nickname: [
            {required: true, message: "请输入昵称", trigger: "blur"},
            {validator: check_Nick, trigger: 'blur'}
          ],
          email: [
            {required: true, message: "请输入邮箱", trigger: "blur"},
            {validator: check_email, trigger: 'blur'}
          ],
          password: [
            {required: true, message: "请输入密码", trigger: "blur"},
            {validator: check_Pass, trigger: 'blur'}
          ],
          code: [
            {required: true, message: "请输入验证码", trigger: "blur"}
          ]
        }
      }
    },
    methods: {
      ...mapMutations(['update_user']),

      submitForm(name) {/*
        this.$refs[name].validate((valida) => {
          if (valida) {
            api.register(this.register, (data) => {
              this.update_user(data.data)
              this.$router.push({path: '/index'})
            }, (data) => {
              this.$message.error(data.statusInfo.message)
            })
          }
        })*/
      }
    },
    components: {third}
  }
</script>

<style lang="scss">
  @import "../../../assets/css/index";

  #register ::-moz-placeholder {
    color: gray;
  }

  #register ::-webkit-input-placeholder {
    color: gray;
  }

  #register :-ms-input-placeholder {
    color: gray;
  }

  #register #nickname {
    @include my_input
  }

  #register #code {

    @include my_input
  }

  #register #submit {
    width: 300px;
    border-radius: 20px;
  }

  #register #email {
    @include my_input
  }

  #register #password {
    @include my_input
  }

  #register #check_pass {
    @include my_input
  }

  #register {
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
