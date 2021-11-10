import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
require("@/core/plugins/axios");
Vue.component("topBar", () => import("@/pages/admin/layouts/topBar"));
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
