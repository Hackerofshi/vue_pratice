<template>
  <div class="container">
    <span class="textStyle">您好，</span>
    <span class="textStyle1">欢迎来到知鱼智联！</span>
    <div class="container1">
      <div class="formcontainer">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            placeholder="用户名"
            clearable
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            placeholder="密码"
            clearable
            :rules="[{ required: true, message: '请填写密码' }]"
            @input="change"
          />
          <div class="buttoncontainer">
            <van-button block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>
        <div class="bottomcontainer">
          <span class="textitem">注册账号</span>
          <span class="textitem">忘记密码？</span>
        </div>
      </div>
    </div>
    <div class="bottomimgcontainer">
      <img class="imgcontent" src="../../../assets/loginbg.png" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Form } from "vant";
import { Button } from "vant";
import { Field } from "vant";

import "vant/lib/button/style";
import "vant/lib/field/style";

Vue.use(Field);
Vue.use(Button);
Vue.use(Form);
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      this.$router.push("/FishHomePage");
    },
    change() {
      console.log(this.username);
      console.log(this.password);
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-right: 24px;
  padding-left: 24px;
  .textStyle {
    margin-top: 50px;
    font-size: 30px;
    color: black;
    margin-left: 16px;
  }
  .textStyle1 {
    font-size: 30px;
    color: black;
    margin-left: 16px;
  }

  .container1 {
    display: flex;
    width: 100%;
    .formcontainer {
      margin-top: 70px;
      flex: 1;
      display: flex;
      flex-direction: column;
      .buttoncontainer {
        margin-top: 80px;
        margin-left: 16px;
        margin-right: 16px;
      }
      .bottomcontainer {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
        padding-left: 16px;
        padding-right: 16px;
        .textitem {
          color: #999999;
          font-size: 14px;
        }
      }
    }
  }

  .bottomimgcontainer {
    flex: 1;
    position: fixed;
    bottom: 0;
    right: 0;
    align-items: flex-end;
    flex-direction: row-reverse;
  }
}
</style>
