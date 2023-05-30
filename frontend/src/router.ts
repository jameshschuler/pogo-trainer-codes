import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import SearchTrainersPage from "@/pages/SearchTrainersPage.vue";
import { useAuthStore } from "@/stores/authStore";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

let routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/search",
    name: "SearchTrainers",
    component: SearchTrainersPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundPage,
  },
];

if (import.meta.env.VITE_APP_ACCOUNTS_FEATURE_TOGGLE === "true") {
  routes = [
    ...routes,
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
      meta: {
        featureToggle: "accounts",
      },
    },
    {
      path: "/profile",
      name: "Profile",
      component: ProfilePage,
      meta: {
        requiresAuth: true,
        featureToggle: "accounts",
      },
    },
  ];
}

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
