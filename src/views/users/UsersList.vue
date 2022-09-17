<script setup>
import { storeToRefs } from 'pinia';

import { useUsersStore } from '@/stores';

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

usersStore.getAll();
</script>

<template>
  <div class="list-container">
    <template v-if="users.length">
      <h1>Users</h1>
      <router-link class="router-link add-link" to="/users/add">Add User</router-link>
      <table class="table">
        <thead>
          <tr>
            <th style="width: 20%">First Name</th>
            <th style="width: 20%">Last Name</th>
            <th style="width: 20%">Username</th>
            <th style="width: 20%"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.username }}</td>
            <td style="white-space: nowrap">
              <router-link class="router-link edit-link" :to="`/users/edit/${user.id}`">Edit</router-link>
              <button type="button" @click="usersStore.delete(user.id)" :disabled="user.isDeleting">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<style scoped>
.list-container {
  width: 600px;
}

td:last-child {
  display: flex;
  white-space: nowrap;
  justify-content: space-between;
  align-items: center;
}

td a {
  display: inline-block;
  margin: 8px;
  text-align: center;
  text-decoration: none;
}

.edit-link {
  padding: 0;
  border: none;
}

.edit-link:hover {
  border: none;
}

td button {
  padding: 2px 8px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: var(--mainInteractiveColor);
  color: var(--mainWhiteColor);

}

td button:hover {
  background-color: var(--mainInteractiveColor--dark);
}
</style>
