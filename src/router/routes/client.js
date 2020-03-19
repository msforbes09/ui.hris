export default {
  path: '/clients',
  component: () => import('pages/client/Entry.vue'),
  children: [
    {
      path: '',
      name: 'clients',
      component: () => import('pages/client/Index.vue')
    },
    {
      path: 'profile',
      name: 'clientsProfile',
      component: () => import('pages/client/Profile.vue')
    }
  ]
}
