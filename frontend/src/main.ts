import { createPinia } from "pinia";
import "virtual:windi.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/styles.scss";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
