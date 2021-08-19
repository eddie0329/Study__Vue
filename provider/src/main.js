import Vue from 'vue'
import App from './App.vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';

Vue.config.productionTip = false

extend('required', {
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true,
  message: 'Required',
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  render: h => h(App),
}).$mount('#app')
