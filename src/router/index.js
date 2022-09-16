import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore, useAlertStore } from '@/stores';
import { CardDeposit } from '@/views';
import accountRoutes from './account.routes';
import usersRoutes from './users.routes';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: CardDeposit },
    { ...accountRoutes },
    { ...usersRoutes },

    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
});

router.beforeEach(async (to) => {

  const alertStore = useAlertStore();
  alertStore.clear();


  const publicPages = ['/account/login', '/account/register'];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.user) {
    authStore.returnUrl = to.fullPath;

    return '/account/login';
  }
});
