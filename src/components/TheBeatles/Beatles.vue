<template>
  <div class="div" v-if="beatlesMus">

    <div class="color"></div>
    <div class="chill__top">
      <NavigationBarVue />
    </div>
    <BeatlesInfo 
    v-for="img in beatlesMusic.images"
    :key="img.url"
    :image="img.url"
    :titleName="titleName"
    :amountTracks="amountTracks"
    />
    <div class="mix__listen">
      <div class="chill__backgroundColor"></div>
      <div class="container">
        <BeatlesMain />
        <div class="tracks">
          <BeatlesListenTracks
            v-for="(tracks, idx) in beatlesMus"
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
import BeatlesInfo from "./BeatlesInfo.vue";
import BeatlesListenTracks from "./BeatlesListenTracks.vue";
import BeatlesMain from "./BeatlesMain.vue";
import Loader from "../Loader/Loader.vue";
import { chillMix } from "@/store/AudioPlayer";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { beatles } from "@/store/Beatles";



const chillMixPlaylist = chillMix();

const beatlesMusic = beatles()

beatlesMusic.fetchChillMixPlaylist()

const {titleName, amountTracks , beatlesData, beatlesTrack} = storeToRefs(beatlesMusic)


const beatlesMus = computed(() => {
  return beatlesMusic.beatlesTrack;
});



const emitTrack = (music, id) => {

  chillMixPlaylist.getTrack(music, id, beatlesTrack)
  
}




</script>

<style>
</style>