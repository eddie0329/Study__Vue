import Vue from 'vue'
import VueGtm from 'vue-gtm';
import App from './App.vue'

Vue.use(VueGtm, {
  id: 'GTM-MZP2BCZ'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
