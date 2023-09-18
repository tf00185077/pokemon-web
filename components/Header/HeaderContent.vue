<script setup>
const route = useRoute();
const routeName = ref(route.name);
watch(
  () => route.name,
  (newRouteName, oldRouteName) => {
    routeName.value = newRouteName; // 更新 routeName 的值
  }
);
console.log(routeName.value);
</script>
<template>
  <ul class="layout">
    <NuxtLink to="/" :class="{ active: routeName == '' }"
      ><li>電視動畫系列</li></NuxtLink
    >
    <NuxtLink to="/" :class="{ active: routeName == '' }"
      ><li>電影</li></NuxtLink
    >
    <NuxtLink to="/" :class="{ active: routeName == '' }"
      ><li>商品</li></NuxtLink
    >
    <NuxtLink to="/" :class="{ active: routeName == '' }"
      ><li>應用程式</li></NuxtLink
    >
    <NuxtLink to="/" :class="{ active: routeName == '' }"
      ><li>遊戲</li></NuxtLink
    >
    <NuxtLink to="/" :class="{ active: routeName == '' }"
      ><li>活動</li></NuxtLink
    >
    <NuxtLink to="/" :class="{ active: routeName == '' }"
      ><li>卡牌遊戲</li></NuxtLink
    >
    <NuxtLink to="/pokedex" :class="{ active: routeName == 'pokedex' }"
      ><li>寶可夢圖鑑</li></NuxtLink
    >
  </ul>
</template>
<style scoped>
ul {
  display: flex;
  list-style: none;
  padding: 0;
  /* height:100%; */
  margin: 0;
}
a {
  position: relative;
  width: 80%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 800;
}

a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 5%;
  transition:0.3s;
  z-index: -1;
  border-radius: 5px 5px 0 0;
}
a:hover::after {
    height: 100%;
}
a:nth-child(1){
    color:#03a9f4;
}
a:nth-child(1)::after {
    background-color: #03a9f4;
}
a:nth-child(2){
    color:#ff9600;
}
a:nth-child(2)::after {
    background-color: #ff9600;
}
a:nth-child(3){
    color:#4caf50;
}
a:nth-child(3)::after {
    background-color: #4caf50;
}
a:nth-child(4){
    color:#9c27b0;
}
a:nth-child(4)::after {
    background-color: #9c27b0;
}
a:nth-child(5){
    color:#f44336;
}
a:nth-child(5)::after {
    background-color: #f44336;
}
a:nth-child(6){
    color:#795548;
}
a:nth-child(6)::after {
    background-color: #795548;
}
a:nth-child(7){
    color: #3f51b5;
}
a:nth-child(7)::after {
    background-color: #3f51b5;
}
a:nth-child(8){
    color:rgba(255, 0, 170, 0.3);
}
a:nth-child(8)::after {
    background-color: rgba(255, 0, 170, 0.3);
}
a:hover{
    color:white
}
a.active{
    color:white
}
a.active::after {
  height: 100%;
}
</style>