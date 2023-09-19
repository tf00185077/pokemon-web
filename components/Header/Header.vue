<template>
  <div class="header-layout">
    <div class="layout">
      <div class="img_box">
        <NuxtLink to="/"><img src="/logo.png" alt=""></NuxtLink>
      </div>
    <HeaderContent class="flex1"></HeaderContent>
  </div>
</div>
</template>
<style scoped>
.header-layout{
  background: white;
}
.layout {
  max-width: 1200px;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
  gap:5px;
  align-items: center;
}
.flex1 {
  flex: 1;
  z-index:1000
}
.img_box{
  height:80%;
  display:block;
  text-align: center;
}
.img_box img{
  max-width: 50%; 
  max-height: 50%;
}
</style>