<template>
  <div class="layoutContainer">
    <div class="main">
      <!-- 子路由出口 -->
      <router-view></router-view>
    </div>

    <div class="bottombar">
      <!-- 底部导航栏 -->
      <!-- 给tabbar--route属性  然后给每一项to属性就可以路由跳转了 -->
      <van-tabbar v-model="active" route>
        <van-tabbar-item icon="home-o" to="/FishHomePage">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/FishGuide">问答</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/FishMessage">视频</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/Mine">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
import "vant/lib/tabbar/style";
import "vant/lib/tabbar-item/style";
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: "layoutIndex",
  data() {
    return {
      active: 0
    };
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
