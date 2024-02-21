<template>
  <router-link :to="`/playlist/${id}`">
    <div class="searched-item" @click="saveSearcheditem({img: playlistImage, name: playlistName, type: type, id: id})">
      <div class="color-item"></div>
      <div class="searched-card">
        
        <template v-for="(img, idx) in playlistImg" :key="idx">
          <img v-lazy="img.url" alt="" class="searched-item-img" />
        </template>
  
        <div class="searched-titles">
          <h2 class="searched-title" v-if="playlistName.length > 13">{{playlistName.slice(0,13) }}...</h2>
          <h2 class="searched-title" v-else >{{playlistName}}</h2>
          <span class="searched-title-span">{{ playlistType }}</span>
        </div>
      </div>
      <img src="@/assets/img/playBtn.svg" alt="" class="searched-item-images" /> 
    </div>
  </router-link>
</template>

<script setup>
import { computed, defineProps, inject } from "vue";

const props = defineProps({
  playlistName: {
    type: String,
  },
  playlistImage: {
    type: Array,
  },
  playlistDescription: {
    type: String,
  },
  playlistId: {
    type: String,
  },
  type: {
    type: String
  },
  playlistType: {
    type: String,
  },
  id: {
    type: String
  }
});

const searchedItem = inject('searchedItem')

const playlistImg = computed(() => props.playlistImage.slice(0,1));


const saveSearcheditem = (property) => {
  const isAdd = searchedItem.value.find((searched) => searched.id === property.id)
 
  if (!isAdd) {
    searchedItem.value.push({
      name: property.name,
      img: property.img,
      type: property.type,
      id: property.id
    })
  }
}


</script>

<style>
</style>