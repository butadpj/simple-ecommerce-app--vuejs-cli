import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import PageNotFound from "../components/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/user/:username",
    name: "User",
    component: User,
    props: true,
  },
  // Redirects
  {
    path: "/home",
    redirect: { name: "Home" },
  },
  {
    path: "/about",
    redirect: { name: "About" },
  },
  // 404 Page Fallback
  {
    path: "/:catchAll(.*)",
    component: PageNotFound,
    name: "NotFound",
  },
];

const router = new VueRouter({
  // mode: "history",
  routes,
});

export default router;
