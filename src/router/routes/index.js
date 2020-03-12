import auth from './auth'
import keyword from './keyword'
import users from './users'
import applicant from './applicant'

const routes = [
  auth,
  users,
  keyword,
  applicant,
  {
    path: '/',
    name: 'dashboard',
    component: () => import('pages/Index.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
