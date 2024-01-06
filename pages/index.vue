<script setup>
const showYou = await usePokeDataJson();
console.log(showYouf);
</script>
<template>
  <div class="home-layout">
    <p>頁面尚未完成，請轉至圖鑑頁</p>
  </div>
</template>
<style scoped>
.home-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.home-layout::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  background-image: url("/pokemon_bg.png");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%) rotate(0deg);
  animation: rotate 2s linear infinite;
  z-index: -1;
}
@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.home-layout p {
  font-size: 48px;
  font-weight: 600;
  animation: opacity 1.5s infinite;
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>