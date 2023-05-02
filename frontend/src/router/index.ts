import { useAuthStore } from "@/stores/authStore";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../components/Pages/Home.vue";
import Login from "../components/Pages/Login.vue";
import Profile from "../components/Pages/Profile.vue";
import SearchTrainers from "../components/Pages/SearchTrainers.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/search",
    name: "SearchTrainers",
    component: SearchTrainers,
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

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !authStore.isLoggedIn) {
    next({ name: "Login" });
  } else {
    if (authStore.isLoggedIn && (to.name === "Login" || to.name === "Home")) {
      next({ name: "Profile" });
    } else {
      next();
    }
  }
});

export default router;
