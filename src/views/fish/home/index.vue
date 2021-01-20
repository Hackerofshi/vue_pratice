<template>
  <div class="layoutContainer">
    <van-nav-bar
      :title="title1"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="main">
      <!-- 子路由出口 -->
      <router-view></router-view>
    </div>

    <div class="bottombar">
      <!-- 底部导航栏 -->
      <!-- 给tabbar--route属性  然后给每一项to属性就可以路由跳转了 -->
      <van-tabbar v-model="active" route @change="onChange">
        <van-tabbar-item icon="home-o" to="/FishHomePage">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/FishGuide">指导</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/FishMessage">消息</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/Mine">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

import { Tabbar, TabbarItem, NavBar } from "vant";

import "vant/lib/nav-bar/style";
import "vant/lib/tabbar/style";
import "vant/lib/tabbar-item/style";
Vue.use(Tabbar);
Vue.use(NavBar);
Vue.use(TabbarItem);
export default {
  name: "layoutIndex",
  data() {
    return {
      active: 0,
      title1: "首页"
    };
  },
  methods: {
    onChange(index) {
      switch (index) {
        case 0:
          this.title1 = "首页";
          break;
        case 1:
          this.title1 = "指导";
          break;
        case 2:
          this.title1 = "消息";
          break;
        case 3:
          this.title1 = "我的";
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.layoutContainer {
  display: flex;
  height: 100%;
  flex-direction: column;
  .main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .bottombar {
    background-color: blue;
    display: flex;
    flex-direction: row;
  }
}
</style>
