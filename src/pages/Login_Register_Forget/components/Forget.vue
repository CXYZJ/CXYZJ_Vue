<template>
  <div id="main">
    <div id="window">
      <div class="div_40"></div>
      <div id="head">
        重置密码
      </div>
      <div id="show">
        <el-form id="forget" :model="forget" ref="forget" status-icon :rules="rules">
          <div class="div_30"></div>
          <el-form-item prop="email">
            <el-input id="email" type="text" v-model="forget.email" placeholder="  请输入注册时的邮箱"
                      prefix-icon="iconfont icon-email1"></el-input>
          </el-form-item>
          <div class="div_25"></div>
          <el-row>
            <el-col :span="14">
              <el-form-item prop="code">
                <el-input id="code" text="text" v-model="forget.code" :disabled="send" placeholder="  邮箱验证码"
                          prefix-icon="iconfont icon-verified">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">
              <div>&nbsp;</div>
            </el-col>
            <el-col :span="4">
              <el-button id="send" round type="info" :disabled="send">发送验证码</el-button>
            </el-col>
          </el-row>
          <div class="div_25"></div>

          <el-form-item prop="password">
            <el-input id="pass" type="password" v-model="forget.password" placeholder="  请输入密码"
                      prefix-icon="iconfont icon-password">
            </el-input>
          </el-form-item>
          <div class="div_25"></div>

          <el-form-item prop="check_pass">
            <el-input id="re_pass" type="password" v-model="forget.check_pass" placeholder="  请再次输入密码"
                      prefix-icon="iconfont icon-password">
            </el-input>
          </el-form-item>
          <div class="div_25"></div>

          <el-form-item>
            <el-button id="submit" type="success" @click="submitForm('forget')">重置密码</el-button>
          </el-form-item>
          <div class="div_20"></div>
          <div id="back">
            <router-link to="/login&register"><i class="iconfont icon-back hvr-fade-blue">返回</i></router-link>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "forget",
    data() {
      let check_email = (rule, value, callback) => {

        if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
          this.send = true
          callback(new Error('请输入正确的邮箱'))
        } else {
          this.send = false
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
      let check_pass2 = (rule, value, callback) => {
        console.log(value)
        console.log(this.forget.password)
        if (value !== this.forget.password) {
          callback(new Error("两次密码不一致，请重新输入"))
        } else {
          callback()
        }
      };
      let check_code = (rule, value, callback) => {
        console.log(this.code)
        if (value !== this.code) {
          console.log(value === this.code)
          callback(new Error("验证码不正确"))
        } else {
          callback()
        }
      }
      return {
        forget: {
          email: null,
          password: null,
          code: null,
          check_pass: null
        },
        code: "1268",
        send:
          true,
        rules:
          {
            email: [
              {required: true, message: "请输入邮箱", trigger: "blur"},
              {validator: check_email, trigger: "blur"}
            ],
            password:
              [
                {required: true, message: "请输入新的密码", trigger: "blur"},
                {validator: check_Pass, trigger: "blur"}
              ],
            check_pass:
              [
                {required: true, message: "请再次输入密码", trigger: "blur"},
                {validator: check_pass2, trigger: 'blur'}
              ],
            code:
              [
                {required: true, message: "请输入验证码", trigger: "blur"},
                {validator: check_code, trigger: "blur"}
              ]
          }
      }
    },
    methods: {
      submitForm(name) {
        this.$refs[name].validate((valida) => {
          if (valida) {
            alert("重置成功！")
            //重置待实现
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/index";

  #forget ::-moz-placeholder {
    color: gray;
  }

  #forget ::-webkit-input-placeholder {
    color: gray;
  }

  #forget :-ms-input-placeholder {
    color: gray;
  }

  #forget /deep/ #submit {
    width: 300px;
    border-radius: 20px;
  }

  #main {
    padding-bottom: 70px;
    height: 480px;
  }

  #show {
    width: 100%;
    height: auto;
    position: relative;
  }

  #forget {
    width: 300px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  #forget /deep/ #email {
    @include my_input
  }

  #forget /deep/ #code {
    @include my_input
  }

  #forget /deep/ #pass {
    @include my_input
  }

  #forget /deep/ #re_pass {
    @include my_input
  }

  #forget /deep/ #back {
    text-align: right;

  }

  #head {

    font-family: Microsoft YaHei, serif;
    font-size: 30px;
  }

  #window {
    width: 400px;
    height: 100%;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.6);
    text-align: center;
    box-shadow: 0 0 10px gray;
    border-radius: 10px;
  }

  [v-cloak] {
    display: none;
  }
</style>

