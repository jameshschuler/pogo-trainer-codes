import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../components/Pages/Home.vue";
import Login from "../components/Pages/Login.vue";
import Profile from "../components/Pages/Profile.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: `/${import.meta.env.VITE_APP_DEFAULT_SOURCE}`,
  },
  {
    path: "/:source",
    name: "Trainers",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
  // {
  //     path: '/error',
  //     name: 'Error',
  //     component: Error
  // },
  // {
  //     path: '/:pathMatch(.*)*',
  //     name: 'NotFound',
  //     component: NotFound
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
