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
        <div class="contactFood">
            <div class="howContact">
                <nav>
                    <h1>BOG’LANISH</h1>
                    <img src="/rightArrow.svg" alt="arrow">
                </nav>
                <main>
                    <p>Mijozlarni <span>qo’llab+quvvatlash</span>
                        bo’yicha <span>yordam markazi</span>!
                        Sizning ovqatlar bo’yicha
                        <span>shikoyalatlaringiz</span> biz uchun
                        juda muhim.
                        Biz bu <span>muammolarni</span> bartaraf
                        qilish uchun sizning
                        habarlaringizndan foydalanamiz,
                        ularni ko’rib chiqib <span>ovqatlardagi</span>
                        muammolarni <span>hal qilamiz</span>!
                    </p>
                </main>
            </div>
            <div class="form d-flex flex-column">
                <h3 class="text-center"><span>Mijozlarni</span> <br> qo'llab-quvvatlash</h3>
                <form @submit.prevent class="d-flex flex-column align-items-center justify-content-center">
                    <input type="text" placeholder="FIO" required>
                    <input type="email" placeholder="EMAIL KIRITING" required>
                    <textarea cols="44" rows="10" placeholder="QANDAY MUAMMO MAVJUD?"></textarea>
                    <button type="submit">Yuborish</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.form h3 {
    color: #252525;
    font-size: 40px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    margin: 20px 0;
}

.form h3 span {
    color: #6C5FBC;
}

.form form button {
    border-radius: 15.876px;
    background: #6C5FBC;
    width: 493px;
    height: 76px;
    color: #F9F9F9;
    font-size: 20.812px;
    font-family: sans-serif;
    font-weight: 500;
    border: none;
    outline: none;
    margin: 15px 0;
}

.form form input,
textarea {
    border-radius: 18.118px;
    border: 2px solid #6C5FBC;
    background: #F9F9F9;
    outline: none;
    padding: 22.647px 35px 22.647px 27.177px;
    margin: 10px 0;
    font-size: 16.892px;
    font-family: sans-serif;
    font-weight: 600;
}

.form form input {
    width: 499px;
    height: 70px;
}

.contactFood {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90vh;
}

.howContact nav img {
    position: relative;
    bottom: 40px;
}

.howContact nav h1 {
    color: #F9F9F9;
    font-size: 38px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
}

.howContact {
    width: 500px;
    height: 700px;
    background: #6C5FBC;
    padding: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.howContact nav {
    margin: 30px 0;
}

.howContact main {
    margin: -5px 0;
}

.howContact main p {
    color: #F9F9F9;
    text-align: center;
    font-size: 22px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 3px;
}

.howContact main p span {
    color: #00FFF0;
}
</style>