import Vue from 'vue';
import App from './App.vue';
import stagger from '@plutonium-js/vue-stagger';

Vue.use(stagger);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
