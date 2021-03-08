import Vue from 'vue';
import App from './App.vue';
import modal from './plugins/modal';

Vue.use(modal);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
