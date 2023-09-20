<template>
    <div>
        <Header class="header"></Header>
        <slot></slot>
        <Footer></Footer>
    </div>
</template>
<style scoped>
.header{
    /* position:fixed; */
    width:100%;
    z-index:100;
}
</style>