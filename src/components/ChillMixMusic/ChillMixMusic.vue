<template>
 
    <div v-if="chillTracks">
      <div class="color"></div>
      <div class="chill__top">
        <NavigationBarVue />
      </div>
      <ChillMixItemInfoVue
        v-for="img in chill.images"
        :key="img.url"
        :image="img.url"
      />
      <div class="mix__listen">
        <div class="chill__backgroundColor"></div>
        <div class="container">
          <ChillMixMain />
          <div class="tracks">
            <ChillMixListenTracks
              v-for="(tracks, idx) in chillTracks"
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
    <LoaderVue v-else />

</template>

<script setup>
import NavigationBarVue from "../NavigationBar/NavigationBar.vue";
import ChillMixItemInfoVue from "./ChillMixItemInfo.vue";
import ChillMixListenTracks from "./ChillMixListenTracks.vue";
import ChillMixMain from "./ChillMixMain.vue";
import { chillMix } from "@/store/AudioPlayer";
import { chillMixMusic } from "@/store/chillMix";
import { computed, defineAsyncComponent } from "vue";
import { storeToRefs } from "pinia";
import LoaderVue from "../Loader/Loader.vue";


const chillMixPlaylist = chillMix();
let chill = chillMixMusic();
chill.fetchChillMixPlaylist();

const {chillMusics} = storeToRefs(chill);

const chillTracks = computed(() => chillMusics.value);

const emitTrack = (music, id) => {
  chillMixPlaylist.getTrack(music, id, chillMusics.value);
};
</script>

<style>

</style>