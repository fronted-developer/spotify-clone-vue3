<template>
  <router-link :to="`/album/${id}`">
    <div class="searched-item" @click="saveSearcheditem({img: albumImage, name: albumName, type: type, id: id})">
      <div class="color-item"></div>
      <div class="searched-card">
        <template v-if="albumsImages.length">
          <template v-for="(img, index) in albumImage" :key="index">
            <img v-lazy="img.url" alt="" class="searched-item-img"/>
          </template>
        </template>
        <img src="@/assets/img/undefined.png" alt="" class="searched-item-img" v-else/>
        <div class="searched-titles">
          <h2 class="searched-title" v-if="albumName.length > 13">{{albumName.slice(0,13) }}...</h2>
          <h2 class="searched-title" v-else >{{albumName}}</h2>
          <span class="searched-title-span">{{ type }}</span>
        </div>
      </div>
      <img src="@/assets/img/playBtn.svg" alt="" class="searched-item-images" />
    </div>
  </router-link>
</template>

<script setup>

import { computed, defineProps, inject, onMounted } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  albumName: {
    type: String
  },
  albumId: {
    type: String
  },
  type: {
    type: String
  },
  albumsImages: {
    type: Array
  },
  id: {
    type: String
  }
})

const searchedItem = inject('searchedItem')


const albumImage = computed(() => props.albumsImages.slice(1, 2));

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