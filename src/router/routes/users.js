export default {
  path: '/users',
  component: () => import('pages/user/Entry.vue'),
  meta: {
    requiresAuth: true
  },
  children: [
    {
      path: '',
      name: 'users',
      component: () => import('pages/user/Index.vue')
    }
  ]
}
