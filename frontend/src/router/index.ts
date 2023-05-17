import Home from "@/components/pages/Home.vue";
import Login from "@/components/pages/Login.vue";
import ProfilePage from "@/components/pages/ProfilePage.vue";
import SearchTrainers from "@/components/pages/SearchTrainers.vue";
import { useAuthStore } from "@/stores/authStore";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
