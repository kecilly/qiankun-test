import "./public-path";

import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import App from "./App.vue";
import router from "./router";

let app: any = null;

const render = (props: any = {}) => {
  const { container } = props;
  app = createApp(App);
  app.use(router);
  // app.mount(container ? container.querySelector("#container") : "#container");
  // 修改此处的挂载逻辑
  const mountElement = container
    ? container.querySelector("#app")
    : document.querySelector("#app");
  if (!mountElement) {
    console.error("挂载点不存在:", container ? "#app in container" : "#app");
    return;
  }

  app.mount(mountElement);
};

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
} else {
  renderWithQiankun({
    mount(props) {
      render(props);
    },
    bootstrap() {
      console.log("--bootstrap");
    },
    update() {
      console.log("--update");
    },
    unmount() {
      console.log("--unmount");
      app.unmount();
      app = null;
    },
  });
}
