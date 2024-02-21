import { defineStore } from "pinia";
import { getPlaylist } from "@/api/chillMix";
import { getTrack } from "@/api/getTrack";

export const chillMix = defineStore({
  id: "chillMix",
  state: () => ({
    currentTrack: null,
    nextSongs: null,
    chillMixTracks: null,
    track: null,
    images: null,
    audio: null,
    isPlaing: false,
    currentTime: null,
    duration: null,
    width: null,
    inputRange: null,
    munites: null,
    seconds: null,
    currentSongsId: 0,
    addActive: null,
    artistsImage: null,
    artistName: null,
    songName: null,
    isTrackTimeCurrent: null,
  }),

  actions: {
    async fetchChillMixPlaylist() {
      this.chillMixTracks.forEach((item) => {
        item.track.album.images.splice(1, 2);
      });

      this.chillMixTracks.map((item) => (item.track.isActive = false));

      this.images = images;
    },

    async startToPlayMusic() {
      if (this.audio && this.audio.src) {
        this.audio.pause();
        this.audio.src = "";
        this.isPlaing = false;
      }

      this.audio = new Audio();
      
      this.audio.src = await this.track.preview_url;

      setTimeout(() => {
        this.audio.play();
        this.isPlaing = true;
      }, 100);
    },

    async getTrack(music, index, tracksData) {
      this.track = await getTrack(music.id);
      this.chillMixTracks = tracksData;
      this.startToPlayMusic();
      this.getDuration(this.audio);
      this.getCurrentSec();
      this.calculateDuration(music.duration_ms);
      this.addActiveToSongsName(music);
      this.setMusicInfo(music, index);
      this.endedTrack();
    },

    setMusicInfo(music, index) {
      this.currentTrack = music;
      this.artistsImage = music.album?.images;
      this.artistName = music.artists;
      this.songName = music.name;
      this.currentSongsId = index - 1;
    },

    getDuration() {
      this.audio.addEventListener("loadeddata", () => {
        this.duration = this.audio.duration;
      });
    },

    addActiveToSongsName(music) {
      this.chillMixTracks.forEach((item) => (item.track.isActive = false));
      music.isActive = true;
    },

    getCurrentSec() {
      this.audio.addEventListener("timeupdate", ({ target }) => {
        const { currentTime } = target;

        this.width = (currentTime * 100) / this.duration;
        var minutes = Math.floor(this.audio.currentTime / 60);
        var seconds = Math.floor(this.audio.currentTime - minutes * 60);
        this.isTrackTimeCurrent =
          minutes + ":" + seconds.toString().padStart(2, "0");
      });
    },

    calculateDuration(duration) {
      this.munites = Math.floor(duration / (60 * 1000));

      this.seconds = Math.floor((duration / 1000) % 60);
    },

    pauseOrPlay() {
      this.isPlaing = !this.isPlaing;
      if (!this.isPlaing && this.audio) {
        this.audio.pause();
      } else if (this.isPlaing && this.audio) {
        this.audio.play();
      }
    },

    async nextSong() {
      this.currentSongsId++;
      await this.rewindTrack();
      this.endedTrack();
    },

    async prevSong() {
      this.currentSongsId--;
      await this.rewindTrack();
      this.endedTrack();
    },

    async rewindTrack() {
      if (this.currentSongsId < this.chillMixTracks.length - 1) {
        let track = await getTrack(
          this.chillMixTracks[this.currentSongsId].track.id
        );

        let finedTrackToRewind = await this.chillMixTracks.find(
          (item) => item.track.id === track.id
        );

        this.chillMixTracks.forEach((item) => (item.track.isActive = false));

        finedTrackToRewind.track.isActive = true;

        this.artistsImage = finedTrackToRewind.track.album?.images;
        this.songName = finedTrackToRewind.track.name;

        this.track = await getTrack(finedTrackToRewind.track.id);
        this.startToPlayMusic();
        this.getCurrentSec();
      }
    },

    endedTrack() {
      this.audio.addEventListener("ended", async () => {
        this.currentSongsId++;
        this.currentMusicToRewind =
          this.chillMixTracks[this.currentSongsId].track;

        await this.rewindTrack();

        this.endedTrack();
      });
    },

    async startFromFirstTrack() {
      this.currentSongsId = 0;
      await this.rewindTrack();
      this.endedTrack();
    },
  },
  getters: {
    addActiveClass() {
      if (this.track && this.isPlaing) {
        return this.track.id === this.currentTrack.id ? "active" : "";
      }
    },
  },
});
