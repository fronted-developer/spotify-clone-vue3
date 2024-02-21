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
        <h1 class="playlist__trackInfoContainer-title">{{ names }}</h1>
      </div>
      <div class="playlist__trackDetails">
        
        <br />
        <span class="playlist__trackDetails-hour">{{ amountTrack }} songs, 2hr 01 min</span>
       
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";


const props = defineProps({
  image: {
    type: String
  },
  titleName: {
    type: String
  },
  amountTrack: {
    type: String
  }
})

const names = computed(() => {
  if (props.titleName.length > 13) {
   return props.titleName.slice(0, 13) + '...'
  }
  return props.titleName
})

</script>

<style>

</style>