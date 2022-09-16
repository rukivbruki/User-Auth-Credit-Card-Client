<script setup>
import { useAuthStore } from '@/stores';
import { router } from '@/router';

const authStore = useAuthStore();

if (authStore.user) {
  router.push('/');
}
</script>

<template>
  <div class="layout-container">
    <router-view />
  </div>
</template>
