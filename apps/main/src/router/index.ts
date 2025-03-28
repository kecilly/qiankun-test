import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      // children: [
      //   {
      //     path: "/:catchAll(.*)", // 通配符路由（关键）
      //     component: () => import("@/components/EmptyContainer.vue"), // 空白容器组件
      //   },
      // ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    // {
    //   path: "/basic",
    //   component:()=>import("@/components/EmptyContainer.vue")
    // }
  ],
});

export default router
