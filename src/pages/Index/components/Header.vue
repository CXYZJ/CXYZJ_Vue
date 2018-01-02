<template>
  <div id="head">
    <el-row>

      <el-col :span="1" :offset="3">
        <img id="icon" src="../../../assets/img/icon.gif"/>
      </el-col>
      <el-col :span="2" id="compass_index">
        <i id="index_icon" class="iconfont icon-compass">
          首页
        </i>
      </el-col>
      <el-col :span="3" id="search_div">
        <el-input id="search" prefix-icon="iconfont icon-search" placeholder="搜索"></el-input>
      </el-col>
      <el-col :span="11">&nbsp;</el-col>
      <el-col :span="4">
        <i class="iconfont icon-user"></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  @import "../../../assets/css/index";
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

  #head /deep/ #search_div {
    padding-top: 10px;
  }

  #head /deep/ #search {
    @include my_input
  }

  #head /deep/ #compass_index {
    padding-left: 25px;
    padding-top: 10px;
  }
  #head{
    background-color: black;
  }
</style>
