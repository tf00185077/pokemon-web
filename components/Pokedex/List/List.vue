<script setup>
const number = ref(8); //定義一開始要出現幾張
const showDataArray=ref([]); //定義要出現的資料的陣列
const datas = defineProps(['data']) //接收到的資料
const dataDetail = datas.data
showDataArray.value = dataDetail.slice(0,number.value) //將接收到的資料取出特定數量給要顯示的陣列
watch(number,()=>{ //顯示更多圖片
    showDataArray.value = dataDetail.slice(0,number.value)
})
</script>
<template>
    <div class="list-layout  " v-if="datas">
        <PokedexListPokeData v-for="(value,index) in showDataArray" :datas="value"></PokedexListPokeData>
    </div>
    <button @click="number+=16">顯示更多</button>
</template>
<style scoped>
.list-layout{
    margin-top:20px;
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    gap:15px;
    background-image:url("/list_bg.jpg");
    background-position:center center;
    background-repeat:no-repeat;
    background-size:cover;
}
button{
    display:block;
    margin:20px auto 60px;
    width:60%;
    border-radius: 20px;
    background-color: transparent;
    height:40px;
    font-size: 20px;
    color:white;
    text-shadow:0 0 5px #b3eafe, 0 0 5px #b3eafe;
    box-shadow:0 0 5px #b3eafe, 0 0 5px #b3eafe;
    cursor:pointer;
    transition:.3s;
}
button:hover{
    background-color:#cceefa4a;
}
</style>