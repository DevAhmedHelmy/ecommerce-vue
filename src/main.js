import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import http from "@/core/plugins/axios";
Vue.use(http);

Vue.config.productionTip = false;

Vue.component("topBar", () => import("@/pages/admin/layouts/topBar"));
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
