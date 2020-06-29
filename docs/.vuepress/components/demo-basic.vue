<template>
  <tg-form ref="form" :form="form" :labels="labels" label-width="80px">
    <tg-form-item attr="name">
      <el-input v-model="form.name"></el-input>
    </tg-form-item>
    <tg-form-item attr="region">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </tg-form-item>
    <tg-form-item attr="date1">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </tg-form-item>
    <tg-form-item attr="delivery">
      <el-switch v-model="form.delivery"></el-switch>
    </tg-form-item>
    <tg-form-item attr="type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </tg-form-item>
    <tg-form-item attr="resource">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </tg-form-item>
    <tg-form-item attr="desc">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </tg-form-item>
    <tg-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </tg-form-item>
  </tg-form>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      labels: {
        name: '活动名称',
        region: '活动区域',
        date1: '活动时间',
        delivery: '即时配送',
        type: '活动性质',
        resource: '特殊资源',
        desc: '活动形式',
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style lang="less">
.line {
  text-align: center;
}
</style>
