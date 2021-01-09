<template>
  <div class="hello">
    <div class="container">
      <el-col>
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <el-button v-on:click="press" class="button-type">主页</el-button>

        <el-button v-on:click="press1" class="button-type">登录页面</el-button>

        <el-button v-on:click="press2" type="danger" plain class="button-type"
          >任务按钮</el-button
        >

        <el-button v-on:click="press3" type="info" plain class="button-type"
          >危险按钮</el-button
        >
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      title: "you are so great",
    };
  },
  methods: {
    press() {
      this.$router.push("/main");
    },
    press1() {
      this.$router.push("/login");
    },
    press2() {
      this.$router.push("/task");
    },
    press3() {
      this.$router.push("/home");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@deep: ~">>>";
.hello {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
.button-type {
  margin-top: 10px;
}
</style>
