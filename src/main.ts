import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// 新模块
import i18n from "vue-i18n";
import axios from "axios";
import VueAxios from "vue-axios";
// 适配桌面端mouse事件（因为项目采用了vant移动端ui）
import "@vant/touch-emulator";

Vue.config.productionTip = false;

Vue.use(i18n);
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
