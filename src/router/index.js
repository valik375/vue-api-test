import { createRouter, createWebHistory } from 'vue-router'
import routeHelper from '@/helpers/routeHelper'

const routes = [
  {
    path: '/',
    redirect: routeHelper.usersPagePath
  },
  {
    path: routeHelper.usersPagePath,
    name: routeHelper.usersPageName,
    component: () => import('@/pages/Users.vue')
  },
  {
    path: `${routeHelper.userDetailsPagePath}:id`,
    name: routeHelper.userDetailsPageName,
    component: () => import('@/pages/UserDetails.vue')
  },
  {
    path: routeHelper.postsPagePath,
    name: routeHelper.postsPageName,
    component: () => import('@/pages/Posts.vue')
  },
  {
    path: `${routeHelper.postDetailsPagePath}:id`,
    name: routeHelper.postDetailsPageName,
    component: () => import('@/pages/PostDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
