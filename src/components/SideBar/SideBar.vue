<template>
  <div class="side__box">
    <div class="side">
      <div class="menu__content">
        <router-link to="/">
          <div class="side__menu" @click="searchFill = false">
            <img
              src="@/assets/img/Home.svg"
              alt=""
              class="side__menu-img"
              v-if="searchFill"
            />
            <img
              src="@/assets/img/HomeFill.svg"
              alt=""
              class="side__menu-img"
              v-else
            />
            <h4 class="side__menu-title">Home</h4>
          </div>
        </router-link>
        <router-link to="/SearchPage">
          <div class="side__menu" @click="searchFill = true">
            <img
              src="@/assets/img/Search.svg"
              alt=""
              class="side__menu-img"
              v-if="!searchFill"
            />
            <img
              src="@/assets/img/SearchFill.svg"
              alt=""
              class="side__menu-img"
              v-else
            />
            <h4 class="side__menu-title">Search</h4>
          </div>
        </router-link>
        <div class="side__menu">
          <img src="@/assets/img/Library.svg" alt="" class="side__menu-img" />
          <h4 class="side__menu-title">Your Library</h4>
        </div>
      </div>

      <div class="playlist__menu">
        <div class="playlist__icon">
          <img
            src="@/assets/img/createPlayList.svg"
            alt=""
            class="playlist__icon-img"
          />
          <h4 class="playlist__icon-title">Create Playlist</h4>
        </div>
        <div class="playlist__icon">
          <img
            src="@/assets/img/likedSong.svg"
            alt=""
            class="playlist__icon-img"
          />
          <h4 class="playlist__icon-likeSong">Liked Songs</h4>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

let searchFill = ref(false);

</script>

<style>
</style>