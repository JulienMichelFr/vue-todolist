import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { initTodolistService } from "@/utils/init";
import { TodolistService } from "@/utils/services/todolist/todolist.service";

Vue.use(VueRouter);

initTodolistService();

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todolists/:id",
    name: "todolist.detail",
    props: route => ({
      todolist: TodolistService.findById(route.params.id)
    }),
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
