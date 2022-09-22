import { AccountLayout, AccountLogin, AccountRegistering } from '@/views/account';

export default {
  path: '/account',
  component: AccountLayout,
  children: [
    { path: '', redirect: 'login' },
    { path: 'login', component: AccountLogin },
    {
      path: 'register',
      component: AccountRegistering,
    },
  ],
};
