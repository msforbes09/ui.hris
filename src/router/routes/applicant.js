export default {
  path: '/applicants',
  component: () => import('pages/applicant/Entry.vue'),
  children: [
    {
      path: '',
      name: 'applicants',
      component: () => import('pages/applicant/Index.vue')
    },
    {
      path: 'dashboard',
      name: 'applicantDashboard',
      component: () => import('pages/applicant/Dashboard.vue')
    },
    {
      path: 'existing',
      name: 'existingRecords',
      component: () => import('pages/applicant/ExistingRecords.vue')
    },
    {
      path: 'create',
      name: 'createApplicant',
      component: () => import('pages/applicant/Create.vue')
    },
    {
      path: 'profile',
      name: 'applicantProfile',
      component: () => import('pages/applicant/Profile.vue')
    }
  ]
}
