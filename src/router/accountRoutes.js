import { AccountLayout } from '@/views/account';

export default {
  path: '/account',
  name: 'account',
  component: AccountLayout,
  children: [
    { path: '', redirect: 'login' },
    { path: 'login', name: 'login', component: () => import('@/views/account/AccountLogin.vue') },
    {
      path: 'register',
      name: 'register',
      component: () => import('@/views/account/AccountRegistering.vue'),
    },
  ],
};
