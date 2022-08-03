import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入base
import "@/styles/base.less";
// 注册element-ui组件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 引入echarts
import * as echarts from "echarts";
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
