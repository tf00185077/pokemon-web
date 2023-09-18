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
        <li :class="{'active':routeName==''}"><NuxtLink to="/">電視動畫系列</NuxtLink></li>
        <li :class="{'active':routeName==''}"><NuxtLink to="/">電影</NuxtLink></li>
        <li :class="{'active':routeName==''}"><NuxtLink to="/">商品</NuxtLink></li>
        <li :class="{'active':routeName==''}"><NuxtLink to="/">應用程式</NuxtLink></li>
        <li :class="{'active':routeName==''}"><NuxtLink to="/">"遊戲</NuxtLink></li>
        <li :class="{'active':routeName==''}"><NuxtLink to="/">活動</NuxtLink></li>
        <li :class="{'active':routeName==''}"><NuxtLink to="/">卡牌遊戲</NuxtLink></li>
        <li :class="{'active':routeName=='pokedex'}"><NuxtLink to="/pokedex">寶可夢圖鑑</NuxtLink></li>
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
li{
    position:relative;
    width:80%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 2px;
    cursor:pointer
}
li::after{
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
li.active::after{
    height:100%
}
li:hover::after{
    height:100%;
}
li:nth-child(1)::after{
    background-color:rgba(30, 129, 250, 0.864);
}
li:nth-child(2)::after{
    background-color:rgba(255, 182, 87, 0.864);
}
li:nth-child(3)::after{
    background-color:rgb(34, 203, 0);
}
li:nth-child(4)::after{
    background-color:rgba(175, 6, 254, 0.864);
}
li:nth-child(5)::after{
    background-color:rgba(228, 51, 51, 0.864);
}
li:nth-child(6)::after{
    background-color:rgba(116, 50, 50, 0.864);
}
li:nth-child(7)::after{
    background-color:rgb(47, 32, 143,.3);
}
li:nth-child(8)::after{
    background-color:rgba(255, 0, 170, 0.3);
}
</style>