import { createApp } from "vue";
import App from "./App.vue";
import newui from "../packages";
// Vue.use(newui);

createApp(App).use(newui).mount("#app");
