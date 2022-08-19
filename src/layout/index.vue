<template>
  <el-container id="layout-wrap">
    <PageAside/>
    <el-container direction="vertical">
      <PageHeader/>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import PageHeader from './components/PageHeader.vue'; //头部组件
import PageAside from './components/PageAside.vue'; //侧边栏</script>

<style lang="scss" scoped>
#layout-wrap {
  height: 100%;
}
</style>