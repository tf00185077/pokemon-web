
<template>
  <div class="layout">
    <h1 class="logo">LOGO</h1>
    <HeaderContent class="flex1"></HeaderContent>
  </div>
</template>
<style>
* {
  box-sizing: border-box;
}
.layout {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px;
  display: flex;
  justify-content: space-between;
  /* align-items:center */
}
.flex1 {
  flex: 1;
}
.logo {
  /* margin:2px */
}
</style>