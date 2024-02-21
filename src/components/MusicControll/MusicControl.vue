<template>
  <img
    :src="artisImg.url"
    class="playlist__image"
    v-for="(artisImg, idx) in artistsImage"
    :key="idx"
  />
  <div class="chill__footer">
    <div class="chill__footer-trackNames">
      <div class="chill__footer-trackNames-name">
        <div class="artist">
          <h3 class="chill__footer-trackNames-title" ref="trackNameElement">
            {{ songName }}
          </h3>
          <span
            class="authorName"
            v-for="(name, index) in artistName"
            :key="index"
          >
            <span class="chill__footer-trackNames-authorNames"
              >{{ name.name }}
              <span v-if="index < artistName.length - 1">, </span></span
            >
          </span>
        </div>
      </div>
      <img
        src="@/assets/img/GreenHeart.svg"
        alt=""
        class="chill__footer-trackNames-img"
      />
    </div>
    <div class="chill__playbtns">
      <div class="chill__playbtns-images">
        <img
          src="@/assets/img/Shuffle.svg"
          alt=""
          class="chill__playbtns-shuffly"
        />
        <img
          src="@/assets/img/TrackSkipBtn.svg"
          alt=""
          class="chill__playbtns-back"
          @click="chillMusic.prevSong"
        />
        <button
          class="chill__playbtns-playBtn"
          @click="chillMusic.pauseOrPlay()"
        >
          <img
            src="@/assets/img/pauseBtn.svg"
            alt=""
            class="chill__playbtns-playBtn-svg"
            v-if="chillMusic.isPlaing"
          />
          <img
            src="@/assets/img/play.svg"
            alt=""
            class="chill__playbtns-playBtn-svg"
            v-else
          />
        </button>

        <img
          src="@/assets/img/NextTrackScipBtn.svg"
          alt=""
          class="chill__playbtns-back"
          @click="chillMusic.nextSong"
        />
        
        <img
          src="@/assets/img/Repeat.svg"
          alt=""
          class="chill__playbtns-repeat-svg"
        
        @click="chillMusic.startFromFirstTrack()" />
      </div>
      <div
        class="chill__valume"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
      >
        <span class="chill__valume-currentSec">{{ isTrackTimeCurrent }}</span>
        <div class="valume-width" ref="seekerContainer">
          <div class="valume">
            <input
              type="range"
              class="chill__valume-range"
              max="100"
              value="0"
              ref="input"
              v-model="inputRange"
            />
            <div class="valume_content"></div>
            <div class="valume_content1" :style="`width: ${width}%;`"></div>
          </div>
        </div>
        <span class="chill__valume-totalMinute" ref="chill"
          >{{ munites }}:{{ seconds }}</span
        >
      </div>
    </div>

    <div class="chill__valum">
      <img src="@/assets/img/Valume.svg" alt="" class="chill__valume-valume" />
      <input type="range" class="chill__valume-valumeControl" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { chillMix } from "@/store/AudioPlayer";
import { storeToRefs } from "pinia";

const chillMusic = chillMix();
let isHover = ref(false);
const input = ref(null);
const trackNameElement = ref(null);
const seekerContainer = ref(null);

const {
  width,
  inputRange,
  audio,
  artistsImage,
  songName,
  artistName,
  munites,
  seconds,
  isTrackTimeCurrent,
} = storeToRefs(chillMusic);




onMounted(() => {
  console.log(seekerContainer.value);

  seekerContainer.value.addEventListener("click", (e) => {
    const clickPosition =
      (e.pageX - seekerContainer.value.offsetLeft) /
      seekerContainer.value.offsetWidth;
    const time = audio.value.duration * clickPosition;

    audio.value.currentTime = time;
    inputRange.value = (100 / audio.value.duration) * audio.value.currentTime;
  });

  const handleMouseMove = () => {
    let x = inputRange.value;
    let color =
      "linear-gradient(90deg, rgb(117,252, 117)" +
      x +
      "%, rgb(95,95,95)" +
      x +
      "%)";
    input.value.style.background = color;
  };
  input.value.addEventListener("mousemove", handleMouseMove);
  input.value.addEventListener("mouseenter", handleMouseMove);
  input.value.addEventListener("touchmove", handleMouseMove);
  input.value.addEventListener("touchend", handleMouseMove);
  input.value.addEventListener("click", handleMouseMove);



  trackNameElement.value.addEventListener("animationiteration", () => {

    setTimeout(() => {
    
      trackNameElement.value.classList.remove("scroll-animation");

      setTimeout(() => {
        trackNameElement.value.classList.add("scroll-animation");
      }, 0);
    }, 2000);
  });


  setTimeout(() => {
    trackNameElement.value.classList.add("scroll-animation");
  }, 0);
});

</script>

<style>
.artist {
  overflow: hidden;
  width: 200px;
  white-space: nowrap;
  margin-left: 2px;
}



@keyframes scrollTrack {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>