import { defineStore } from "pinia";
import { getAlbumById } from "@/api/getAlbumById";

export const albumById = defineStore({
  id: "albumById",
  state: () => ({
    dataAlbum: null,
    albumType: null,
    images: null,
    name: null,
    totalTrack: null,
    albumTracks: null,
    artists: null,
    dataMusic: null,
  }),

  actions: {
    async fetchAlbumbyId(id) {
      try {
        this.dataAlbum = await getAlbumById(id);

        const { album_type, images, name, total_tracks, tracks, artists } =
          this.dataAlbum;

        this.albumType = album_type;

        this.images = images.splice(0, 1);

        this.name = name;

        this.artists = artists;

        this.totalTrack = total_tracks;
        this.albumTracks = tracks.items;

        this.albumTracks.map((item) => (item.track.isActive = false));
      } catch (error) {
        console.log(`ошибка при получении альбома: ${error}`);
      }
    },
    changeArtistsArray() {
      this.dataMusic = [];
      this.albumTracks.forEach((element) => {
        this.dataMusic.push({ track: element });
      });
    },
  },
});
