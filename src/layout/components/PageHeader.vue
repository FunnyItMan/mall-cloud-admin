<template>
    <div id="header-wrap">
       <el-dropdown>
        <span class="el-dropdown-link">
          个人中心<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
            <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
            <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
</template>

<script setup>
import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
} from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
#header-wrap {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>