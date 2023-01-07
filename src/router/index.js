import JobsView from '@/views/jobs/JobsView.vue'
import JobDetailsView from '@/views/jobs/JobDetailsView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signup from '../components/auth/Signup.vue'
import Login from '../components/auth/Login.vue'
import ProfileView from '@/views/ProfileView.vue'
import Post from '@/views/Post.vue'
import Recovery from '../components/auth/Recovery.vue'
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
  // {
  //   path: '/list',
  //   name: 'ListView',
  //   component: ListView
  // },
  {
    path: '/cont-nou',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/parola-uitata',
    name: 'Recovery',
    component: Recovery
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'ProfileView',
    component: ProfileView
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    const auth = getAuth();
    if (auth) {
      next();
    } else {
      next({name: 'Login'});
    }
  } else {
    next()
  }
})

export default router
