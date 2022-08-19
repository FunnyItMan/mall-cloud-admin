<template>
  <el-aside id="aside-wrap">
    <div class="logo-box">
        <div class="logo">

        </div>
        <h3>后台管理系统</h3>
    </div>
    <el-menu
        unique-opened
        default-active="1"
        class="el-menu-wrap"
        background-color="#e75555"
        text-color="#ffffff"
        active-text-color="#409EFF"
    >
      <el-menu-item index="1">
        <el-icon>
          <HomeFilled/>
        </el-icon>
        <span>首页</span>
      </el-menu-item>

      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <Setting/>
          </el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="2-1">
          <el-icon>
            <User/>
          </el-icon>
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <el-icon>
            <Operation/>
          </el-icon>
          <span>角色管理</span>
        </el-menu-item>
        <el-menu-item index="2-3">
          <el-icon>
            <Document/>
          </el-icon>
          <span>权限管理</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup>
import {Document, HomeFilled, Setting, User,Operation} from '@element-plus/icons-vue'</script>

<style lang="scss" scoped>
#aside-wrap {
  height: 100vh;
  width: 200px;

  .logo-box {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #e75555;
    color: #ffffff;
  }

  .el-menu-wrap {
    border: none;
    height: calc(100% - 50px);
  }
}
</style>