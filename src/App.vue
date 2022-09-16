<script setup>
import { TopNav, PiniaAlert } from '@/components';
</script>

<template>
  <div>
    <TopNav />
    <PiniaAlert />
    <router-view />
  </div>
</template>

<style>
@import '@/assets/base.css';
</style>
