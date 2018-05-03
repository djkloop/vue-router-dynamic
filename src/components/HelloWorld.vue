<template>
<div class="hello">
  <el-col :span="6">
  <h5>自定义颜色</h5>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">导航一</span>
    </el-menu-item>
  </el-menu>
  </el-col>
</div>
</template>

<script>
export default {
  name: 'helloworld',

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
