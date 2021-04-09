<template>
  <div class="container">
    <div class="head">
        <img class="imageHead" src="../../../assets/fish_farmer.png" />
    </div>
  </div>
</template>






<script>
import Vue from "vue";
import { Card } from "vant";
import { Image as VanImage } from "vant";

Vue.use(VanImage);
Vue.use(Card);
export default {

  methods:{

  }
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  .head {
    display: flex;
    height: 100px;
    width: 100%;
    align-items: center;
    flex-direction: row;
    .imageHead{
      height: 50px;
      widows: 50px;
      margin-left: 10px;
    }
  }
}
</style>

