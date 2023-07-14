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
    </div>
    <div class="formCollection row">
        <div class="col-xxl-5  col-md-5 col-sm-5">
            <form>
                <input type="text" placeholder="FIO" class=" my-2">
                <input class="my-2 " type="text" placeholder="EMAIL KIRITING">
                <textarea cols="30" class="my-2 " rows="10" placeholder="QANDAY MUAMMO MAVJUD?"></textarea>
                <input type="button" value="YUBORISH" class="my-3 buttons">
            </form>
        </div>
    </div>
</template>

<style scoped>
.formCollection form input,
textarea {
    width: 300px;
}
</style>