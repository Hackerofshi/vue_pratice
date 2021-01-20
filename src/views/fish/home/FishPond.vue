<template>
  <div class="container">
    <div class="tag">
      <span class="s">2020年5月21日 四月廿九 星期四</span>
    </div>
    <div class="tip">
      <div class="left">养殖指导</div>
      <div class="right">养殖告警</div>
    </div>
    <div class="tag">
      <span class="s">我的鱼塘</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .tag {
    width: 100vw;
    height: 53px;
    display: flex;
    flex-direction: row;
    clear: both;
    overflow: hidden;
    align-items: center;
    .s {
      padding: 0;
      margin: 0;
      text-align: center;
      font-size: 20px;
      line-height: 20px;
      color: black;
    }
    &::before {
      content: "";
      width: 5px;
      height: 16px;
      background-color: #4d70ea;
      display: block;
      margin-right: 10px;
      margin-left: 20px;
    }
  }
  .tip {
    display: flex;
    flex-direction: row;
    width: 100%;
    .left {
      flex: 1;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url("../../../assets/guide_card.png") no-repeat center;
      margin-left: 20px;
      margin-right: 10px;
      color: white;
    }
    .right {
      flex: 1;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      margin-right: 20px;
      background: url("../../../assets/warn_card.png") no-repeat center;
      color: white;
    }
  }
}
</style>
