<template>
  <div class="layout">
    <div class="img_box">
      <NuxtLink to="/"><img src="/logo.png" alt=""></NuxtLink>
    </div>
    <HeaderContent class="flex1"></HeaderContent>
  </div>
</template>
<style scoped>
.layout {
  max-width: 1600px;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
  gap:5px;
  /* position:fixed; */
}
.flex1 {
  flex: 1;
}
.img_box{
  height:80%;
  width:80%;
  display:block;
}
.img_box img{
  max-width: 50%; 
  max-height: 50%; 
}
</style>