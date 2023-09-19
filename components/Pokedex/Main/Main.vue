<template>
    <div class="notDone main-head">
        <NuxtLink to="/pokedex">
            <span>寶可夢圖鑑</span>
        </NuxtLink>
    </div>
    <PokedexMainRandomImgLayout></PokedexMainRandomImgLayout>
    <PokedexMainPokeSearch></PokedexMainPokeSearch>
</template>
<style scoped>
*{
    color:white;
}
a{
    text-decoration:none;
}
.main-head{
    height:100px;
    background-image:url("/pokedex_bg.png");
    background-repeat:no-repeat;
    background-size:center;
    background-position:center center;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:24px;
    position:relative;
}
</style>