import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

createApp(App).use(router).mount("#app");
