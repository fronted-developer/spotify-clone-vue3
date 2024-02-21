<template>
  <div class="all__track">
    <h1 class="all__track-title">Треки</h1>
    <div class="tracks__all" v-for="(track, idx) in bestTrack" :key="idx">
      <div class="tracks__name">
        <div class="tracks__name-contentImg">
          <img
            :src="img.url"
            alt=""
            class="tracks__name-img"
            v-for="(img, idx) in track.album.images.slice(0,1)"
            :key="idx"
          />
        </div>
        <div class="all__name">
          <h4 class="all__name-title">{{ track.name }}</h4>
          <span class="all__name-span">After</span>
        </div>
      </div>
      <h4 class="tracks__name-duration">{{ Math.floor(track.duration_ms / (60 * 1000))}}:{{ Math.floor(track.duration_ms / 1000) % 60 }}</h4>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  trackName: {
    type: Object,
  },
  query: {
    type: String,
  },
});

const bestTrack = computed(() => {
  return props.trackName?.tracks.items.slice(
    0,
    props.trackName.tracks.items.length - 16
  );
});
</script>

<style>
</style>