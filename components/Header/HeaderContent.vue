<template>
    <ul class="layout">
        <li><a>電視動畫系列</a></li>
        <li>電影</li>
        <li>商品</li>
        <li>應用程式</li>
        <li>遊戲</li>
        <li>活動</li>
        <li>卡牌遊戲</li>
        <li>寶可夢圖鑑</li>
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