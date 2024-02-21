<template>
  <div class="search">
    <div class="search__header">
      <NavigationArrowVue />
      <div class="search__input">
        <div class="input">
          <img src="@/assets/img/SearchInput.svg" alt="" />
          <input
            type="text"
            class="search__input-input"
            placeholder="Artists, songs, or podcasts"
            v-model.trim="query"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavigationArrowVue from "./NavigationArrow.vue";

import { defineProps, ref } from "vue";
import { searchItem } from "@/store/Search";
import { storeToRefs } from "pinia";

const searchs = searchItem();

const { query } = storeToRefs(searchs);
</script>

<style>
</style>