import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import About from "./components/About.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/about", component: About },
  { path: "/travel", component: TravelPage,
children: [
  { path: "/travel/america", component: TravelAmericaPage },
  { path: "/travel/england", component: TravelEnglandPage }
]
}
];

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
