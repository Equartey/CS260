import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import recipes from "./recipes";

let data = {
  recipes: recipes
};

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
