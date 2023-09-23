<script setup>
  useHead({
    bodyAttrs:{
      style:"margin:0;padding:0;position:relative;background:#091521;margin-top:70px;"
    }
  })
</script>
<template>
  <div class="layout">
    <Header class="header"></Header>
      <NuxtPage/>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.header{
  position:fixed;
  width:100%;
  z-index:1000;
  top:0;
}
</style>
