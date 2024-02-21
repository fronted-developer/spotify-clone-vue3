<template>
  <div class="content__items" ref="cont" @click="emitTrack(artist, id)">
    <div class="content__items-backgrund"></div>
    <div class="content__track">
      <div class="content__id">
        <div class="db">
          <h4
            class="content__track-turnOnTrack"
            :class="{ active: artist.isActive }"
          >
            {{ id }}
          </h4>
          <div class="img">
            <img
              v-lazy="img.url"
              alt=""
              class="track__img"
              v-for="(img, index) in artist.album.images"
              :key="index"
            />
          </div>
        </div>
      </div>

      <div class="content__nameTrack">
        <h4
          class="content__nameTrack-songNames"
          v-if="name.length > 38"
          :class="{ active: artist.isActive }"
        >
          {{ name.slice(0, 35) }}...
        </h4>
        <h4
          class="content__nameTrack-songNames"
          v-else
          :class="{ active: artist.isActive }"
        >
          {{ name }}
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

    <h4 class="content__items-albumName" v-if="albumName.length > 28">
      {{ albumName.slice(0, 28) }}...
    </h4>
    <h4 class="content__items-albumName" v-else>{{ albumName }}</h4>

    <img src="@/assets/img/Heart.svg" alt="" class="content__like-img" />
    <div class="content__like">
      <span class="content__like-minutes">{{ Math.floor(artist.duration_ms / (60 * 1000))}}:{{ Math.floor(artist.duration_ms / 1000) % 60 }}</span>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  name: {
    type: String,
  },
  id: {
    type: Number,
  },
  albumName: {
    type: String,
  },
  artist: {
    type: Object,
  },
  tracks: {
    type: Object,
  },
  munutes: {
    type: Number,
  },
  seconds: {
    type: Number,
  }
});

const emit = defineEmits(["emit-track"]);

const emitTrack = (music, id) => {
  emit("emit-track", music, id);
};


  
</script>
<style>
.h1 {
  color: white;
}
</style>