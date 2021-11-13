import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./Store/store";
import axiosInstance from "@/core/plugins/axios";

import "@/core/plugins/vueUses";
require("@/core/plugins/globalFunctions");
Vue.component("topBar", () => import("@/pages/admin/layouts/topBar"));

Vue.prototype.http = axiosInstance;
Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
