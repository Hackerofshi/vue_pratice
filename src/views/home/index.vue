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
        <img class="imgTop" src="../../assets/icon_bg.png" />
      </div>
      <div class="d2">
        <!--父组件监听子组件触发的say方法，调用自己的parentSay方法-->
        <!--通过:msg将父组件的数据传递给子组件-->
        <Item
          v-for="item in items"
          @say="parentSay"
          :key="item.message"
          v-bind:content="item.message"
        ></Item>
      </div>
      <div class="d1"></div>
      <div class="d3">
        <div class="item1">
          <img class="icon" src="../../assets/logo.png" />
          <div class="itemcontent">
            <span class="contenttext">澳门的贸促局</span>
            <span class="text">http://www.mice.gov.mo/tc/</span>
          </div>
        </div>
        <div class="item2">
          <div class="itemcontent">
            <span class="contenttext">澳门贸促局</span>
            <span class="text">http://www.mice.gov.mo/tc/</span>
            <span class="text">http://www.mice.gov.mo/tc/</span>
          </div>
        </div>
      </div>
      <div class="d4">
        <span class="text">© copyright 2016IPIM. All rights reserved. (聲明)</span>
      </div>
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
        { message: "Bar1" },
        { message: "Bar2" },
        { message: "Bar3" }
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
    },
    // 参数就是子组件传递出来的数据
    parentSay(msg) {
      console.log(msg); // hello, parent
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
    .imgTop {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .d2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 10px;
  }
  .d3 {
    display: flex;
    height: 247px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .item1 {
      display: flex;
      flex-direction: row;
      margin-left: 137px;
      .icon {
        height: 80px;
        width: 80px;
      }
      .itemcontent {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .contenttext {
          font-size: 28px;
        }
      }
    }
    .item2 {
      display: flex;
      flex-direction: row;
      margin-right: 137px;
      .itemcontent {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  .d4 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background-color: black;
    .text {
      color: white;
    }
  }
}
</style>
