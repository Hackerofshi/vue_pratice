<template>
  <div class="container1">
    <div class="header">这是一个侧边栏</div>
    <div class="main">
      <el-button @click="drawer = true">默认按钮</el-button>
    </div>
    <div class="footer"></div>

    <el-drawer title="表单" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
      <div class="contanierForm">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import Toast from '@/common/toast'
export default {
  data() {
    return {
      drawer: false,
      direction: "rtl",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  mounted: {},
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    onSubmit() {
      console.log("0---->")
      Toast("提交成功");
    }
  }
};
</script>

<style lang="less" scoped>
@deep: ~">>>";
.container1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
  }
  .main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.contanierForm {
  margin: 20px;
}
</style>
