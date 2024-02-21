<template>
  <div class="content__items" ref="cont" @click="playAlbumTrack(track, id)">
    <div class="content__items-backgrund"></div>
    <div class="content__track">
      <div class="content__id">
        <div class="db">
          <h4 class="content__track-turnOnTrack" :class="{'active': track.isActive}">{{ id }}</h4>
        </div>
      </div>
      <div class="content__nameTrack">
        <h4 class="content__nameTrack-songNames" v-if="name.length > 35">
          {{ name.slice(0, 35) }}...
        </h4>
        <h4 class="content__nameTrack-songNames" v-else :class="{'active': track.isActive}">{{ name }}</h4>

         <div class="artists">
          <span
            class="content__nameTrack-artistNames"
            v-for="(art, index) in artists" :key="index"
          >
            {{ art.name }}
          
          </span>
        </div> 
      </div>
    </div>
    <img src="@/assets/img/Heart.svg" alt="" class="content__like-img" />
    <div class="content__like">
      <span class="content__like-minutes">{{ Math.floor(track.duration_ms / (60 * 1000))}}:{{ Math.floor(track.duration_ms / 1000) % 60 }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';


const props = defineProps({
    name: {
        type: String
    },
    albumsArtist: {
        type: Array
    },
    artist: {
        type: Object
    },
    id: {
        type: Number
    },
    artists: {
      type: Array
    },
    track: {
      type: Object
    }
})

const emit = defineEmits(['play-album-track'])

const playAlbumTrack = (track, id) => {
  emit('play-album-track', track, id)
}


</script>

<style>

</style>