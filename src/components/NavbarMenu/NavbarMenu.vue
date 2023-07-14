<script>
import Brend from './Brend.vue';

export default {
    name: "NavbarMenu",
    data() {
        return {
            showBars: true,
            showList: true
        }
    },
    methods: {
        hideBarsButton() {
            this.showBars = !this.showBars;
            this.showList = !this.showList;
        }
    },
    components: { Brend }
}
</script>

<template>
    <div class="navbar">
        <div class="listing">
            <div class="brend">
                <Brend />
            </div>
            <ul id="ulList" :style="{ display: showList ? 'flex' : 'none' }">
                <li class="d-flex align-items-center">
                    <a href="/"><router-link to="/">Asosiy</router-link></a>
                    <img style="width: 25px; margin: 0 10px;" src="/home.svg" alt="pricing">
                </li>
                <li class="d-flex align-items-center">
                    <a href="/menu"><router-link to="/menu">Menu</router-link></a>
                    <img style="width: 25px; margin: 0 10px;" src="/menuApp.svg" alt="pricing">
                </li>
                <li class="d-flex align-items-center">
                    <a href="/in-progress"><router-link to="/prices">Narxlar</router-link></a>
                    <img style="width: 25px; margin: 0 10px;" src="/pricing.svg" alt="pricing">
                </li>
                <li class="d-flex align-items-center">
                    <a href="/problemfoods"><router-link to="/problemfoods">Shikoyat</router-link></a>
                    <img style="width: 25px; margin: 0 10px;" src="/email.svg" alt="email">
                </li>
                <li class="d-flex align-items-center">
                    <a href="/news"><router-link to="/news">Yangiliklar</router-link></a>
                    <img style="width: 25px; margin: 0 10px;" src="/cooperate.svg" alt="email">
                </li>
            </ul>
            <button class="bars" style="cursor: pointer;" @click="hideBarsButton">
                <img src="/bars.svg" alt="bars">
            </button>
        </div>

        <div class="login">
            <form @submit.prevent>
                <button class="no--border">
                    <a href="/login"><router-link to="/login">Kirish</router-link></a>
                </button>
                <button class="yet--border">
                    <a href="/register"><router-link to="/register">Yaratish</router-link></a>
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.bars {
    border: none;
    outline: none;
    background: none;
}

.bars img {
    width: 35px;
}

@media screen and (min-width: 1000px) {
    .bars {
        display: none;
    }
}

@media screen and (max-width: 1000px) {
    .listing {
        justify-content: space-around;
        width: 100%;
    }

    #ulList,
    .login {
        display: none;
    }

    #ulList {
        background-color: rgb(157 157 157 / 28%);
        position: absolute;
        width: 70%;
        height: 60vh;
        backdrop-filter: blur(10px);
        z-index: 111;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        left: auto;
        top: 100%;
        animation: showBars 1s ease;
    }

    .listing ul li[data-v-33487852] {
        list-style: none;
        margin: 10px 0;
    }

    .listing ul li a[data-v-33487852] {
        font-weight: 700;
        margin: 0 10px;
    }
}

@keyframes showBars {
    0% {
        opacity: 0;
    }

    30% {
        opacity: 1;
    }
}

.login form button {
    outline: none;
    border: none;
    margin: 0 20px;
}

.login form .yet--border {
    padding: 17.8286px 26.7429px;
    width: 121px;
    height: 62px;
    background: #6C5FBC;
    border-radius: 17.8286px;
}

.login form .yet--border a {
    font-weight: 700;
    font-size: 17.8286px;
    color: #F9F9F9;
}

.login form .no--border {
    background: none;
}

.login form .no--border a {
    font-family: sans-serif;
    font-weight: 700;
    font-size: 17.8286px;
    color: #606060;
}

a {
    text-decoration: none;
}

.navbar .listing {
    display: flex;
    align-items: center;
}

.listing ul {
    display: flex;
    margin: 0;
}

.listing ul li {
    list-style: none;
    margin: 0 30px;
}

.listing ul li a {
    text-decoration: none;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 17.8286px;
    color: #606060;
}
</style>