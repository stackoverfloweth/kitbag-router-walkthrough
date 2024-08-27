import HomePage from "@/components/HomePage.vue";
import { createRoute, createRouter, path, query, withDefault } from "@kitbag/router";
import { defineAsyncComponent } from "vue";
import { sortParam } from "./sortParam";
import { activeUser } from "@/services/activeUser";
import LoginPage from "@/components/LoginPage.vue";

const jobs = createRoute({
  name: 'jobs',
  path: '/jobs',
  query: query('sort=[?sort]', {sort: withDefault(sortParam, 'postingDate:desc')}),
  component: defineAsyncComponent(() => import('../components/JobsPage.vue'))
}) 

const job = createRoute({
  parent: jobs,
  name: 'job',
  path: path('/[jobId]', {jobId: Number}),
  component: defineAsyncComponent(() => import('../components/JobPage.vue'))
})

const profile = createRoute({
  name: 'profile',
  path: '/profile',
  component: defineAsyncComponent(() => import('../components/ProfilePage.vue')),
  onBeforeRouteEnter: (to, context) => {
    if(!activeUser.value){
      context.reject('AuthNeeded')
    }
  }
})

const signUp = createRoute({
  name: 'signUp',
  path: '/sign-up',
  component: defineAsyncComponent(() => import('../components/SignUpPage.vue'))
})

const routes = [
  createRoute({
    name: 'home',
    path: '/',
    component: HomePage
  }),
  jobs,
  job,
  profile,
  signUp,
] as const

export const router = createRouter(routes, {
  rejections: {
    AuthNeeded: LoginPage
  }
})