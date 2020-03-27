export default {
    path: '/keywords',
    component: () => import('pages/keyword/Entry.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'keywordList',
        component: () => import('pages/keyword/Index.vue')
      }
    ]
}
