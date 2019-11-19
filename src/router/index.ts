import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Main from "../views/Main/index.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/product",
    name: "product",
    component: () => 
      import("../views/Product/index.vue")
  },
  {
    path: "/user",
    name: "user",
    component: () =>
      import("../views/User/index.vue")
  },
  {
    path: "/shop",
    name: "shop",
    component: () =>
      import("../views/Shop/index.vue")
  },

];

const router = new VueRouter({
  routes
});

export default router;
