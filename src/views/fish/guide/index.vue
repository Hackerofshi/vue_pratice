<template>
  <div class="container">
    <span class="textStyle">请选择您的身份</span>
    <span>我们会对每种身份设定合理的鱼塘权限</span>

    <div class="content">
      <div class="fishitem">
        <img class="imgcontent" src="../../../assets/fish_farmer.png" />
        <div class="textcontent">
          <span class="text1">请选择您的身份</span>
          <span>实时监测鱼塘养殖情况</span>
        </div>
      </div>
      <div class="fishitem">
        <img class="imgcontent" src="../../../assets/fish_farmer.png" />
        <div class="textcontent">
          <span class="text1">请选择您的身份</span>
          <span>实时监测鱼塘养殖情况</span>
        </div>
      </div>
      <div class="fishitem">
        <img class="imgcontent" src="../../../assets/fish_farmer.png" />
        <div class="textcontent">
          <span class="text1">请选择您的身份</span>
          <span>实时监测鱼塘养殖情况</span>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Vue from "vue";
import { Card } from "vant";
import { Image as VanImage } from "vant";

Vue.use(VanImage);
Vue.use(Card);
export default {};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 24px;
  padding-right: 24px;
  .textStyle {
    margin-top: 50px;
    font-size: 30px;
    color: black;
  }
  .textStyle1 {
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #999999;
    margin-left: 24px;
  }
  .content {
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    margin-top: 12px;
    margin-bottom: 50px;
    .fishitem {
      border-radius: 8px;
      display: flex;
      margin-top: 24px;
      background-color: #eeeff3;
      flex: 1;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding-left: 10px;
      padding-right: 10px;
      .imgcontent {
        width: 101px;
        height: 107px;
      }
      .textcontent {
        display: flex;
        flex: 1;
        flex-direction: column;
        .text1 {
          font-size: 26px;
          color: #333333;
        }
      }
    }
  }
}
</style>
