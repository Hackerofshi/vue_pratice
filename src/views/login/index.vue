<template>
  <div class="login-wrapper">
    <div class="container">
      <div class="title">格力绩效管理系统</div>
      <el-form class="myForm" :model="userForm" ref="login" :rules="userRules">
        <el-form-item prop="username">
          <el-input v-model.trim="userForm.username" placeholder="帐户">
            <i class="el-icon-user" slot="prefix"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model.trim="userForm.password"
            type="password"
            placeholder="密码"
            @keyup.enter.native="login"
          >
            <i class="el-icon-lock" slot="prefix"></i>
          </el-input>
        </el-form-item>
        <div class="sp">
          <el-checkbox v-model="autoLogin" disabled>自动登录</el-checkbox>
          <el-button type="text" @click="$toast('请联系管理员进行重置密码', 3000)">忘记密码</el-button>
        </div>
      </el-form>
      <div class="button-wrap">
        <el-button style="width: 100%;" :loading="loading" @click="login">登 录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      loading: false,
      autoLogin: true,
      userForm: {
        username: "",
        password: ""
      },
      userRules: {
        username: [{ required: true, message: "用户名不能为空" }],
        password: [{ required: true, message: "密码不能为空" }]
      }
    };
  },
  methods: {
    login() {
      this.$refs.login.validate(async valid => {
        const body = {
          username: this.userForm.username,
          password: this.$encrypt.encryptedData(this.userForm.password)
        };

        if (valid) {
          this.login = true;
          await this.$store.dispatch("LOGIN", body);


        }
      });
    }
  }
};
</script>


<style lang="less" scoped>
@deep: ~">>>";
.login-wrapper {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    position: absolute;
    width: 600px;
    height: 100%;
    background: hsla(0, 0%, 5%, 0.5) border-box;
    box-shadow: 0 0 0 1px hsla(0, 0%, 30%, 0.3) inset,
      0 0.5em 1em rgba(0, 0, 0, 0.6);
    color: #fff;
    right: 0;
    top: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      height: 120px;
      font-size: 30px;
      display: flex;
      align-items: center;
      .logo {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        background: url("../../assets/logo.png") no-repeat center;
        background-size: contain;
      }
    }
    .tab {
      width: 60%;
      margin: auto;
    }
    .myForm {
      width: 60%;
      margin-top: 30px;
      margin-left: auto;
      margin-right: auto;
      @{deep} .el-icon-user,
      .el-icon-lock {
        font-size: 20px;
      }
      .sp {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @{deep} .el-checkbox__label,
        @{deep} .el-button--text {
          color: #fff;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
    .button-wrap {
      width: 60%;
      height: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin: 10px auto;
      & > * {
        margin: 0;
      }
      .login-wrapper {
        width: 100%;
      }
    }
  }
  .tips {
    position: fixed;
    text-align: center;
    font-size: 12px;
    color: #fff;
    bottom: 30px;
  }
}
</style>
