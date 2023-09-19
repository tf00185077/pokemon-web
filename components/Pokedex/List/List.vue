<template>
    <div class="list-layout notDone">
        <PokedexListPokeData></PokedexListPokeData>
        <PokedexListPokeData></PokedexListPokeData>
        <PokedexListPokeData></PokedexListPokeData>
        <PokedexListPokeData></PokedexListPokeData>
        <PokedexListPokeData></PokedexListPokeData>
        <PokedexListPokeData></PokedexListPokeData>
        <PokedexListPokeData></PokedexListPokeData>
        <PokedexListPokeData></PokedexListPokeData>
    </div>
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
</style>