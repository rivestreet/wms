import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/login"),
  },
  {
    path: "/layout",
    component: () => import("@/views/layout"),
    children: [
      {
        path: "/dashboard",
        component: () => import("@/views/dashboard"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
