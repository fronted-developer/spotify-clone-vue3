import { defineStore } from "pinia";

import { getLifeIsMovie } from "@/api/myLifeIsMovie";


export const myLifeIsMovie = defineStore({
  id: "myLifeisMovie",
  state: () => ({
    images: null,
    dataMovieMusic: null,
    movieTrack: null,
    titleName: null,
    amountTracks: null
  }),

  actions: {
    async fetchMoviePlaylist() {
      try {
        this.dataMovieMusic = await getLifeIsMovie();

      const { images, tracks , name} = this.dataMovieMusic;

      this.movieTrack = tracks.items;

      

      this.amountTracks = tracks.items.length

      this.titleName = name

      this.movieTrack.forEach((item) => {
        item.track.album.images.splice(1, 2);
      });

      this.movieTrack.map((item) => (item.track.isActive = false));

      this.images = images;
      } catch (error) {
        console.log(`ошибка: ${error}`);
      }
      
    },
  },
  
});
