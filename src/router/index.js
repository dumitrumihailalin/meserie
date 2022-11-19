import JobsView from '@/views/jobs/JobsView.vue'
import JobDetailsView from '@/views/jobs/JobDetailsView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signup from '../components/auth/Signup.vue'
import Login from '../components/auth/Login.vue'
import ProfileViewVue from '@/views/ProfileView.vue'
import ListView from '@/views/Courses/ListView.vue'
import Curs from '@/views/Courses/Curs.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/JobDetailsView/:id',
    name: 'JobDetailsView',
    component: JobDetailsView
  },
  {
    path: '/list',
    name: 'ListView',
    component: ListView
  },
  {
    path: '/cont-nou',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/curs/:id',
    name: 'Curs',
    component: Curs
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileViewVue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(rec => rec.meta.requiresAuth)) {
//     const auth = getAuth();
//     if (auth) {
//       next();
//     } else {
//       next({name: 'list'});
//     }
//   } else {
//     next()
//   }
// })

export default router
