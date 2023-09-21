<script setup>
const open = ref(true);
const typeToEnglish = useTypeToEnglish();
const canDrag = ref(false); //可不可以拉動拉條
const initialmouseX = ref(0); //計算滑鼠初始位置
const endmouseX = ref(0); //計算滑鼠最後位置
const initialBall = ref(1); //拉條目前最小值顯示的數字
const endBall = ref(1001); //拉條目前最大值顯示的數字
const minTranslate = ref(0); //拉條最小值要移動多少X距離
const maxTranslate = ref(0); //拉條最大值要移動多少X距離
const dexMinValue = ref(1); //圖鑑搜尋拉條最小值的球
const dexMaxValue = ref(1001); //圖鑑搜尋拉條最大值的球
const boxDistance = ref(0); //容器寬度
function startDrag(e) {
  //開始拖拉
  canDrag.value = true;
  initialmouseX.value = e.clientX; //紀錄滑鼠初始位置
  console.log("START");
  console.log(initialmouseX.value, "initialmouseX.value");
}
function stopDrag(e) {
  //停止拖拉
  canDrag.value = false;
  console.log("STOP");
  initialmouseX.value = e.clientX;
}
function leftDragging(e) {
  //最小值的拖拉
  if (canDrag.value == true) {
    const boxSize = document
      .getElementById("dex-num-bar-layout")
      .getBoundingClientRect();
    boxDistance.value = boxSize.right - boxSize.left; //用右邊邊界-左邊邊界得到長度
    console.log(boxDistance.value, "boxDistance.value"); //得到結果353
    // dexMaxValue.value = document.getElementById('dex-num-max').getBoundingClientRect().right//得到最大值的X座標
    // console.log(dexMaxValue.value); //得到結果952
    const everyScaleValue = boxDistance.value / 1001; //有1001隻怪獸，將長度比例算出來
    // console.log(everyScaleValue) //得到結果0.35->每0.35代表一隻怪
    const canMoveDistance = dexMaxValue.value - dexMinValue.value; //計算可移動X距離?需要嗎?
    if (dexMinValue.value < dexMaxValue.value) {
      //可拖動狀態且最小值不得超過最大值的情況才可拖動
      const howLong = e.clientX - initialmouseX.value; //計算移動多長距離
      console.log(e.clientX, "e.clientX");
      console.log(initialmouseX.value, "initialmouseX.value");
      console.log(howLong, "howLong");
      minTranslate.value = (howLong / boxDistance.value) * 100; //用容器總長度和移動的比例推算最小值的球要移動多少
      console.log(
        (howLong / boxDistance.value) * 100,
        "howLong / boxDistance.value"
      );
      initialBall.value = Math.floor(howLong / everyScaleValue);
      minTranslate.value = Math.max(0, Math.min(minTranslate.value, 100));
      dexMinValue.value = Math.floor((1001 / 100) * minTranslate.value);
    }
  }
}
function rightDragging(e) {
  //最小值的拖拉
  if (canDrag.value == true) {
    const boxSize = document
      .getElementById("dex-num-bar-layout")
      .getBoundingClientRect();
    boxDistance.value = boxSize.right - boxSize.left; //用右邊邊界-左邊邊界得到長度
    console.log(boxDistance.value, "boxDistance.value"); //得到結果353
    // dexMaxValue.value = document.getElementById('dex-num-max').getBoundingClientRect().left//得到最小值的X座標
    // console.log(dexMaxValue.value); //得到結果952
    const everyScaleValue = boxDistance.value / 1001; //有1001隻怪獸，將長度比例算出來
    // console.log(everyScaleValue) //得到結果0.35->每0.35代表一隻怪
    const canMoveDistance = dexMaxValue.value - dexMinValue.value; //計算可移動X距離?需要嗎?
    if (dexMaxValue.value > dexMinValue.value) {
      //可拖動狀態且最小值不得超過最大值的情況才可拖動
      const howLong = initialmouseX.value - e.clientX; //計算移動多長距離
      console.log(e.clientX, "e.clientX");
      console.log(initialmouseX.value, "initialmouseX.value");
      console.log(howLong, "howLong");
      maxTranslate.value = (howLong / boxDistance.value) * 100; //用容器總長度和移動的比例推算最小值的球要移動多少
      console.log(
        (howLong / boxDistance.value) * 100,
        "howLong / boxDistance.value"
      );
      endBall.value = Math.floor(howLong / everyScaleValue);
      maxTranslate.value = Math.max(0, Math.min(maxTranslate.value, 100));
      dexMaxValue.value = 1000 - Math.floor((1001 / 100) * maxTranslate.value);
    }
  }
}
</script>
<template>
  <div class="advance-search-layout">
    <div class="advance-search-choose">
      <p @click="open = !open">進階搜索</p>
    </div>
    <div class="advance-search-choose-open">
      <div class="first-choose-layout">
        <div class="type-choose-layout">
          <p>屬性</p>
          <!-- <hr> -->
          <div class="type-choose-detail">
            <div
              v-for="(item, key, index) in typeToEnglish"
              :class="item"
              :key="index"
            >
              {{ key }}
            </div>
          </div>
        </div>
        <div class="ability-choose-layout">
          <div class="ability-choose-selector">
            <div class="ability-choose">特性</div>
            <select class="ability-choose-detail" value="所有">
              <option selected disabled>尚未選擇</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div class="dex-num-layout">
            <div class="dex-num">
              圖鑑編號 {{ dexMinValue }}-{{ dexMaxValue }}
            </div>
            <div class="dex-num-bar-layout" id="dex-num-bar-layout">
              <div id="dex-num-bar" class="dex-num-bar"></div>
              <div
                id="dex-num-min"
                :style="'left:' + minTranslate + '%'"
                @mousedown="startDrag"
                @mouseup="stopDrag"
                @mousemove="leftDragging"
                class="dex-num-bar-initial"
              ></div>
              <div
                id="dex-num-max"
                :style="'right:' + maxTranslate + '%'"
                class="dex-num-bar-end"
                @mousedown="startDrag"
                @mouseup="stopDrag"
                @mousemove="rightDragging"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="second-choose-layout">
        <div class="region">地區</div>
        <div class="region-choose-layout">
          <div>關都地區</div>
          <div>城都地區</div>
          <div>豐緣地區</div>
          <div>神奧地區</div>
          <div>合眾地區</div>
          <div>卡洛斯地區</div>
          <div>阿羅拉地區</div>
          <div>伽勒爾地區</div>
          <div>洗翠地區</div>
          <div>帕底亞地區</div>
        </div>
        <div class="reset-and-search-layout">
          <button class="reset-button">重置</button>
          <button class="search-button">搜尋</button>
        </div>
      </div>
      <p @click="open = !open" class="hide-advance-search">隱藏進階搜索</p>
    </div>
    <div class="range-by-number">
      <p>由圖鑑編號排列</p>
    </div>
  </div>
</template>
<style scoped>
@import url("~/assets/css/type.module.css");
.advance-search-layout {
  position: relative;
}
.advance-search-choose {
  box-sizing: border-box;
  background-image: url("/advance_search_close_bg.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  padding: 20px;
  height: 120px;
}
.advance-search-choose p {
  margin: 0;
  padding: 0 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
}
.advance-search-choose p:active {
  transform: translate(0, 2px);
}
.range-by-number {
  box-sizing: border-box;
  padding: 0px 15px;
  position: absolute;
  bottom: 0;
  right: 2%;
  width: 380px;
  height: 60px;
  background-image: url("/sort_close_bg.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.range-by-number p {
  font-weight: 600;
}
.advance-search-choose-open {
  background-image: url("advance_search_open_bg.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  gap: 40px;
  flex-direction: column;
  /* justify-content:center; */
  align-items: center;
  padding: 30px 100px;
  height: 900px;
  flex-grow: 1;
}
.first-choose-layout {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
}
.type-choose-layout {
  flex: 1;
}
.type-choose-layout > p {
  margin: 0;
  font-size: 24px;
  color: #b4ebff;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #b4ebff;
}
.type-choose-detail {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 6px;
}
.type-choose-detail > div {
  width: calc(100% / 4);
  border-radius: 20px;
  padding: 5px 10px;
  text-align: center;
  cursor: pointer;
  font-size: 10px;
  margin-bottom: 10px;
}
.ability-choose-layout {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
}
.ability-choose-selector {
  display: flex;
  padding: 30px;
  flex-direction: column;
  color: #b4ebff;
  border-radius: 20px;
  border: 2px solid #466e9b;
}
.ability-choose {
  margin-bottom: 10px;
  font-size: 24px;
}
.ability-choose-selector > select {
  height: 50px;
  border-radius: 20px;
  padding: 5px 20px;
  color: gray;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
  border: none;
}
.dex-num-layout {
  border-radius: 20px;
  border: 2px solid #466e9b;
  flex: 1;
  padding: 30px;
  color: #b4ebff;
  font-size: 16px;
}
.dex-num-bar-layout {
  margin-top: 10px;
  position: relative;
  height: 20px;
  overflow: hidden;
}
.dex-num-bar {
  position: absolute;
  top: 40%;
  width: 100%;
  height: 1px;
  background-color: #b4ebff;
  border: 1px solid #b4ebff;
  border-radius: 10px;
}
.dex-num-bar-initial {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #b4ebff;
  cursor: pointer;
}
.dex-num-bar-end {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #b4ebff;
  right: 0px;
  cursor: pointer;
}
.dex-num-bar-initial:active,
.dex-num-bar-end:active {
  box-shadow: inset -3px -3px 5px white;
}
.second-choose-layout {
  width: 100%;
}
.region {
  padding-bottom: 5px;
  border-bottom: 1px solid #b4ebff;
  font-size: 24px;
  color: #b4ebff;
  margin-bottom: 20px;
}
.region-choose-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 80px;
}
.region-choose-layout > div {
  width: calc(100% / 6 - 10px);
  border-radius: 50px;
  padding: 0 10px;
  border: 1px solid white;
  cursor: pointer;
}
.reset-and-search-layout {
  display: flex;
  justify-content: space-between;
  gap: 50px;
}
.reset-and-search-layout button {
  flex: 1;
  color: #b4ebff;
  background: transparent;
  border: 1px solid #b4ebff;
  border-radius: 20px;
  font-size: 20px;
  padding: 5px;
  box-shadow: 0 0 2px 1px #b3eafe, 0 0 2px 1px #b3eafe;
  cursor: pointer;
}
.reset-and-search-layout button:active {
  box-shadow: inset 0 0 2px 1px #b3eafe, inset 0 0 2px 1px #b3eafe;
}
.hide-advance-search {
  margin-top: 50px;
  font-size: 24px;
  color: #b4ebff;
  padding: 5px 50px;
  border: 1px solid #b3eafe;
  border-radius: 10px;
  cursor: pointer;
}
.hide-advance-search:active {
  transform: translate(0, 5px);
}
</style>