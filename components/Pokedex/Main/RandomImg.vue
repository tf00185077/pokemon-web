<script setup>
const data = defineProps(['data'])
const dataDetail = data.data
// console.log(dataDetail)
const page = `/pokedex/${dataDetail.num}`
const pic = dataDetail.image
</script>
<template>
    <div class="random_image_card">
        <NuxtLink :to="page">
            <img :src="pic">
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