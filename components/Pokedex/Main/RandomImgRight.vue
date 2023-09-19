<template>
    <div class="right_layout">
        <PokedexMainRandomImg class="img_layout" />
        <PokedexMainRandomImg class="img_layout" />
        <PokedexMainRandomImg class="img_layout" />
        <PokedexMainRandomImg class="img_layout" />
        <PokedexMainRandomImg class="img_layout" />
        <PokedexMainRandomImg class="img_layout" />
    </div>
</template>
<style scoped>
.right_layout{
    display:block;
    position:relative;
}
.right_layout .img_layout{
    max-width:110px;
    max-height:110px;
    height:100%;
    width:100%;
    position:absolute;
    background-image:url("/random_bg.png");
    background-size:cover;
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
.right_layout .img_layout:nth-child(1){
    top:5%;
}
.right_layout .img_layout:nth-child(2){
    left:50%;
    top:5%;
}
.right_layout .img_layout:nth-child(3){
    left:25%;
    top:30%;
}
.right_layout .img_layout:nth-child(4){
    left:75%;
    top:30%;
}
.right_layout .img_layout:nth-child(5){
    left:0%;
    top:55%;
}
.right_layout .img_layout:nth-child(6){
    left:50%;
    top:55%;
}
</style>