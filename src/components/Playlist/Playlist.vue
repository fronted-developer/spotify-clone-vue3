<template>
  <div v-if="playlistTrack">
    <div class="color"></div>
    <div class="chill__top">
      <NavigationBarVue />
    </div>
    <PlaylistItemInfoVue
      v-for="img in images"
      :key="img.url"
      :image="img.url"
      :titleName="titleName"
      :amountTrack="amountTracks"
    />
    <div class="mix__listen">
      <div class="chill__backgroundColor"></div>
      <div class="container">
        <PlaylistMainVue />
        <div class="tracks">
          <PlaylistTrack
            v-for="(tracks, idx) in getPlaylistTrack"
            :key="idx"
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
import { playlistById } from "@/store/AudioPlayer";
import { chillMix } from "@/store/AudioPlayer";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import NavigationBarVue from "../NavigationBar/NavigationBar.vue";
import PlaylistItemInfoVue from "./PlaylistItemInfo.vue";
import PlaylistMainVue from "./PlaylistMain.vue";
import PlaylistTrack from "./PlaylistTrack.vue";
import Loader from "../Loader/Loader.vue";

const playlistMusic = playlistById();

const playlistData = chillMix()

const route = useRoute();

const { images, playlistTrack, titleName, amountTracks,  } =
  storeToRefs(playlistMusic);

const getPlaylistTrack = computed(() => playlistTrack.value);


const emitTrack = (track, id) => {
  playlistData.getTrack(track, id, playlistTrack.value)
}

onMounted(() => {
  
  playlistMusic.fetchPlaylist(route.params.id);

});
</script>

<style>
</style>