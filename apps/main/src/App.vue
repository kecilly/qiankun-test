<template>
  <div class="main">
    <div class="mainLeft">
      <router-link class="meunLi" to="/">首页</router-link>
      <router-link class="meunLi" to="/basic/">vue-vite</router-link>
    </div>
    <div class="mainRight">
      <router-view />
      <div id="container"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import Cookies from 'js-cookie';

onBeforeMount(() => {
  Cookies.set("main", Date.now(),{path:"/"});
})
</script>

<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
  display: flex;

  .mainLeft {
    width: 200px;
    height: 100vh;
  }

  .mainRight {
    flex: 1;
    height: 100vh;
    background: #f2f2f2;
  }

  .meunLi {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    cursor: pointer;
    display: block;
    border-bottom: 1px solid #ddd;
  }
}
</style>