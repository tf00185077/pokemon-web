<template>
    <div class="mid_layout">
        <PokedexMainRandomImg class="mid_img"/>
    </div>
</template>
<style scoped>
.mid_layout{
    /* max-height:260px; */
    /* max-width:260px; */
    display:flex;
    align-items:center;
    justify-content:center;
    background-image:url("/random_bg.png");
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center center;
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
</style>