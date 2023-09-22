<script setup>
const router = useRouter()
</script>
<template>
        <div class="  main-head">
            <NuxtLink to="/pokedex">
                <span>寶可夢圖鑑</span>
            </NuxtLink>
        </div>
        <div class="next-pre-layout">
            <div class="pre-data">&lt; 009噴火龍</div>
            <div class="next-data">008噴水龍 &gt;</div>
        </div>
        <div class="poke-data-layout">
            <div class="poke-effectness-layout">
                <div>
                    <div>屬性</div>
                    <div>水</div>
                </div>
                <div>
                    <div>弱點</div>
                    <div>電</div>
                </div>
            </div>
            <div class="poke-img-name-layout">
                <div>超級水箭龜</div>
                <div><img src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/00186af714a048895ba8116e71b08671c3cfb8f5.png"></div>
            </div>
            <div class="poke-detail-layout">
                <div class="tall">
                    <div>身高</div>
                    <div>180cm</div>
                </div>
                <div class="weight">
                    <div>體重</div>
                    <div>180kg</div>
                </div>
                <div class="ability">
                    <div>特性</div>
                    <div>怪力</div>
                </div>
                <div class="classify">
                    <div>分類</div>
                    <div>怪類</div>
                </div>
                <div class="sexual">
                    <div>性別</div>
                    <div>公</div>
                </div>
            </div>
        </div>
        <div class="dex-text-layout">
            <div class="dext-text">圖鑑介紹</div>
            <div class="power-analysis">
                <div>HP</div>
                <div>攻擊</div>
                <div>防禦</div>
                <div>特攻</div>
                <div>特防</div>
                <div>速度</div>
            </div>
        </div>
</template>
<style scoped>
@import url('~/assets/css/pokemonData.module.css');
@import url('~/assets/css/type.module.css');

</style>