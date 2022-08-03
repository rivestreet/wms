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
    path: "/dashboard",
    component: () => import("@/views/dashboard"),
    redirect: "/main",
    children: [
      {
        path: "/main",
        component: () => import("@/views/dashboard/main"),
      },
      {
        path: "/depot",
        component: () => import("@/views/basis/depot"),
      },
      {
        path: "/addDepot",
        component: () => import("@/views/basis/components/addDepot"),
      },
      {
        path: "/kuqu",
        component: () => import("@/views/basis/Kuqu/kuqu"),
      },
      {
        path: "/location",
        component: () => import("@/views/basis/location"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
