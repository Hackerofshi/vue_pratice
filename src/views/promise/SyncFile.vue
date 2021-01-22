<template>
  <diV>
    <el-button type="primary" size="default" @click="t1">Promise</el-button>
    <el-button type="danger" size="default" @click="t2">Promise2</el-button>
    <el-button type="danger" size="default" @click="t3">Promise3</el-button>
    <el-button type="danger" size="default" @click="t4">Promise4</el-button>
  </diV>
</template>
<script>
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, "done");
  });
}

let promise = new Promise(function(resolve, reject) {
  console.log("Promise");
  resolve();
});

const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject) {
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });

  return promise;
};

export default {
  methods: {
    t1() {
      timeout(100).then(value => {
        console.log(value);
      });
    },
    t2() {
      promise.then(function() {
        console.log("resolved.");
      });
    },
    t3() {
      getJSON("/posts.json").then(
        function(json) {
          console.log("Contents: " + json);
        },
        function(error) {
          console.error("出错了", error);
        }
      );
    },
    //Promise.resolve()方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。
    t4() {
      Promise.resolve().then(function() {
        console.log("two");
      });
    }
  }
};
</script>
<style scoped>
</style>
