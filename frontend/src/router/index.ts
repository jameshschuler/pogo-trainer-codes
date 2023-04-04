import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from "../App.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:source",
    name: "Trainers",
    component: App,
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
