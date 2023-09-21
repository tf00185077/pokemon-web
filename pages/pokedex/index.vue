<script setup>
const datas = ref()
const itemsFromChild = ref([])
onMounted(async () => {
  datas.value = await usePokeDataJson()
});
watch(datas,()=>{
    
})
function handleEmitFromChild(data){
  // console.log(data,"fromChild")
  itemsFromChild.value = data
  // console.log(itemsFromChild.value,"From Chils")
}
</script>
<template>
    <div  v-if="datas" :data="datas" class="index-layout">
        <PokedexMain :data=datas></PokedexMain>
        <!-- 最上面隨機顯示圖片和名稱搜尋 -->
        <div class="  quiz"><img src="/bnr_quiz.png" /></div>
        <PokedexAdvanceSearch :data=datas @emitToParent="handleEmitFromChild"></PokedexAdvanceSearch>
        <!-- 進階搜索 -->
        <PokedexList :data=datas :itemsFilter=itemsFromChild></PokedexList>
         <!-- 寶可夢資料List -->
    </div>
    <div v-else class="data-loading-layout">
            <p>Data Loadigng...</p>
    </div>
</template>
<style scoped>
*{
   box-sizing: border-box;
   color:white;
}
.index-layout{
    margin:0 auto;
    background-image: url("/list_top_bg.jpg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
    /* height:100vh; */
    max-width:1200px;
    position:relative;
    animation: fadeIn 2s ease-in-out forwards;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.quiz{
    box-sizing: border-box;
    max-width:1200px;
   display:flex;
    align-items: center;
    justify-content: center;
    height:200px;
    padding:35px;
}
.quiz img{
    width:100%;
    height:100%;
    cursor:pointer;
    border-radius: 8px;
    box-shadow:0 0 10px #b4ebff, inset 0 0 10px #b4ebff;
    transition:0.3s;
}
.quiz img:hover{
    background-color: #00ddff6c;
}
.data-loading-layout{
    width:100%;
    height:100vh;
    display:flex;
    align-items: center;
    justify-content: center;
    position:relative;
}
.data-loading-layout::after{
    content:'';
    width:100%;
    height:100%;
    position:absolute;
    top:50%;
    left:50%;
    background-image: url("/pokemon_bg.png");
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    transform: translate(-50%, -50%) rotate(0deg);
    animation: rotate 2s linear infinite; 
    z-index:-1;
}
@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.data-loading-layout p{
    font-size:48px;
    font-weight:600;
    animation: opacity 1.5s infinite;
}
@keyframes opacity {
  0% {
    opacity:0
  }
  50% {
    opacity:1
  }
  100%{
    opacity:0
  }
}
</style>