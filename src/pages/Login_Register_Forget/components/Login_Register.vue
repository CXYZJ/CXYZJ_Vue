<template>
  <div id="main" :style="height">
    <div id="window">
      <div class="div_40"></div>
      <div id="head">
        <router-link to="/login&register/login" class="hvr-underline-from-center" :class="{on_click:login}"
                     @click.native="change('login')">
          登录
        </router-link>
        &nbsp;&nbsp;·&nbsp;&nbsp;
        <router-link to="/login&register/register" class="hvr-underline-from-center" :class="{on_click:register}"
                     @click.native="change('register')"> 注册
        </router-link>

      </div>
      <div id="show">
        <transition enter-active-class="rotateInDownRight"
                    leave-active-class="rotateOutDownLeft" @before-enter="before" @after-enter="after">
          <router-view class="animated"></router-view>

        </transition>
      </div>

    </div>
  </div>

</template>

<script>

  export default {
    name: "Login_Register",
    data() {
      return {
        height: {
          height: '480px'
        },
        which: 'login',
        login: true,
        register: false
      }
    },
    mounted() {
      let path = this.$route.path;
      if (path === '/login&register/login') {
        this.login = true;
        this.register = false;
        this.height.height = '480px'
      } else {
        this.login = false;
        this.register = true;
        this.height.height = '530px'
      }
    },
    methods: {
      before(el) {
        let cssObj = {
          "animation-delay": "0.6s",
          "-webkit-animation-delay": "0.6s",
          "animation-duration": "0.9s",
          "-webkit-animation-duration": "0.9s",
        }
        let getCssText = function (obj) {
          let text = [];
          for (let o in obj) {
            text.push(o + ":" + obj[o])
          }
          return text.join(';')
        }
        el.style.cssText = getCssText(cssObj);
      },
      after(el) {
        let cssObj = {
          "animation-delay": "0s",
          "-webkit-animation-delay": "0s",
          "animation-duration": "0.9s",
          "-webkit-animation-duration": "0.9s",
        }
        let getCssText = function (obj) {
          let text = [];
          for (let o in obj) {
            text.push(o + ":" + obj[o])
          }
          return text.join(';')
        }
        el.style.cssText = getCssText(cssObj);
      },
      change(value) {
        console.log(1)
        if (value === 'login') {
          this.login = true;
          this.register = false;
          this.height.height = '480px'
        } else {
          this.login = false;
          this.register = true;
          this.height.height = '530px'
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/index.scss";
  @import "../../../assets/css/animate.css";

  #main {
    height: 480px;
    padding-bottom: 70px;
  }

  .on_click {
    color: black;
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

  #head {

    font-family: Microsoft YaHei, serif;
    font-size: 30px;
  }

  #show {
    width: 100%;
    height: auto;
    position: relative;
  }

  a {
    text-decoration: none;
    color: gray;
    cursor: pointer;
  }

  [v-cloak] {
    display: none;
  }
</style>
