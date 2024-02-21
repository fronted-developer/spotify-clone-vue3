import { chillMix } from "@/store/AudioPlayer";
import { searchItem } from "@/store/Search";
import { provide, ref, watch } from "vue";
import { storeToRefs } from "pinia";


export function useSearch() {

    const searchedItem = ref([]);
    
    provide("searchedItem", searchedItem);
    
    const search = searchItem();
    const chillMixData = chillMix();
    const { query, album, playlists, tracks, artist, dataMusic, dataTrack } = storeToRefs(search);
    
    let selectedCategory = ref("");
    
    
    const emitTrack = (music, id) => {
      search.changeArtistsArray();
      chillMixData.getTrack(music, id, dataMusic.value);
    };
    
    const selectCategory = (event) => {
      setTimeout(() => {
        selectedCategory.value = event.target.dataset.value;
      }, 100);
    };
    
    watch([() => query.value], ([newQuery]) => {
      if (newQuery) {
        selectedCategory.value = 'all'
      }else{
        selectedCategory.value = ''
      }
    
      setTimeout(() => {
        search.getBestSearchedtrack(newQuery);
        search.fetchSearchRequest(newQuery);
      }, 500);
    
    });

    return {
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
      };


}