export default {
  path: '/users',
  component: () => import('pages/users/Entry.vue'),
  children: [
    {
      path: '',
      name: 'users',
      component: () => import('pages/users/Users.vue')
    }
  ]
}
