export default {
  path: '/requirement-templates',
  component: () => import('pages/requirement_template/Entry.vue'),
  meta: {
    requiresAuth: true
  },
  children: [
    {
      path: '',
      name: 'requirementTemplates',
      component: () => import('pages/requirement_template/Index.vue')
    }
  ]
}
