export default {
  path: '/users',
  component: () => import('pages/users/Entry.vue'),
  meta: {
    requiresAuth: true
  },
  children: [
    {
      path: '',
      name: 'users',
      component: () => import('pages/users/Users.vue')
    }
  ]
}
