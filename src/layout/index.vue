<template>
    <el-container id="layput-wrap">
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <page-header/>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>

<script setup>
import PageHeader from './components/PageHeader.vue';   //头部组件
import PageAside from './components/PageAside.vue';     //侧边栏
import AppMain from './components/AppMain.vue';         //内容区




</script>

<style lang="scss" scoped>
#layout-wrap {
  height: 100%;
}
</style>