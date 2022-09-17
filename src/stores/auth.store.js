import { defineStore } from 'pinia';

import { fetchWrapper } from '@/helpers';
import { router } from '@/router';
import { useAlertStore } from '@/stores';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null,
  }),
  actions: {
    async login(username, password) {
      try {
        const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });
        this.user = user;

        localStorage.setItem('user', JSON.stringify(user));
        await router.push(this.returnUrl || '/');
      } catch (error) {
        const alertStore = useAlertStore();

        alertStore.error(error);
      }
    },
    logout() {
      this.user = null;

      localStorage.removeItem('user');
      router.push('/account/login');
    },
  },
});
