import { defineStore } from "pinia";
import { getPlaylistById } from "@/api/getPlaylistById";


export const playlistById = defineStore({
  id: "playlistById",
  state: () => ({
   playlistMusic: null,
   titleName: null,
   amountTracks: null,
   images: null,
   playlistTrack: null
  }),

  actions: {
    async fetchPlaylist(id) {
      try {
        this.playlistMusic = await getPlaylistById(id)
        console.log(this.playlistMusic);

        const {images, tracks , name} = this.playlistMusic

        this.amountTracks = tracks.items.length

        this.playlistTrack = tracks.items
  
        this.titleName = name 

        this.images = images

        this.playlistTrack.forEach((item) => {
          item.track.album.images.splice(1, 2);
        });

        this.playlistMusic.map((item) => (item.track.isActive = false));


      } catch (error) {
        console.log(`ошибка при получении плейлиста: ${error}`);
        
      }
      
    },
  },
  
});
