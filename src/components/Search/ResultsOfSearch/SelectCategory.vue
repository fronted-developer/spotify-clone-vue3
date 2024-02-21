<template>
  <div class="category">
        <ul class="category__ul" @click="selectCategory">
          <li
            :class="{
              category__list: true,
              category__active: selectedCategory === 'all',
            }"
            data-value="all"
          >
            Все
          </li>
          <li
            :class="{
              category__list: true,
              category__active: selectedCategory === 'track',
            }"
            data-value="track"
          >
            Треки
          </li>
          <li
            :class="{
              category__list: true,
              category__active: selectedCategory === 'album',
            }"
            data-value="album"
          >
            Альбомы
          </li>
          <li
            :class="{
              category__list: true,
              category__active: selectedCategory === 'playlist',
            }"
            data-value="playlist"
          >
            Плейлисты
          </li>
          <li
            :class="{
              category__list: true,
              category__active: selectedCategory === 'artist',
            }"
            data-value="artist"
          >
            Исполнители
          </li>
        </ul>
      </div>
</template>

<script setup>




let selectedCategory = ref("all");

import { defineEmits, ref } from "vue";

const emit = defineEmits(['category-selected']);

const selectCategory = (event) => {
  
  selectedCategory.value = event.target.dataset.value

  emit('category-selected', event)

  
};

 </script> 

<style>

</style>