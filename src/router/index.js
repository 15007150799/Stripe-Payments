import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Checkout.vue";
import Success from "../views/Success.vue";
import Failure from "../views/Failure.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
  },
  {
    path: "/failure",
    name: "Failure",
    component: Failure,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
