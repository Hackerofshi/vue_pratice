<template>
  <el-container>
    <el-header class="header" height="100px">
      <div v-on:click="press">
        <img class="imghead" src="../../assets/logo.png" />
      </div>
      <div v-on:click="showMessage1" id="title1">
        <div class="titletext">新建第一个标题</div>
        <i class="el-icon-caret-bottom"></i>
      </div>
      <div v-on:click="showMessage2" id="title1">
        <div class="titletext">新建第二个标题</div>
        <i class="el-icon-caret-bottom"></i>
      </div>
      <div id="title1">
        <div class="titletext">新建第二个标题</div>
        <i class="el-icon-caret-bottom"></i>
      </div>

      <div class="rightContainer">
        <div id="title2">
          <div class="titletext">语言</div>
        </div>
        <div id="title2">
          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-main class="main">
      <div class="d1">
        <p id="id1"></p>
      </div>
      <div class="d2">
        <Item v-for="item in items" :key="item.message" v-bind:content="item.message" ></Item>
      </div>
      <div class="d1"></div>
    </el-main>
  </el-container>
</template>

<script>
import Item from "./Item";
export default {
  components: { Item },
  data() {
    return {
      a: 1,
      message: "你好！",
      items: [
        { message: "Foo" },
        { message: "Bar" },
        { message: "Bar" },
        { message: "Bar" },
        { message: "Bar" }
      ]
    };
  },
  methods: {
    press() {
      console.log(this.$data.a);
    },
    showMessage1: function() {
      setTimeout(function() {
        //这里是window
        document.getElementById("id1").innerText = this.message;
      }, 10);
    },
    showMessage2: function() {
      setTimeout(() => {
        document.getElementById("id2").innerText = this.message; //this 4
      }, 10);
    }
  }
};
</script>

<style lang="less" scoped>
#title1 {
  height: 100px;
  width: 80px;
  display: flex;
  flex-direction: row;
  margin-left: 81px;
  align-items: center;
  &:hover {
    background-color: green;
  }
}
#title2 {
  height: 100px;
  width: 80px;
  display: flex;
  flex-direction: row;
  margin-right: 81px;
  align-items: center;
  &:hover {
    background-color: green;
  }
}

.header {
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .imghead {
    width: 77px;
    height: 77px;
    margin-left: 84px;
  }
  .titletext {
    margin: auto;
  }
  .rightContainer {
    flex: 1;
    display: flex;
    flex-direction: row-reverse;
  }
}

.main {
  overflow: auto;
  display: flex;
  flex-direction: column;
  .d1 {
    height: 465px;
    background-color: brown;
  }
  .d2 {
    background-color: blueviolet;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
