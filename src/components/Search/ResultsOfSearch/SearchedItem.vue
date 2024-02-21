<template>
  <h1 class="search__item-title">Recent searches</h1>
  <h1 class="search__item-show"></h1>
  <div class="searched-history">
    <div class="category-item" v-for="(searched, i) in searchedItem" :key="i">
      <div class="color-item"></div>
      <div class="searched-card">
        <img
          :src="img.url"
          alt=""
          class="searched-item-img"
          v-for="img in searched.img"
          :key="img"
        />
        <div class="searched-titles">
          <h2 class="searched-title" v-if="searched.name.length > 13">
            {{ searched.name.slice(0, 13) }}...
          </h2>
          <h2 class="searched-title" v-else>{{ searched.name }}</h2>
          <span class="searched-title-span">{{ searched.type }}</span>
        </div>
      </div>
      <img src="@/assets/img/playBtn.svg" alt="" class="searched-item-images" />
      <img src="@/assets/img/Close.svg" alt="" class="searched-item-delete" @click="deleteSearchedItem(searched.id)">
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted } from "vue";
import {removeSearchedItem} from '@/composables/removeSearchedItem'
import {searchDataStorage} from '@/composables/searchDataStorage'

const searchedItem = inject("searchedItem");

const {deleteSearchedItem} = removeSearchedItem(searchedItem)
const {localStorageData} = searchDataStorage(searchedItem)

localStorageData()








</script>

<style>
</style>