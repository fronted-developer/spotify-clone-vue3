<template>
  <div>
    <div class="color"></div>
    <div class="chill__top">
      <NavigationBarVue />
    </div>
    <AlbumInfo
      v-for="(image, idx) in img"
      :key="idx"
      :url="image.url"
      :name="name"
      :albumType="albumType"
      :totalTracks="totalTrack"
      :artists="artists"
    />
    <div class="mix__listen">
      <div class="chill__backgroundColor"></div>
      <div class="container">
        <AlbumMain />
        <div class="tracks">
          <AlbumTrack
            v-for="(track, idx) in albumTrack"
            :key="idx"
            :name="track.name"
            :albumsArtist="track.artists"
            :artist="track"
            :id="idx + 1"
            :artists="artists"
            :track="track"
            @play-album-track="playAlbumTrack"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import NavigationBarVue from "../NavigationBar/NavigationBar.vue";
import AlbumInfo from "./AlbumInfo.vue";
import AlbumMain from "./AlbumMain.vue";
import AlbumTrack from "./AlbumTrack.vue";
import { albumById } from "@/store/AlbumById";
import { storeToRefs } from "pinia";
import { chillMix } from "@/store/AudioPlayer"

const route = useRoute();
const playlistData = chillMix()
const getAlbum = albumById();

const { albumTracks, name, albumType, images, totalTrack, artists, dataMusic} =storeToRefs(getAlbum);

const albumTrack = computed(() => albumTracks.value);
const img = computed(() => images.value);

const playAlbumTrack = (track, id ) => {
  getAlbum.changeArtistsArray()
  playlistData.getTrack(track, id, dataMusic.value)
}

onMounted(() => {
  getAlbum.fetchAlbumbyId(route.params.id);
});
</script>

<style>
</style>