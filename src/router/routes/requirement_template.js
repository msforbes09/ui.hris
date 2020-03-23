export default {
  path: '/requirement-templates',
  component: () => import('pages/requirement_template/Entry.vue'),
  children: [
    {
      path: '',
      name: 'requirementTemplates',
      component: () => import('pages/requirement_template/Index.vue')
    }
  ]
}
