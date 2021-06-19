import {createWebHistory, createRouter } from "vue-router";
//import Home from '../views/Home.vue'
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Loops from "@/pages/Loops.vue";
import Calculator from "@/pages/Calculator.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/loops",
    name: "Loops",
    component: Loops,
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
