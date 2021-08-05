import Vue from "vue";
import App from "./App.vue";
//引入过渡库
import "animate.css";

Vue.config.productionTip = false;

// Vue原型上的东西给了vm和vc使用
new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$eventBus = this;
  },
}).$mount("#app");
