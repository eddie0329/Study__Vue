import Vue from "vue";
import App from "./App.vue";
import store from "./store/store.js";

// new Vue(App).$mount('#root');
new Vue({
    el: "#root",
    store,
    render: h => h(App)
});
