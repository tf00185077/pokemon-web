<template>
    <div class="index-layout">
        <PokedexMain></PokedexMain>
        <div class="notDone quiz"><img src="/bnr_quiz.png" /></div>
        <PokedexAdvanceSearch></PokedexAdvanceSearch>
        <PokedexList></PokedexList>
    </div>
</template>
<style scoped>
*{
   box-sizing: border-box;
   color:white;
}
.index-layout{
    margin:0 auto;
    background-image: url("/list_top_bg.jpg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
    height:100vh;
    max-width:1200px;
    position:relative;
}
.quiz{
    box-sizing: border-box;
    max-width:1200px;
   display:flex;
    align-items: center;
    justify-content: center;
    height:200px;
    padding:35px;
}
.quiz img{
    width:100%;
    height:100%;
    cursor:pointer;
    border-radius: 8px;
    box-shadow:0 0 10px #b4ebff, inset 0 0 10px #b4ebff;
    transition:0.3s;
}
.quiz img:hover{
    background-color: #00ddff6c;
}
</style>