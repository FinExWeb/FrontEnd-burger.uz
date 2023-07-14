<script>
import NavbarMenu from '../NavbarMenu/NavbarMenu.vue';

export default {
    components: { NavbarMenu }
}
</script>

<template>
    <div class="container">
        <div class="navbarMenu">
            <NavbarMenu />
        </div>
        <div class="forms">
            <div class="contents">
                <h2><span>Mijozlarni</span> qo'llab-quvvatlash</h2>
                <form @submit.prevent class="my-5">
                    <input type="text" placeholder="FIO">
                    <input type="email" placeholder="EMAIL KIRITING">
                    <textarea cols="30" rows="10" placeholder="QANDAY MUAMMO MAVJUD?"></textarea>
                    <button class="my-2">YUBORISH</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.forms {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}

.forms .contents span,
h2 {
    font-family: Poppins, sans-serif;
    font-size: 40px;
    font-weight: 700;
}

.forms .contents span {
    color: #6C5FBC;
}

.forms .contents h2 {
    color: #252525;
}

.forms .contents form input,
textarea {
    width: 493px;
    border-radius: 16.892px;
    border: 2px solid #6C5FBC;
    background: #F9F9F9;
    padding: 20px;
    outline: none;
    margin: 10px 0;

    color: #B6B6B6;
    font-family: Inter, sans-serif;
    font-size: 16.892px;
    font-weight: 600;
}

.forms .contents form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.forms .contents form button {
    border-radius: 15.876px;
    background: #6C5FBC;
    outline: none;
    width: 493px;
    padding: 20px;
    border: none;

    color: #F9F9F9;
    font-family: Poppins, sans-serif;
    font-size: 20.812px;
    font-weight: 500;
    letter-spacing: 0.624px;
}

@media screen and (max-width: 500px) {

    .forms .contents form input[data-v-0d4685de],
    textarea[data-v-0d4685de] {
        width: 393px;
        padding: 20px;
    }

    .forms .contents form button[data-v-0d4685de] {
        width: 393px;
        padding: 20px;
    }

    .forms[data-v-0d4685de] {
        height: 100vh;
    }
}

@media screen and (max-width: 800px) {
    .forms .contents h2 {
        text-align: center;
    }
}

@media screen and (max-width: 400px) {

    .forms .contents form input[data-v-0d4685de][data-v-0d4685de],
    textarea[data-v-0d4685de][data-v-0d4685de] {
        width: 300px;
        padding: 20px;
    }

    .forms .contents form button[data-v-0d4685de][data-v-0d4685de] {
        width: 300px;
        padding: 20px;
    }
}
</style>