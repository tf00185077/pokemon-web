<template>
    <div id="footer-layout">
        <h1>目前只有圖鑑頁面</h1>
        <div class="announce">所有內容僅為練習用，並無任何營利用途</div>
        <div class="information">
            <p>github:<NuxtLink to="https://github.com/tf00185077/pokemon-web" target="_blank">https://github.com/tf00185077/pokemon-web</NuxtLink></p>
            <p>練習作者:陳庭揚 Line:<NuxtLink to="https://line.me/ti/p/hTbpDm6LFC" target="_blank">https://line.me/ti/p/hTbpDm6LFC</NuxtLink></p>

        </div>
    </div>
</template>
<style scoped>
p{
    margin:0;
}
#footer-layout{
    background-color:#8b8b8b;
    padding:20px 80px;
}
.announce{
    font-weight:600
}
.information p{
    color:white
}
.information p a{
    font-weight:600;
}
</style>