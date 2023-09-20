<script setup>
const datas = defineProps(['datas'])
const dataDetail = datas.datas
// console.log(dataDetail)
const toWhere = `/pokedex/${dataDetail.num}`
const pokeImg = dataDetail.image
const pokeNum = dataDetail.num
const pokeName = dataDetail.name
const pokeTypes = dataDetail.types
const pokeTypeArray = pokeTypes.split('\n').filter(item=>item.trim() !== '') //將複數屬性整理成陣列
// console.log(pokeTypeArray)
const chineseToEnglish = {
    "一般":"normal",
    "火":"fire",
    "水":"water",
    "電":"electric",
    "草":"grass",
    "冰":"ice",
    "格鬥":"fighting",
    "毒":"poison",
    "地面":"ground",
    "飛行":"flying",
    "超能力":"psychic",
    "蟲":"bug",
    "岩石":"rock",
    "幽靈":"ghost",
    "龍":"dragon",
    "惡":"dark",
    "鋼":"steel",
    "妖精":"fairy"
}
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
                            <p v-for="(value,index) in pokeTypeArray" class="poke-type" :class="chineseToEnglish[value]">{{ value }}</p>
                    </div>
                </div>
            </NuxtLink>
        </div>
</template>
<style scoped>
*{
    text-decoration: none;
}
.data-card-layout{
    background-image:url("/layoutCard.png");
    background-position:center center;
    background-repeat:no-repeat;
    background-size:contain;
    animation: fadeIn 3s ease-in-out forwards;
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
.normal{
    background-color:#9FA19F;
    color:white;
}
.fire{
    background-color:#E62829;
    color:white;
}
.water{
    background-color:#2980EF;
    color:white;
}
.electric{
    background-color:#FAC000;
    color:white;
}
.grass{
    background-color:#3FA129;
    color:white;
}
.ice{
    background-color:#3FD8FF;
    color:white;
}
.fighting{
    background-color:#FF8000;
    color:white;
}
.poison{
    background-color:#9141CB;
    color:white;
}
.ground{
    background-color:#915121;
    color:white;
}
.flying{
    background-color:#81B9EF;
    color:white;
}
.psychic{
    background-color:#EF4179;
    color:white;
}
.bug{
    background-color:#91A119;
    color:white;
}
.rock{
    background-color:#AFA981;
    color:white;
}
.ghost{
    background-color:#704170;
    color:white;
}
.dragon{
    background-color:#5060E1;
    color:white;
}
.dark{
    background-color:#50413F;
    color:white;
}
.steel{
    background-color:#60A1B8;
    color:white;
}
.fairy{
    background-color:#EF70EF;
    color:white;
}
</style>