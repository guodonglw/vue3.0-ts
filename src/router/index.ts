import Vue from "vue";
import VueRouter, { RawLocation } from "vue-router";
import Home from "../views/Home/index.vue"

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location: RawLocation) {
  return (<any>(routerPush.call(this, location))).catch((error: any)=> error)
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
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
