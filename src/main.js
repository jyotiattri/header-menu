import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

const Home = { template: "<div>Home</div>" };
const About = { template: "<div>About</div>" };

const routes = [
  { path: "/Home", component: Home },
]
const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
