import { UsersLayout } from '@/views/users';
export default {
  path: '/users',
  name: 'users',
  component: UsersLayout,
  children: [
    { path: '', name: '', component: () => import('@/views/users/UsersList.vue') },
    { path: 'add', name: 'add', component: () => import('@/views/users/UsersEditing.vue') },
    { path: 'edit/:id', name: 'edit.show', component: () => import('@/views/users/UsersEditing.vue') },
  ],
};
