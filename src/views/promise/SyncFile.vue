<template>
  <diV>
    <el-button type="primary" size="default" @click="t1"></el-button>
    <el-button type="text" size="default" @click="t1"></el-button>
  </diV>
</template>
<script>
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, "done");
  });
}

export default {
  methods: {
    t1() {
      timeout(100).then(value => {
        console.log(value);
      });
    }
  }
};
</script>
<style scoped>
</style>
