<template>
  <div class="maincontainer">
    <div class="topcontainer">
      <div></div>
      <div v-bind:class="isActive ? activeClass : errorClass">
        <el-button type="danger" plain class="button-type"
          >主页面</el-button
        >
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
  }
  .spaceline {
    background-color: red;
    height: 2px;
  }
}
</style>
