<template>
  <div class="playlist__albumName">
    <img v-lazy="url" alt="" class="playlist__info-img" />
    <div class="playlist">
      <div class="playlist__trackInfoContainer">
        <h4 class="playlist__trackInfoContainer-playlist">{{ albumType }}</h4>
        <h1 class="playlist__trackInfoContainer-title">{{ names }}</h1>
      </div>
      <div class="playlist__trackDetails">
        <span class="playlist__trackDetails-artists"
         v-for="(art, index) in artists" :key="index">{{ art.name }}</span
        >
        <br />
        <span class="playlist__trackDetails-hour"> {{ totalTracks }} songs, 2hr 01 min</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"


const props = defineProps({
    url: {
        type: String
    },
    name: {
      type: String
    },
    albumType: {
      type: String
    },
    totalTracks: {
      type: Number
    },
    artists: {
      type: Array
    }
})

const names = computed(() => {
  if (props.name.length > 13) {
   return props.name.slice(0, 13) + '...'
  }
  return props.name
})
</script>

<style>
</style>