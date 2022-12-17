import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomePage.vue";
import NotFound from "../views/NotFound.vue";
import Page from "../views/PageView.vue";
import Blog from "../views/BlogView.vue";
import Resume from "../views/ResumeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/page/:name",
    name: "Page",
    component: Page,
  },
  {
    path: "/blog/:name",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
