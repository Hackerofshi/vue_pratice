<template>
  <div class="maincontainer">
    <div class="topcontainer">
      <div v-bind:class="[activeClass, errorClass]"></div>
      <div class="topitem2">
        <el-button type="danger" plain class="button-type">主页面</el-button>
        <el-button type="danger" plain class="button-type">主页面</el-button>
        <el-button type="danger" plain class="button-type">主页面</el-button>
        <el-button type="danger" plain class="button-type">主页面</el-button>
      </div>
    </div>
    <div class="spaceline"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      activeClass: "active",
      errorClass: "text-danger",
    };
  },
};
</script>

<style lang="less" scoped>
.maincontainer {
  display: flex;
  flex-direction: column;
  .topcontainer {
    height: 334px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .active {
      background-color: green;
    }
    .topitem2 {
      padding-left: 100px;
      padding-bottom: 2px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
  }
  .spaceline {
    background-color: red;
    height: 2px;
  }
}
</style>
