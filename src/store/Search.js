import { defineStore } from "pinia";

import { searchCategory } from "@/api/searchCategory";
import { searchTracks } from "@/api/getSearchedTrack";

export const searchItem = defineStore({
  id: "search",
  state: () => ({
    query: "",
    dataSearch: null,
    album: null,
    tracks: null,
    playlists: null,
    artist: null,
    bestResultTracks: null,
    bestResultImage: null,
    dataMusic: [],
    bestResultTrack: null,
    dataTrack: null,
  }),

  actions: {
    async fetchSearchRequest(queryText, category) {
      this.dataSearch = await searchCategory({
        query: queryText,
        category: category,
      });

      const { tracks, albums, playlists, artists } = this.dataSearch;

      this.tracks = tracks;
      this.album = albums;
      this.playlists = playlists;
      this.artist = artists;
    },

   async getBestSearchedtrack(queryText){
    try {
      this.dataTrack = await searchTracks({ query: queryText });
    } catch (error) {
      console.log('ошибка при поиске');
    }
    },

    changeArtistsArray() {
      this.dataMusic = [];
      this.tracks.items.forEach((element) => {
        this.dataMusic.push({ track: element });
      });
    },
  },
});
