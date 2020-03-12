export default {
    path: '/keywords',
    component: () => import('pages/keyword/Entry.vue'),
    children: [
      {
        path: '',
        name: 'keywordList',
        component: () => import('pages/keyword/List.vue')
      }
    ]
}
