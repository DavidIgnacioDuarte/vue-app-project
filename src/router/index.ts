import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TablaExcel from "../views/TablaExcel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/axios-use",
      name: "axios-use",
      component: () => import("../components/WeatherCard.vue"),
    },
    {
      path: "/tabla",
      name: "tabla",
      component: () => TablaExcel, //import('../components/TablaExcel.vue')
    },
  ],
});

export default router;
