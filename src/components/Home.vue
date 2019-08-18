<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    // 退出业务逻辑
    logout(){
      // 清空token
      window.sessionStorage.removeItem('token')
      // 重定向到登录页面
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="less" scoped>
</style>