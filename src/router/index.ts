import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TablaExcel from "../views/TablaExcelView.vue";

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
      component: () => TablaExcel
    },
  ],
});

export default router;
