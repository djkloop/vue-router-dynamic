<template>
<div>
  <el-row :gutter="12">
    <el-col :span="6" :offset="6">
      <div class="grid-content bg-purple">
        <el-tag auto-complete="off" type="warning">用户1：aaa</el-tag>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-tag auto-complete="off" type="info">用户2：bbb</el-tag>
      </div>
    </el-col>
  </el-row>

  <br />
  <el-form :label-position="labelPosition" label-width="80px" :model="formInline">
    <el-form-item label="用户名">
      <el-input v-model="formInline.user" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="formInline.pswd" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登陆</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      formInline: {
        user: '',
        pswd: ''
      }
    }
  },
  methods: {
    onSubmit() {
      const {
        user
      } = this.formInline
      if (user === 'aaa' || user === 'bbb') {
        this.$message({
          showClose: true,
          message: '恭喜你，登陆成功消息',
          type: 'success'
        })
        localStorage.setItem('user', user)
        this.$router.push({
          name: 'index',
          params: {
            userId: user === 'aaa' ? 100 : 101
          }
        })
        return
      }
      this.$message({
        showClose: true,
        message: '恭喜你, 登录失败消息',
        type: 'error'
      })
    }
  }
}
</script>

<style>

</style>
