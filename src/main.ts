import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Sticky from 'vue-sticky-directive';

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(Sticky);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
