import { UsersLayout, UsersList, UsersEditing } from '@/views/users';

export default {
  path: '/users',
  component: UsersLayout,
  children: [
    { path: '', component: UsersList },
    { path: 'add', component: UsersEditing },
    { path: 'edit/:id', component: UsersEditing },
  ],
};
