<template>
  <div class="app">
    <div class="main">
      <SideBarVue />
      <div class="view">
        <router-view />
      </div>
    </div>
    <div class="music__control">
      <MusicControl />
    </div>
  </div>
</template>

<script setup>
import SideBarVue from "./components/SideBar/SideBar.vue";
import MusicControl from "./components/MusicControll/MusicControl.vue";
</script>

<style>
.view {
  position: relative;
  width: 100%;
}

.app {
  height: 100%;
}
</style>