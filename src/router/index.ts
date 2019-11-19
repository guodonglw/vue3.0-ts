import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Product from "../views/Product.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "product",
    component: Product
  },
  {
    path: "/user",
    name: "user",
    component: () =>
      import("../views/UserDemo.vue")
  },
  {
    path: "/shop",
    name: "shop",
    component: () =>
      import("../views/Shopping.vue")
  },

];

const router = new VueRouter({
  routes
});

export default router;
