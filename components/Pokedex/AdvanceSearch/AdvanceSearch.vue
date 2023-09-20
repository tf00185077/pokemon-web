<template>
    <div class="advance-search-layout">
        <div class="advance-search-choose">
            <p>進階搜索</p>
        </div>
        <div class="range-by-number">
            <p>由圖鑑編號排列</p>
        </div>
    </div>
</template>
<style scoped>
.advance-search-layout{
    position:relative;
}
.advance-search-choose{
    box-sizing:border-box;
    background-image:url("/advance_search_close_bg.png");
    background-position:top center;
    background-repeat:no-repeat;
    background-size:contain;
    display:flex;
    justify-content:center;
    padding:20px;
    height:120px;
}
.advance-search-choose p{
    margin:0;
    padding:0 20px;
    cursor:pointer;
    font-weight:600;
    font-size:20px;
}
.range-by-number{
    box-sizing:border-box;
    padding:0px 15px;
    position:absolute;
    bottom:0;
    right:2%;
    width:380px;
    height:60px;
    background-image:url("/sort_close_bg.png");
    background-position:center center;
    background-repeat:no-repeat;
    background-size:contain;
    display:flex;
    justify-content:center;
    cursor:pointer;
}
.range-by-number p{
    font-weight:600;
}
</style>