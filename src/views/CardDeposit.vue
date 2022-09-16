<script setup>
import { storeToRefs } from 'pinia';

import { useAlertStore, useAuthStore, useUsersStore } from '@/stores';
import { formValues } from '@/helpers';

const authStore = useAuthStore();
const usersStore = useUsersStore();
const alertStore = useAlertStore();
const { user } = storeToRefs(authStore);

async function onSubmit(e) {
  const values = formValues(e);

  await usersStore.update(user.value.id, values);
  console.log(formValues(e, 4));
  formValues(e, 4, true);
  try {
    alertStore.success('Credit card data has been stored');
  } catch (error) {
    alertStore.error(error);
  }
}
</script>

<template>
  <div class="layout-container" v-if="user">
    <div class="deposit-container">
      <h1>Hi {{ user.firstName }}! Give us your money :)</h1>
      <div class="form-container">
        <form @submit.prevent="onSubmit">
          <div class="input-container">
            <div class="input-element">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" placeholder="UKSI CAT" :value="user?.name" required autofocus />
            </div>
            <div class="input-element">
              <label for="mm">Expiration month</label>
              <input
                type="number"
                min="1"
                max="12"
                step="1"
                name="mm"
                id="mm"
                placeholder="10"
                :value="user?.mm"
                required
              />
            </div>
            <div class="input-element">
              <label for="yy">Expiration year</label>
              <input
                type="number"
                min="2022"
                max="2099"
                step="1"
                name="yy"
                id="yy"
                placeholder="2027"
                :value="user?.yy"
                required
              />
            </div>
            <div class="input-element">
              <label for="cardNumber">Card number</label>
              <input
                type="number"
                name="cardNumber"
                id="cardNumber"
                placeholder="1111 1111 1111 1111"
                :value="user?.cardNumber"
                required
              />
            </div>
            <div>
              <input type="password" name="cvc" id="cvc" placeholder="CVC" required />
            </div>
          </div>
          <button type="submit" value="Save">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-wrap: wrap;
}

.input-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

input {
  width: 250px;
  margin: 10px 10px 10px 0;
}

.input-element {
  display: flex;
  flex-wrap: wrap;
  width: 250px;
}

input[name='name'],
input[name='cardNumber'],
.input-element:nth-child(1),
.input-element:nth-child(4) {
  width: 100%;
}

input[type='password'] {
  width: 100px;
  margin-right: auto;
}
</style>
