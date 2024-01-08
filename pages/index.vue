<script setup>
const user = ref([]);
async function fetchData() {
  try {
    const res = await fetch("http://3.81.202.151:4000/api/search");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json(); // 假设响应是JSON格式
    // console.log(data)
    user.value = data;
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}
const postData = async () => {
  try {
    const res = await fetch("http://3.81.202.151:4000/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ id: nameInput.value }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json(); // 假設響應是JSON格式
    if (data.result === "success") {
      fetchData();
    }
    console.log(data, "data");
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
const handlePost = () => {
  postData();
};
const nameInput = ref("Hi");
onMounted(async () => {
  console.log(234);
  fetchData();
});
const deleteHandler = async (userData) => {
  console.log("有進到delete");
  try {
    const res = await fetch(
      `http://3.81.202.151:4000/api/search/${userData.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        //   body: JSON.stringify({ id: userData.id })
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json(); // 假設響應是JSON格式
    console.log(data);
    if (data.result === "success") {
      fetchData();
    }
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
// let test = await fetchData()
// console.log(test)
</script>
<template>
  <div class="home-layout">
    <!-- <p>頁面尚未完成，請轉至圖鑑頁</p> -->

    <input v-model="nameInput" />

    <button @click="handlePost">我按鈕在哪</button>
    <template v-if="user.length != 0">
      <div id="user">
        <p
          v-for="(userData, userIndex) in user"
          :key="userIndex"
          @click="deleteHandler(userData)"
        >
          {{ userData.id }}.{{ userData.name }}
        </p>
      </div>
    </template>
  </div>
</template>
<style scoped>
.home-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.home-layout::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  /* background-image: url("/pokemon_bg.png"); */
  background-color: white;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%) rotate(0deg);
  /* animation: rotate 2s linear infinite;  */
  z-index: -1;
}
@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.home-layout p {
  font-size: 48px;
  font-weight: 600;
  /* animation: opacity 1.5s infinite; */
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
#user {
  display: flex;
  gap: 10px;
  margin: 0;
  flex-direction: column;
}
#user p {
  border: 1px solid black;
  padding: 2px;
  margin: 0;
}
</style>