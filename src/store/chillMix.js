import { defineStore } from "pinia";
import { getPlaylist } from "@/api/chillMix";



export const chillMixMusic = defineStore({
  id: "chillMixMusic",
  state: () => ({
    images: null,
    chillMixMovie: null,
    chillMusics: null,
    titleName: null,
    amountTracks: null
  }),

  actions: {
    async fetchChillMixPlaylist() {
      try {
        this.chillMixMovie = await getPlaylist();

        const { images, tracks , name} = this.chillMixMovie;
  
        this.chillMusics = tracks.items;
  
        
  
        this.amountTracks = tracks.items.length
  
        this.titleName = name
  
        this.chillMusics.forEach((item) => {
          item.track.album.images.splice(1, 2);
        });
  
        this.chillMusics.map((item) => (item.track.isActive = false));
  
        this.images = images;
      } catch (error) {
        console.log('ошибка');
      }
     
    },
  },
  
});
