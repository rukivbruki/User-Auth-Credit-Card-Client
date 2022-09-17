<script setup>
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useAlertStore, useUsersStore } from '@/stores';
import { router } from '@/router';
import { formValues } from '@/helpers';
import { autoFocus as vAutoFocus } from '@/directives';

const usersStore = useUsersStore();
const alertStore = useAlertStore();
const route = useRoute();
const id = route.params.id;

let title = 'Add User';
let user = null;

if (id) {
  title = 'Edit User';
  ({ user } = storeToRefs(usersStore));
  usersStore.getById(id);
}

async function onSubmit(e) {
  const values = formValues(e);
  try {
    let message;

    if (user) {
      await usersStore.update(user.value.id, values);
      message = 'User updated';
    } else {
      await usersStore.register(values);
      message = 'User added';
    }

    await router.push('/users');
    alertStore.success(message);
  } catch (error) {
    alertStore.error(error);
  }
}
</script>

<template>
  <div class="add-container">
    <template v-if="!(user?.loading || user?.error)">
      <h1>{{ title }}</h1>
      <div class="form-container">
        <form @submit.prevent="onSubmit">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" :value="user?.firstName" v-auto-focus required />
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" :value="user?.lastName" required />
          <label for="username">Username</label>
          <input type="text" id="username" name="username" :value="user?.username" required />
          <label for="username">Password (Leave blank to keep the same password)</label>
          <input type="password" id="password" name="password" :value="user?.password" />
          <button type="submit" value="Save">Save</button>
          <router-link to="/users" class="router-link">Cancel</router-link>
        </form>
      </div>
    </template>
  </div>
</template>
