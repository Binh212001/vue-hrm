<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import 'ant-design-vue/dist/reset.css'
import './index.css'
import CommonLayout from './common/CommonLayout.vue'
</script>

<template>
  <CommonLayout>
    <RouterView />
  </CommonLayout>
</template>

<style></style>
