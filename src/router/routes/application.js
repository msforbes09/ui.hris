export default {
  path: '/applications',
  component: () => import('pages/application/Entry.vue'),
  children: [
    {
      path: '',
      name: 'applications',
      component: () => import('pages/application/Index.vue')
    },
    {
      path: 'details',
      name: 'applicationDetails',
      component: () => import('pages/application/Details.vue')
    }
  ]
}
