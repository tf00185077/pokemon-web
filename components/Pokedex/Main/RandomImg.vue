<template>
    <div class="random_image_card">
        <NuxtLink to="/pokedex">
            <img src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png">
        </NuxtLink>
    </div>
</template>
<style scoped>
.random_image_card{
    /* width:100%;
    height:100%; */
    display:flex;
    align-items:center;
    justify-content:center;
}
img{
    width:65%;
    height:65%;
}
</style>