import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import About from "./components/About.vue";
import TravelPage from "./components/TravelPage.vue";
import TravelAmericaPage from "./components/TravelAmericaPage.vue";
import TravelEnglandPage from "./components/TravelEnglandPage.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/travel",
    component: TravelPage,
    children: [
      { path: "/travel/america", component: TravelAmericaPage },
      { path: "/travel/england", component: TravelEnglandPage },
    ],
  },
  { path: "/about", component: About }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
