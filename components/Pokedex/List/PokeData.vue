<script setup>
const datas = defineProps(['datas'])
const dataDetail = ref(datas.datas)
// console.log(dataDetail)
const toWhere = `/pokedex/${dataDetail.value.num}`
const pokeImg = dataDetail.value.image
const pokeNum = dataDetail.value.num
const pokeName = dataDetail.value.name
const pokeTypes = dataDetail.value.types
const pokeTypeArray = pokeTypes.split('\n').filter(item=>item.trim() !== '') //將複數屬性整理成陣列
// console.log(pokeTypeArray)
const chineseToEnglish = useTypeToEnglish()
</script>
<template>
        <div class="  data-card-layout">
            <NuxtLink :to=toWhere>
            <div class="data-img"><img :src=pokeImg></div>
                    <div class="data-information-layout">
                        <div claa="data-information">
                            <p class="pokenumber">{{ pokeNum }}</p>
                            <p class="poke-name">{{ pokeName }}</p>
                        </div>
                        <div class="data-type">
                            <p v-for="(value,index) in pokeTypeArray" class="poke-type" :class="[chineseToEnglish[value]]">{{ value }}</p>
                    </div>
                </div>
            </NuxtLink>
        </div>
</template>
<style scoped>
@import url("~/assets/css/type.module.css");
*{
    text-decoration: none;
}
.data-card-layout{
    background-image:url("/layoutCard.png");
    background-position:center center;
    background-repeat:no-repeat;
    background-size:contain;
    animation: fadeIn 1s ease-in-out forwards;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.data-img{
    /* width:100%; */
    transform:scale(.7);
    height:60%;
    display:flex;
    justify-content:center;
    align-items:center
}
.data-img img{
    width:100%;
    /* height:100%; */
}
.data-information-layout{
    height:40%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
p{
    margin:0;
    padding-left:60px;
    color:white;
}
.pokenumber{
    font-size:18px;
    color:#b4ebff;
}
.poke-name{
    font-size:24px;
    font-weight:600;
}
.data-type{
    box-sizing:border-box;
    padding-bottom:40px;
    display:flex;
    justify-content:flex-start;
    gap:20px;
    padding-left:60px
}
.data-type p{
    padding:0;
    width:80px;
    height:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:20px;
    font-size:20px;
}
</style>