<script setup>
import { useAuthStore } from '@/stores';
import { autoFocus as vAutoFocus } from '@/directives';

async function onSubmit() {
  const authStore = useAuthStore();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  await authStore.login(username, password);
}
</script>

<template>
  <div class="login-container">
    <h1>Login</h1>
    <div class="form-container">
      <form @submit.prevent="onSubmit">
        <label for="username">Name</label>
        <input type="text" id="username" name="username" required v-auto-focus />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit" value="Login">Login</button>
        <router-link class="router-link" to="register">Register</router-link>
      </form>
    </div>
  </div>
</template>
