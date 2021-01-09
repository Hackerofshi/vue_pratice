<template>
  <div v-on:click="jump" class="item">
    <img class="itemImg" src="../../assets/logo.png" />
    <span>{{ content }}</span>
    <span>2020-01-09 09</span>
  </div>
</template>
<script>
export default {
  props: {
    content: String,
  },
  methods: {
    jump() {
      console.log(this.$data.a);
      this.$router.push("homedetail");
    },
  },
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
