<script setup>
const number = ref(8); //定義一開始要出現幾張
const showDataArray=ref([]); //定義要出現的資料的陣列
const datas = defineProps(['data','itemsFilter']) //接收到的資料
console.log(datas.itemsFilter)
const dataDetail = ref(datas.data)
const dataFilter = ref(datas.itemsFilter)
watchEffect(() => {
    dataFilter.value = datas.itemsFilter;
    if (dataFilter.value.length !== 0) {
        dataDetail.value=datas.data //重新拿全部資料篩選
        dataDetail.value = dataDetail.value.filter((item) => {
            let checkType = item.types.split('\n').filter((item) => item.trim() !== ''); // 所有怪物的屬性整理成陣列並刪掉陣列最後一個''元素
            // 使用 some 函数来检查 checkType 是否包含 dataFilter.value[0] 中的任何一个元素
            return dataFilter.value[0].some((type) => checkType.includes(type));
        });
        // console.log(showDataArray.value)
    }
});
</script>

<template>
    <div class="list-layout  " v-if="datas">
        <PokedexListPokeData v-for="(value,index) in dataDetail.slice(0,number)" :datas="value" :key="value.name"></PokedexListPokeData>
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