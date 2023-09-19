<template>
    
        <div class="notDone data-card-layout">
            <NuxtLink to="/">
            <div class="data-img"><img src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png"></div>
                    <div class="data-information-layout">
                        <div claa="data-information">
                            <p class="pokenumber">0001</p>
                            <p class="poke-name">妙娃種子</p>
                        </div>
                        <div class="data-type">
                            <p class="poke-type">草</p>
                            <p class="poke-type">毒</p>
                    </div>
                </div>
            </NuxtLink>
        </div>
</template>
<style scoped>
.data-card-layout{
    background-image:url("/layoutCard.png");
    background-position:center center;
    background-repeat:no-repeat;
    background-size:contain;
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
.data-img{
    /* width:100%; */
    transform:scale(.7);
    height:60%;
    display:flex;
    justify-content:center;
    align-items:center
}
.data-img img{
    width:100%;
    /* height:100%; */
}
.data-information-layout{
    height:40%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
p{
    margin:0;
    padding-left:60px;
}
.pokenumber{
    font-size:18px;
    color:#b4ebff;
}
.poke-name{
    font-size:24px;
    font-weight:600;
}
.data-type{
    box-sizing:border-box;
    padding-bottom:40px;
    display:flex;
    justify-content:center;
    gap:20px;
}
.data-type p{
    padding:0;
    width:80px;
    height:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:20px;
    font-size:20px;
    background-color:#92BF19;
}
</style>