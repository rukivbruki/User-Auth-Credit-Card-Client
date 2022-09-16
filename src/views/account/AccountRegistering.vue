<script setup>
import { useAlertStore, useUsersStore } from '@/stores';
import { router } from '@/router';
import { formValues } from '@/helpers';

async function onSubmit(e) {
  const usersStore = useUsersStore();
  const alertStore = useAlertStore();
  const values = formValues(e);

  try {
    await usersStore.register(values);
    await router.push('/account/login');
    alertStore.success('Registration successful');
  } catch (error) {
    alertStore.error(error);
  }
}
</script>

<template>
  <div class="register-container">
    <h4>Register</h4>
    <div class="form-container">
      <form @submit.prevent="onSubmit">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" autofocus />
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" />
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required />
        <label for="username">Password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit" value="Register">Register</button>
        <router-link class="router-link" to="login">Cancel</router-link>
      </form>
    </div>
  </div>
</template>
