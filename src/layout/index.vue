<template>
  <el-container id="layout-wrap">
    <AsideNav/>
    <el-container direction="vertical">
      <HeaderNav/>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import HeaderNav from './HeaderNav'
import AsideNav from './AsideNav'
</script>

<style lang="scss" scoped>
#layout-wrap {
  height: 100%;
}


</style>