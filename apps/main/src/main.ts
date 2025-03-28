import "./assets/main.css";

import { createApp, handleError } from "vue";
import { createPinia } from "pinia";
import { addGlobalUncaughtErrorHandler, registerMicroApps, start  } from "qiankun";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

console.log(import.meta.env.VITE_ENTRY_BASIC);

registerMicroApps([
  {
    name: "basic",
    entry: import.meta.env.VITE_ENTRY_BASIC || "/basic/",
    container: "#container",
    activeRule: "/basic",
    props: {
      msg: "我是主应用main",
      domain: "http://localhost:5000",
    },
  },
]);

start({
  prefetch: 'all',//预加载
   singular: false, // 允许多个子应用同时存在
  sandbox: {
    experimentalStyleIsolation:true//开启沙箱模式
  }
});
/**
 * 添加全局异常捕获
 */
addGlobalUncaughtErrorHandler((handleError) => {
  console.error("qiankun 全局错误:",handleError);
})

app.mount("#app");