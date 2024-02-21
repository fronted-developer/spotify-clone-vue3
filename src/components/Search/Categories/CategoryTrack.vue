<template>
  <div class="content__items" @click="emitTrack(track, idx)">
    <div class="content__items-backgrund"></div>
    <div class="content__track">
      <div class="content__id">
        <div class="db">
          <h4
            class="content__track-turnOnTrack"
            :class="{ active: track.isActive }"
          >
            {{ idx }}
          </h4>
          <div class="img">
            <img
              :src="img.url"
              alt=""
              class="track__img"
              v-for="(img, index) in trackImg"
              :key="index"
            />
          </div>
        </div>
      </div>

      <div class="content__nameTrack">
        <h4
          class="content__nameTrack-songNames"
          v-if="trackName.length > 38"
          :class="{ active: track.isActive }"
        >
          {{ trackName.slice(0, 35) }}...
        </h4>
        <h4
          class="content__nameTrack-songNames"
          v-else
          :class="{ active: track.isActive }"
        >
          {{ trackName }}
        </h4>
        <div class="artists">
          <span
            class="content__nameTrack-artistNames"
            v-for="(artist, index) in tracks"
            :key="index"
          >
            {{ artist.name }}
            <span v-if="index < tracks.length - 1">, </span>
          </span>
        </div>
      </div>
    </div>

    <h4 class="content__items-albumName" v-if="trackAlbumName.length > 28">
      {{ trackAlbumName.slice(0, 28) }}...
    </h4>

    <h4 class="content__items-albumName" v-else>{{ trackAlbumName }}</h4>

    <img src="@/assets/img/Heart.svg" alt="" class="content__like-img" />
    <div class="content__like">
      <span class="content__like-minutes"
        >{{ Math.floor(track.duration_ms / (60 * 1000)) }}:{{
          Math.floor(track.duration_ms / 1000) % 60
        }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  trackName: {
    type: String,
  },
  trackAlbumName: {
    type: String,
  },
  track: {
    type: Object,
  },
  trackImage: {
    type: Array,
  },
  idx: {
    type: Number,
  },
  tracks: {
    type: Array,
  },
});

const emit = defineEmits(["emit-track"]);

const emitTrack = (music, id) => {
  emit("emit-track", music, id);
};

const trackImg = computed(() =>  props.trackImage.slice(2,3));


</script>

<style>
</style>