<script setup>
const datas = defineProps(['data']);
//先看筆數
// console.log(datas.data.length) 
//以下挑出隨機的12筆
function getRandomItems(array,count){
const cloneArray = [...array]; // 以免修改原始数据
  const randomItems = [];
  // 接著循環直到達到count數目
  while (randomItems.length < count) {
    // 生成一index，介于 0 到length
    const randomIndex = Math.floor(Math.random() * cloneArray.length);
    // 加進去新陣列並從原陣列刪除
    const selectedItem = cloneArray.splice(randomIndex, 1)[0];
    randomItems.push(selectedItem);
  }

  return randomItems;
}
const randomData =getRandomItems(datas.data,13)
const randomDataLeft = randomData.slice(0,6)//分配index0~5給左邊
const randomDataMid = randomData.slice(6,7)//分配index6~6給中間
const randomDataRight = randomData.slice(7,14)//分配index7~13給右邊
</script>
<template>
    <div v-if="randomData" class="  layout">
        <PokedexMainRandomImgLeft :toLeftdatas="randomDataLeft" class="grid-item" />
        <PokedexMainRandomImgMid :toMiddatas="randomDataMid" class="grid-item" />
        <PokedexMainRandomImgRight :toRightdatas="randomDataRight" class="grid-item" />
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