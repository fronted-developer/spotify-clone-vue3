<template>
  <div class="playlist__albumName">
    <img
      :src="image"
      alt=""
      class="playlist__info-img"
    />
    <div class="playlist">
      <div class="playlist__trackInfoContainer">
        <h4 class="playlist__trackInfoContainer-playlist">PLAYLIST</h4>
        <h1 class="playlist__trackInfoContainer-title">{{ titleName }}</h1>
      </div>
      <div class="playlist__trackDetails">
        <span class="playlist__trackDetails-artists"
          >Julia Wolf, ayokay, Khalid and more</span
        >
        <br />
        <span class="playlist__trackDetails-hour">{{ amountTracks }} songs, 2hr 01 min</span>
       
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  image: {
    type: String
  },
  titleName: {
    type: String
  },
  amountTracks: {
    type: Number
  }

})






</script>

<style>
</style>