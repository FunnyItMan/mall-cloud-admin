<template>
    <el-container id="layput-wrap">
      <el-aside width="200px">
        <PageAside/>
      </el-aside>
      <el-container>
        <el-header>
          <PageHeader/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup>
import PageHeader from './components/PageHeader.vue';   //头部组件
import PageAside from './components/PageAside.vue';     //侧边栏

</script>

<style lang="scss" scoped>
#layout-wrap {
  height: 100%;
}
</style>