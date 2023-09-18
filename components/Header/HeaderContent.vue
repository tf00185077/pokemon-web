<script setup>
const route = useRoute()
const routeName = ref(route.name)
watch(() => route.name, (newRouteName, oldRouteName) => {
  routeName.value = newRouteName; // 更新 routeName 的值
});
console.log(routeName.value)
</script>
<template>
    <ul class="layout">
        <NuxtLink to="/"><li :class="{'active':routeName==''}">電視動畫系列</li></NuxtLink>
        <NuxtLink to="/"><li :class="{'active':routeName==''}">電影</li></NuxtLink>
        <NuxtLink to="/"><li :class="{'active':routeName==''}">商品</li></NuxtLink>
        <NuxtLink to="/"><li :class="{'active':routeName==''}">應用程式</li></NuxtLink>
        <NuxtLink to="/"><li :class="{'active':routeName==''}">遊戲</li></NuxtLink>
        <NuxtLink to="/"><li :class="{'active':routeName==''}">活動</li></NuxtLink>
        <NuxtLink to="/"><li :class="{'active':routeName==''}">卡牌遊戲</li></NuxtLink>
        <NuxtLink to="/pokedex"><li :class="{'active':routeName=='pokedex'}">寶可夢圖鑑</li></NuxtLink>
    </ul>
</template>
<style>

ul{
    display:flex;
    list-style:none;
    padding:0;
    /* height:100%; */
    margin:0;
}
a{
    position:relative;
    width:80%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 2px;
    cursor:pointer;
    text-decoration:none;
    font-weight:800;
    color:rgba(255,255,255)
}
a::after{
    content:'';
    position:absolute;
    bottom:0;
    left:0;
    display:block;
    width:100%;
    height:5%;
    transition: height 0.3s;
    z-index:-1;
    border-radius:5px 5px 0 0
}
a.active::after{
    height:100%
}
a:hover::after{
    height:100%;
}
a:nth-child(1)::after{
    background-color:rgba(30, 129, 250, 0.864);
}
a:nth-child(2)::after{
    background-color:rgba(255, 182, 87, 0.864);
}
a:nth-child(3)::after{
    background-color:rgb(34, 203, 0);
}
a:nth-child(4)::after{
    background-color:rgba(175, 6, 254, 0.864);
}
a:nth-child(5)::after{
    background-color:rgba(228, 51, 51, 0.864);
}
a:nth-child(6)::after{
    background-color:rgba(116, 50, 50, 0.864);
}
a:nth-child(7)::after{
    background-color:rgb(47, 32, 143,.3);
}
a:nth-child(8)::after{
    background-color:rgba(255, 0, 170, 0.3);
}
</style>