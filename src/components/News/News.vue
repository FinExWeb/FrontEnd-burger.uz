<script>
import NavbarMenu from '../NavbarMenu/NavbarMenu.vue';
import NewCard from './NewCard.vue';

export default {
    name: "News",
    components: { NavbarMenu, NewCard }
}
</script>

<template>
    <div class="container">
        <nav>
            <NavbarMenu />
        </nav>
        <div class="content my-5">
            <h1 class="text-center">SIZ UCHUN AJOYIB <span>YANGILIKLAR</span> MAVJUD!</h1>
        </div>
        <div class="cards">
            <NewCard />
        </div>
    </div>
</template>

<style scoped>
.container .cards {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
}

.content h1 span {
    color: #5C4EAE;
}

.content h1 {
    font-family: Poppins, sans-serif;
    color: #003;
    font-weight: 600;
}
</style>