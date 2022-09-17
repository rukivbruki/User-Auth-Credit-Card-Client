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
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: var(--mainBlackColor--white);
}

.nav-element {
  float: left;
}

.nav-element > *:first-child {
  display: block;
  padding: 14px 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background: var(--mainBlackColor);
  color: var(--mainWhiteColor);
}

.nav-element > *:first-child.active {
  background-color: var(--mainInteractiveColor);
}
.nav-element > *:first-child.active:hover {
  background-color: var(--mainInteractiveColor--dark);
}

.nav-element > *:first-child:hover:not(.active) {
  background-color: var(--mainWhiteColor--dark);
  color: var(--mainBlackColor);
}
</style>
