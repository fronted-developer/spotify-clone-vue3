<template>
  <div class="div" v-if="movieMus">
    <div class="color"></div>
    <div class="chill__top">
      <NavigationBarVue />
    </div>
    <MusicLifeItemInfo 
    v-for="img in movieMusic.images"
    :key="img.url"
    :image="img.url"
    :titleName="titleName"
    :amountTracks="amountTracks"
    />
    <div class="mix__listen">
      <div class="chill__backgroundColor"></div>
      <div class="container">
        <MusicMovieMain />
        <div class="tracks">
          <MusicLifeListenTracks
            v-for="(tracks, idx) in movieMus"
            :key="tracks.track.track_number"
            :name="tracks.track.name"
            :albumName="tracks.track.album.name"
            :tracks="tracks.track.artists"
            :artist="tracks.track"
            :id="idx + 1"
            @emit-track="emitTrack"
          />
        </div>
      </div>
    </div>
  </div>
  <Loader v-else/>
</template>

<script setup>
import NavigationBarVue from "../NavigationBar/NavigationBar.vue";
import MusicLifeItemInfo from "./MusicLifeItemInfo.vue";
import MusicLifeListenTracks from "./MusicLifeListenTracks.vue";
import MusicMovieMain from "./MusicMovieMain.vue";
import { myLifeIsMovie } from "@/store/MylifeIsMovie";
import Loader from "../Loader/Loader.vue";
import { computed, onMounted, ref, watch } from "vue";
import { chillMix } from "@/store/AudioPlayer";
import { storeToRefs } from "pinia";

const chillMixPlaylist = chillMix();
let movieMusic = myLifeIsMovie();
 
const {titleName} = storeToRefs(movieMusic)

const movieMus = computed(() => movieMusic.movieTrack);



const emitTrack = (music, id) => {

  chillMixPlaylist.getTrack(music, id, movieMusic.movieTrack)
  
}

onMounted(() => {
 
movieMusic.fetchMoviePlaylist();
})

// watch(() =>  audio.value.ended, (time) => {
  // chillMixPlaylist.endedTrack()
  // if ( audio.ended) {
    
  // }
// })




</script>

<style>
</style>