<script>
import HeaderRouter from './HaederRouter.vue'
import OrderWindow from './OrderWindow.vue';
import OrderWindowView from './orderWindowView.vue';
import NavbarMenu from '../NavbarMenu/NavbarMenu.vue'
export default {
    components: {
        HeaderRouter,
        OrderWindow,
        OrderWindowView,
        NavbarMenu,
    }
}
</script>

<template>
    <div class="container-fluid d-flex justify-content-center align-items-center flex-column">
        <div class="navbar">
            <NavbarMenu />
        </div>
        <div class="containerApp">
            <div class="sideBar d-flex flex-column align-items-center">
                <div class="nav d-flex align-items-ceneter justify-content-center">
                    <h3>BUYURTMLARNI QABUL QILISH <img src="/drinks.svg" alt="drinks"></h3>
                    <HeaderRouter class="my-3" />
                </div>
                
                <div class="openWindow">
                    <OrderWindow />
                    <OrderWindow />
                    <OrderWindow />
                    <OrderWindow />
                    <OrderWindow />
                </div>
            </div>

            <div class="headerBar">
                <router-view></router-view>
                <div class="headerBars">
                    <div class="left">
                        <img src="/statistics.svg" alt="statistics">
                        <div class="content">
                            <h3>YANGI</h3>
                            <h3>5 TA TAOM MAVJUD</h3>
                        </div>
                    </div>
                    <div class="right">
                        <h5>BUYURTMACHI:</h5>
                        <h5>AXMEDOV QUVONCHBEK</h5>
                    </div>
                </div>
                <div class="orders mx-5">
                    <OrderWindowView />
                    <OrderWindowView />
                    <OrderWindowView />
                    <OrderWindowView />
                    <OrderWindowView />
                    <OrderWindowView />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navbar{
    margin: 20px 0;
}
.containerApp .sideBar .nav {
    margin: 20px 0;
}

.containerApp .sideBar .nav h3 {
    text-shadow: 0px 4px 0px 0px #FFF;
    font-size: 17px;
    font-family: Inknut Antiqua;
    font-weight: 700;
}

.containerApp .sideBar .nav img {
    width: 30px;
    height: 30px;
    margin: 0 30px;
}

.headerBar .headerBars {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container-fluid {
    height: 100vh;
}

.headerBar .headerBars .right h5 {
    font-size: 15px;
    font-family: Paytone One;
    margin: 0;
}

.headerBar .headerBars .right h5:nth-child(2) {
    color: #3D5AFE;
}

.headerBar .headerBars .left {
    display: flex;
    align-items: center;
}

.headerBar .headerBars .left .content {
    margin: 0 15px;
}

.headerBar .headerBars .left .content h3 {
    font-size: 20px;
    font-family: Paytone One;
    margin: 0;
}

.headerBar .headerBars .left img {
    width: 75px;
    height: 75px;
}

.container-fluid .containerApp {
    display: flex;
    justify-content: space-between;
    width: 1438px;
    height: 850px;
    background: #FFF;
    border-radius: 15px;
}

.container-fluid .containerApp .sideBar {
    width: 519px;
    min-height: 100%;
    border-radius: 15px 0px 0px 15px;
    background: #F6F6F8;
}

.container-fluid .containerApp .headerBars {
    width: 826px;
    height: 100px;
    border-radius: 15px;
    background: #F6F6F8;
    margin: 50px 47px;
    padding: 50px;
}
</style>