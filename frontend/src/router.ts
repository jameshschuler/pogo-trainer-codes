import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import SearchTrainersPage from "@/pages/SearchTrainersPage.vue";
import { useAuthStore } from "@/stores/authStore";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/search",
    name: "SearchTrainers",
    component: SearchTrainersPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfilePage,
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
