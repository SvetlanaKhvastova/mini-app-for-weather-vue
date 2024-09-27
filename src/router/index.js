import { createRouter, createWebHistory } from "vue-router";
import About from "@/components/About.vue";
import Main from "@/components/Main.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
