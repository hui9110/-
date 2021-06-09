import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "@/views/xz/Product.vue"
import Login from "@/views/xz/Login.vue"
import MessageList from "@/views/xz/MessageList.vue"
import Cart from "@/views/xz/Cart.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "首页" }
  },

  {
    path: "/messagelist",  
    component: MessageList,
    meta: { title: "首页" }
  },

  {
    path: "/product",
    component: Product,
    meta: { title: "商品" }
  },
  {
    path: "/login", component: Login,
    meta: { title: "登录" }
  },
  {
    path: "/cart", component: Cart,
    meta: { title: "购物车" }
  }
];

const router = new VueRouter({
  //mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
