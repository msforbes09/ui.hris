import auth from './auth'
import keyword from './keyword'
import users from './users'
import applicant from './applicant'
import application from './application'
import client from './client'
import requirement_template from './requirement_template'

const routes = [
  auth,
  users,
  keyword,
  applicant,
  application,
  client,
  requirement_template,
  {
    path: '/',
    redirect: '/applicants/dashboard'
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
