<script setup>
const number = ref('003');
const router = useRouter()
function toLink(){
    router.push(`/pokedex/${number.value}`)
}
function handleKeyPress(event) {
    event.preventDefault()
  if (event.key == 'Enter') {
    toLink();
  }
}
onMounted(()=>{
    window.addEventListener('keydown',handleKeyPress)
})
onBeforeUnmount(()=>{
    window.removeEventListener('keydown',handleKeyPress)
})
</script>
<template >
    <div class="search_layout">
        <p class="use-name-search">使用名稱或圖鑑編號搜索</p>
        <div class="search-input-layout">
            <div class="search-input">
                <input v-model="number" class="number-name-input"/>
                <div class="search-icon" @click="toLink"><img src="/icon_magnifying_glass.png"/></div>
            </div>
            <div class="random-appear" >隨機顯示</div>
        </div>
    </div>
</template>
<style scoped>
.search_layout{
    max-width:1200px;
    margin:0 auto;
    padding:0 90px;
}
.use-name-search{
    font-size:24px;
    font-weight:600;
    color:#b3eafe;
    text-shadow:0 0 2px #b3eafea7;
    margin:0;
}
.search-input-layout{
    display:flex;
    margin-top:2%; 
    height:40px
}
.search-input{
    display:flex;
    flex:1;
}
.number-name-input{
    width:50%;
    background:white;
    border-radius:20px 0 0 20px;
    padding:5px 20px;
    font-size:24px;
    border:none;
    outline:none;
}
.search-icon{
    width:80px;
    border-radius:0 20px 20px 0;
    background-color:#b4ebff;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
}
.search-icon:hover img{
transform: scale(1.2);
}
.search-icon:active{
    box-shadow: inset 2px 2px 2px gray,inset -2px -2px 2px gray;
}
.search-icon img{
    width:30%;
}
.random-appear{
    width:250px;
    border-radius:20px;
    font-size:24px;
    padding:5px 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#ffdc00;
    font-weight:600;
    box-shadow:0 0 3px 3px #ffdc00;
    cursor:pointer;
}
</style>