import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyButton from './global-component/MyButton';

const app = createApp(App);

app.component('MyButton', MyButton);

app.use(store).use(router);

app.mount('#app');
