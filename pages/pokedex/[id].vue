<script setup>
const route = useRoute();
const powerEffect = ref(false);
const onMountedEnd = ref(false)
const datas = ref([])
const data = ref([])
const nextPokemonNumber = ref()
const prePokemonNumber = ref()
const nextPokemonData = ref()
const prePokemonData = ref()
const chineseToEnglish = useTypeToEnglish()
let types
onMounted(async()=>{
    datas.value = await usePokeDataJson()
    data.value = datas.value.filter(items=>items.num == route.params.id)[0]
    nextPokemonNumber.value = (Number(data.value.num)+1).toString().padStart(3,'0')
    prePokemonNumber.value = (Number(data.value.num)-1).toString().padStart(3,'0')
    nextPokemonData.value = datas.value.filter(items=>items.num==nextPokemonNumber.value)[0]
    prePokemonData.value = datas.value.filter(items=>items.num==prePokemonNumber.value)[0]
    // console.log(data.value.types)
    let pokeTypes = data.value.types;
    types = pokeTypes.split('\n').filter(item=>item.trim() !== '')
    onMountedEnd.value = true
    await nextTick();
    setTimeout(()=>{
        powerEffect.value=true
    },500)
})
function randomValue(){
    return (Math.random() * (100 - 1) + 1).toFixed(2);
}
</script>
<template>
    <div v-if="onMountedEnd==true" class="data-page-layout">
        <div class="  main-head">
            <NuxtLink to="/pokedex">
                <span>寶可夢圖鑑</span>
            </NuxtLink>
        </div>
        <div class="next-pre-layout">
            <div class="pre-data">
                <NuxtLink v-if="prePokemonNumber != '000'" :to="'/pokedex/'+prePokemonNumber">{{ prePokemonNumber }} {{ prePokemonData.name }}</NuxtLink>
                <NuxtLink v-else >尚無000</NuxtLink>
            </div>
            <div class="next-data">
                <NuxtLink v-if="nextPokemonNumber <='807'" :to="'/pokedex/'+nextPokemonNumber">{{nextPokemonNumber}} {{nextPokemonData.name}}</NuxtLink>
                <NuxtLink v-else>等待更新</NuxtLink>
            </div>
        </div>
        <div class="poke-data-layout">
            <div class="poke-effectness-layout">
                <div class="self-type-layout">
                    <p>屬性</p>
                    <div class="self-type-name">
                        <div v-for="(value,index) in types" :key="data.name+value" :class="[chineseToEnglish[value]]">{{ value }}</div>
                        <!-- <div class="grass">草</div> -->
                    </div>
                </div>
                <div class="effect-type-layout">
                    <p>弱點</p>
                    <div class="effect-type-name">
                        <div class="electric">電</div>
                        <div class="psychic">超能力</div>
                    </div>
                </div>
            </div>
            <div class="poke-img-name-layout">
                <div class="poke-name">{{data.name}}</div>
                <div class="poke-img"><img :src="data.image"></div>
            </div>
            <div class="poke-detail-layout">
                <div class="poke-detail">
                    <div>身高</div>
                    <div>180cm</div>
                </div>
                <div class="poke-detail">
                    <div>體重</div>
                    <div>180kg</div>
                </div>
                <div class="poke-detail">
                    <div>特性</div>
                    <div>怪力</div>
                </div>
                <div class="poke-detail">
                    <div>分類</div>
                    <div>水中類</div>
                </div>
                <div class="poke-detail">
                    <div>性別</div>
                    <div>公/母</div>
                </div>
            </div>
        </div>
        <div class="dex-text-layout">
            <div class="dext-text">
                <h2 class="dext-text-title">圖鑑介紹</h2>
                <p class="dext-text-content">受到超極巨化之力影響而變得巨大的左鉗可以把任何東西都夾得粉碎。</p>
            </div>
            <div class="poke-power-analysis-layout">
                <div class="poke-power-layout">
                    <div>HP</div>
                    <div class="poke-power-value">
                        <div :style="{ width: powerEffect ? randomValue()+'%' : '' }"></div>
                    </div>
                </div>
                <div class="poke-power-layout">
                    <div>攻擊</div>
                    <div class="poke-power-value">
                        <div :style="{ width: powerEffect ? randomValue()+'%' : '' }"></div>
                    </div>
                </div>
                <div class="poke-power-layout">
                    <div>防禦</div>
                    <div class="poke-power-value">
                        <div :style="{ width: powerEffect ? randomValue()+'%' : '' }"></div>
                    </div>
                </div>
                <div class="poke-power-layout">
                    <div>特攻</div>
                    <div class="poke-power-value">
                        <div :style="{ width: powerEffect ? randomValue()+'%' : '' }"></div>
                    </div>
                </div>
                <div class="poke-power-layout">
                    <div>特防</div>
                    <div class="poke-power-value">
                        <div :style="{ width: powerEffect ? randomValue()+'%' : '' }"></div>
                    </div>
                </div>
                <div class="poke-power-layout">
                    <div>速度</div>
                    <div class="poke-power-value">
                        <div :style="{ width: powerEffect ? randomValue()+'%' : '' }"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="still-loading">
        <p>Loading</p>
    </div>
</template>
<style scoped>
@import url('~/assets/css/pokemonData.module.css');
@import url('~/assets/css/type.module.css');

</style>