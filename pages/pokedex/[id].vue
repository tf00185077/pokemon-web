<template>
        <div class="  main-head">
        <NuxtLink to="/pokedex">
            <span>寶可夢圖鑑</span>
        </NuxtLink>
    </div>
    <h1 class=" "> </h1>
</template>
<style>
h1{
    color:white
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