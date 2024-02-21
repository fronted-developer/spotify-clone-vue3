<template>

    <div class="searched-item"  @click="saveSearcheditem({img: artistImg, name: artistName, type: type, id: id})">
      <div class="color-item"></div>
      <div class="searched-card">
        <template v-if="artistImg.length">
          <template v-for="(img, index) in artistImg" :key="index">
            <img :src="img.url" alt="" class="searched-item-img"/>
          </template>
        </template>
        <img src="@/assets/img/undefined.png" alt="" class="searched-item-img" v-else/>
        <div class="searched-titles">
          <h2 class="searched-title" v-if="artistName.length > 13">{{artistName.slice(0,13) }}...</h2>
          <h2 class="searched-title" v-else >{{artistName}}</h2>
          <span class="searched-title-span">{{ type }}</span>
        </div>
      </div>
      <img src="@/assets/img/playBtn.svg" alt="" class="searched-item-images" />
    </div>

</template>

<script setup>
import { computed, defineProps, inject } from "vue";

const props = defineProps({
  artistName: {
    type: String,
  },
  artistId: {
    type: String,
  },
  artistsImage: {
    type: Array,
  },
  artistData: {
    type: Object,
  },
  type: {
    type: String
  },
  id: {
    type: String
  }
});

const artistImg = computed(() => props.artistsImage.slice(2, 3));

const searchedItem = inject('searchedItem')

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