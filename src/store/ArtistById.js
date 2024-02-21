import { defineStore } from "pinia";
import { getArtistById } from "@/api/getArtistById";

export const artistbyId = defineStore({
  id: "artistById",
  state: () => ({
    artistData: null,
    images: null,
    type: null,
    name: null
  }),

  actions: {
    async fetchArtistId(id) {
      try {
       this.artistData = await getArtistById(id)
       const {images, name, type} = this.artistData

       images.splice(1, 2);
       
       this.images = images
       this.name = name
       this.type = type

      } catch (error) {
        console.log(`ошибка при получении плейлиста: ${error}`);
      }
    },
   
    
  },
});
