<script setup>
    const datas = defineProps(["toMiddatas"])
    // console.log(datas.toMiddatas)
</script>
<template>
    <div v-if="datas.toMiddatas" class="mid_layout">
        <PokedexMainRandomImg v-for="(value,index) in datas.toMiddatas" :data="value" class="mid_img"/>
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
    animation: fadeIn 2s ease-in-out forwards;
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