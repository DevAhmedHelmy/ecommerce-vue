import Vue from "vue";
import VueRouter from "vue-router";
import frontendPages from "@/pages/frontend";
import adminPages from "@/pages/admin";
import FrontRoutes from "./FrontRoutes";

import AuthRoutes from "./AdminRoutes";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: frontendPages,
    children: FrontRoutes,
  },
  {
    path: "/admin",
    component: adminPages,
    name: "admin",
    base: "/admin",
    children: AuthRoutes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
