import "./assets/main.css";
import Antd from "ant-design-vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import "ant-design-vue/dist/reset.css";

import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(Antd);
app.use(router);
app.mount("#app");
