import { getBeatles } from "@/api/theBeatles";
import { defineStore } from "pinia";

export const beatles = defineStore({
  id: "beatlesMusic",
  state: () => ({
    images: null,
    beatlesData: null,
    beatlesTrack: null,
    titleName: null,
    amountTracks: null
  }),

  actions: {
    async fetchChillMixPlaylist() {
      this.beatlesData = await getBeatles();

      const { images, tracks , name} = this.beatlesData;

      this.beatlesTrack = tracks.items;

      this.amountTracks = tracks.items.length

      this.titleName = name

      this.beatlesTrack.forEach((item) => {
        item.track.album.images.splice(1, 2);
      });
      images.splice(1, 2);

      this.beatlesTrack.map((item) => (item.track.isActive = false));

      this.images = images;
    },
    
    
  }
});
