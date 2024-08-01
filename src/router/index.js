import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    //路由初始指向
    path: "/",
    name: "list",
    component: () => import("../views/list/index.vue"),
  },
  {
    path: "/listdetails",
    name: "listdetails",
    component: () => import("../views/listdetails/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
