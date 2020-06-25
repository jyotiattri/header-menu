import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import About from "./components/About.vue";


Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/about", component: About },
]

const router = new VueRouter({
  routes
});

const app = new Vue({
  render: h => h(App),
  router
}).$mount("#app");
