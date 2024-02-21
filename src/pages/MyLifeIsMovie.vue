<template>
  <div class="main" >
    <div class="musicLife__background">
      <div class="view">
        <div class="container">
          <MusicLife />
  
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MusicLife from "@/components/MyLiveisMovie/MusicLife.vue";




</script>

<style>
.isLoading {
  text-align: center;
}

.musicLife__background {
  background: linear-gradient(180deg, #a5577e 38.09px, #121212 690.28px);
  width: 100%;
  min-height: 100vh;
}
</style>
