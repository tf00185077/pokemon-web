<template>
    <div class="notDone layout">
        <PokedexMainRandomImgLeft class="grid-item" />
        <PokedexMainRandomImgMid class="grid-item" />
        <PokedexMainRandomImgRight class="grid-item" />
    </div>
</template>
<style scoped>
.layout {
  box-sizing: border-box;
  max-width: 1600px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
  /* border: 5px solid yellow; */
  padding: 10px;
}

.grid-item {
  /* border: 1px solid yellow; */
  /* padding: 10px;
  flex-grow: 1;  */
  text-align: center; 
  /* max-height:300px; */
  /* height:50%; */
  width:calc(100%/3);
}
.grid-item:nth-child(1){
    left:6%;
}
.grid-item:nth-child(3){
    right:6%;
}
</style>