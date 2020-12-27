import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { initTodolistService } from "@/utils/init";

Vue.use(VueRouter);

initTodolistService();

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todolist/:id",
    name: "TodolistDetail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Todolist.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
