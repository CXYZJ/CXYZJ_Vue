<template>
  <div id="head">
    <el-row>
      <el-col :span="1" :offset="3" id="icon_div">
        <img id="icon" src="../../../assets/img/icon.gif"/>
      </el-col>
      <el-col :span="2" id="compass_index">
        <i id="index_icon" class="iconfont icon-compass">
          首页
        </i>
      </el-col>
      <el-col :span="3" id="search_div">
        <el-input id="search" size="mini" prefix-icon="iconfont icon-search" placeholder="搜索"></el-input>

      </el-col>
      <el-col :span="9">&nbsp;</el-col>
      <el-col :span="4" id="user">
        <i id="user_icon" class="iconfont icon-yonghu1">
          <router-link to="/login&register/login" style="font-size: 16px;padding-left: 5px" class="hvr-fade-blue">登录
          </router-link>
          ·
          <router-link to="/login&register/register" href="" style="font-size: 16px" class="hvr-fade-orange">注册
          </router-link>
        </i>

      </el-col>
    </el-row>
  </div>
</template>
<style scoped lang="scss">
  @import "../../../assets/css/index";
  @import "../assets/css/index";

  #head /deep/ #icon {
    height: 50px;
    width: 65px;
  }

  #head /deep/ #index_icon {
    font-size: 25px;
    color: #2098D1;
  }

  #head /deep/ #index1 {
    display: inline-block;
    padding-left: 10px;
  }

  #head #icon_div {
    padding-top: 10px;
  }

  #head /deep/ #search_div {
    padding-top: 23px;

  }

  #head /deep/ #search {
    border: 1px solid rgba(160, 160, 160, 0.8);
    font-size: 15px;

    border-radius: 15px;
    background: rgba(253, 253, 253, 0.7);
  }

  #head /deep/ #compass_index {
    padding-left: 25px;
    padding-top: 18px;
  }

  #head /deep/ #user {
    padding-top: 20px;

    padding-left: 60px;
  }

  #head #user #user_icon {
    font-size: 26px;
    color: #aaaaaa;
  }

  #head #login_register {
    position: relative;

    font-size: 18px;
    display: inline-block;
  }

  #head {
    background-color: rgb(253, 253, 253);
    box-shadow: 0 0 10px gray;
    border-radius: 3px;
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 65px;
    min-width: 1340px;
  }
</style>
