<template>
  <div class="container">
  </div>
</template>
<script>
import Vue from "vue";
import { NavBar } from "vant";
import "vant/lib/nav-bar/style";
Vue.use(NavBar);
export default {
    methods: {
    onClickLeft() {
    },
    onClickRight() {
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>

