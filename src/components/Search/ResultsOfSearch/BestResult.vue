<template>
  <div class="thebest__result">
    <h1 class="thebest__result">Лучший результат</h1>
    <div class="all__result" v-for="(track, idx) in bestResult" :key="idx">
      <div class="all__thebest">
        <img
                v-lazy="img.url"
                alt=""
                class="all__thebest-img"
               v-for="(img, idx) in track.album.images.slice(0,1)" :key="idx"/>

        <div class="all__trackname">
          <h1 class="all__trackname-trackauthor" v-if="track.name.length > 15">{{ track.name.slice(0, 15) }}...</h1>
          <h1 class="all__trackname-trackauthor" v-else >{{ track.name}}</h1>
          <span class="all__trackname-span">трек</span>
          <span class="all__dot-span">*</span>
          <span class="all__trackname-trackname">After</span>
        </div>
      </div>
      <img src="@/assets/img/PlayBtn.svg" alt="" class="all__result-img" />
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  bestReslutTrack: {
    type: Object,
  },
});

const bestResult = computed(() =>
  props.bestReslutTrack?.tracks.items.slice(
    0,
    props.bestReslutTrack?.tracks.items.length - 19
  )
);

const bestImg = computed(() => props.bestReslutTrack.tracks.items.images.slice(0,1))

</script>

<style>
</style>