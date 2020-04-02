export default {
  path: '/login',
  component: () => import('pages/auth/Entry.vue'),
  children: [
    {
      path: '',
      name: 'login',
      component: () => import('pages/auth/Login.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: () => import('pages/auth/ForgotPassword.vue')
    },
    {
      path: '/reset-password/:email/:token',
      name: 'resetPassword',
      component: () => import('pages/auth/ResetPassword.vue')
    }
  ]
}
