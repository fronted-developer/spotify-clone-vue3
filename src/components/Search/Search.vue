<template>
  <div class="search__item">
    <searchHeaderVue :query="query" />
  </div>
  <div class="searched">
    <div class="search">
      <SelectCategoryVue @category-selected="selectCategory" v-if="query" />
      <div class="best-result" v-if="selectedCategory == 'all' && query && dataTrack">
        <BestResult :bestReslutTrack="dataTrack" />

        <BestResultTracks :trackName="dataTrack" :query="query" />
      </div>
      <div class="search" v-show="!query && searchedItem.length">
       

          <SearchItemVue />
     
      </div>

      <div v-if="selectedCategory === 'track'" class="track">
        <CategoryTrackVue
          v-for="(track, idx) in tracks?.items"
          :key="idx"
          :trackName="track.name"
          :track="track"
          
          :trackAlbumName="track.album.name"
          :tracks="track.album.artists"
          :trackImage="track.album.images"
          :idx="idx + 1"
          @emit-track="emitTrack"
        />
      </div>

      <template v-if="selectedCategory === 'album'">
        <div class="category__perfomers">
          <CategoryAlbum
            v-for="(albums, i) in album?.items"
            :key="i"
            :albumName="albums.name"
            :id="albums.id"
            :albumId="albums.id"
            :type="albums.type"
            :albumsImages="albums.images"
          />
        </div>
      </template>

      <div v-if="selectedCategory === 'artist'" class="category__perfomers">
        <CategoryPerfomersVue
          v-for="(perfomers, index) in artist?.items"
          :key="index"
          :artistName="perfomers.name"
          :artistId="perfomers.id"
          :id="perfomers.id"
          :type="perfomers.type"
          :artistsImage="perfomers.images"
          :artistData="artist"
        />
      </div>
      <div class="category__playlist" v-if="selectedCategory === 'playlist'">
        <CategoryPlaylistVue
          v-for="(playlist, idx) in playlists.items"
          :key="idx"
          :playlistName="playlist.name"
          :playlistImage="playlist.images"
          :type="playlist.type"
          :id="playlist.id"
          :playlistDescription="playlist.description"
          :playlistId="playlist.id"
          :playlistType="playlist.type"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import BestResultTracks from "./ResultsOfSearch/BestResultTracks.vue";
import SelectCategoryVue from "./ResultsOfSearch/SelectCategory.vue";
import SearchItemVue from "./ResultsOfSearch/SearchedItem.vue";
import searchHeaderVue from "./ResultsOfSearch/searchHeader.vue";
import BestResult from "./ResultsOfSearch/BestResult.vue";
import CategoryTrackVue from "./Categories/CategoryTrack.vue";
import CategoryAlbum from "./Categories/CategoryAlbum.vue";
import CategoryPerfomersVue from "./Categories/CategoryPerfomers.vue";
import CategoryPlaylistVue from "./Categories/CategoryPlaylist.vue";
import {useSearch} from '@/composables/useSearch'
const {
  query,
  album,
  playlists,
  tracks,
  artist,
  dataMusic,
  dataTrack,
  selectedCategory,
  searchedItem,
  emitTrack,
  selectCategory,
} = useSearch();
</script>



<style>
.category__ul {
  display: flex;
}
</style>