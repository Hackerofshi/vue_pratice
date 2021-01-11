<template>
  <div class="item">
    <img v-on:click="jump" class="itemImg" src="../../assets/logo.png" />
    <span>{{ content }}</span>
    <span @click="say">2020-01-09 09</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      childrenSay: "hello, parent"
    };
  },
  props: {
    content: {
      type: String,
      default: () => {
        return "";
      }
    }
  },
  methods: {
    jump() {
      console.log(this.$data.a);
      this.$router.push("homedetail");
    },
    say() {
      //父组件通过 prop 给子组件下发数据，子组件通过$emit触发事件给父组件发送消息，
      // 即 prop 向下传递，事件向上传递。
      this.$emit("say", this.childrenSay);
    }
  }
};
</script>
<style lang="less"  scoped>
.item {
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  width: 31%;
  flex-direction: column;
  align-items: center;
  .itmeImg {
    width: 100%;
  }
}
</style>
