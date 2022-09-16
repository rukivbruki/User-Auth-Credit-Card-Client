<script setup>
import { storeToRefs } from 'pinia';

import { useAlertStore } from '@/stores';

const alertStore = useAlertStore();
const { alert } = storeToRefs(alertStore);

const clear = () => setTimeout(() => alertStore.clear(), 5000);
</script>

<template>
  <div v-if="alert">
    <div class="alert" :class="alert.type">
      <p>{{ alert.message }}</p>
    </div>
  </div>
  <div v-else>
    <div class="alert">
      <p><br /></p>
    </div>
  </div>
  <template>
    {{ clear() }}
  </template>
</template>

<style>
.alert {
  margin-bottom: 15px;
  padding: 4px 12px;
}

.alert-danger {
  background-color: #ffdddd;
  border-left: 6px solid #f44336;
}

.alert-success {
  background-color: #ddffdd;
  border-left: 6px solid #04aa6d;
}
</style>
