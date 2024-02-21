<template>
    <div class="center-container">
      <div class="loadings">
        <span class="loader"></span>
      </div>
    </div>
  </template>

<script>
export default {

}
</script>

<style>
.center-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Занимает 100% высоты экрана */
}
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #FFF;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>