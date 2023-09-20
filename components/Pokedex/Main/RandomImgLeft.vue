<script setup>
    const datas = defineProps(["toLeftdatas"])
    // console.log(datas.toLeftdatas)
</script>
<template>
    <div v-if="datas.toLeftdatas" class="left_layout">
        <PokedexMainRandomImg v-for="(value,index) in datas.toLeftdatas" :data="value" class="img_layout" />
    </div>
</template>
<style scoped>
.left_layout{
    position:relative;
}
.left_layout .img_layout{
    max-width:110px;
    max-height:110px;
    height:100%;
    width:100%;
    position:absolute;
    background-image:url("/random_bg.png");
    background-size:cover;
    animation: fadeIn 3.5s ease-in-out forwards;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.left_layout .img_layout:nth-child(1){
    right:0;
    top:5%;
}
.left_layout .img_layout:nth-child(2){
    right:50%;
    top:5%;
}
.left_layout .img_layout:nth-child(3){
    right:25%;
    top:30%;
}
.left_layout .img_layout:nth-child(4){
    right:75%;
    top:30%;
}
.left_layout .img_layout:nth-child(5){
    right:0%;
    top:55%;
}
.left_layout .img_layout:nth-child(6){
    right:50%;
    top:55%;
}
</style>