<script setup>
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<template>
  <nav v-show="authStore.user">
    <div class="nav-element">
      <router-link to="/">Deposit</router-link>
    </div>
    <div class="nav-element">
      <router-link to="/users">Users</router-link>
    </div>
    <div class="nav-element" style="float: right">
      <a @click="authStore.logout()">Logout</a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.nav-element {
  float: left;
}

.nav-element > *:first-child {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  background: #111;
  text-decoration: none;
  cursor: pointer;
}

.nav-element > *:first-child.active {
  background-color: #75003f;
}

.nav-element > *:first-child:hover:not(.active) {
  background-color: #393939;
}
</style>
