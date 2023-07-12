<script>
import NavbarMenu from '../NavbarMenu/NavbarMenu.vue';
import Cheef from './Cheef.vue'
import CardMenu from './CardMenu.vue';
import OrderFood from '../OrderFood/OrderFood.vue';
export default {
    name: "MenuPage",
    components: { NavbarMenu, Cheef, CardMenu, OrderFood },
    data() {
        return {
            viewfood: []
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="navbarMenu">
            <NavbarMenu />
        </div>
        <hr class="navbarHRNav">
        <div class="cheef d-flex justify-content-center">
            <Cheef />
        </div>
        <hr class="navbarHRNav my-5">
        <div class="shopFood">
            <CardMenu :viewfood="viewfood" />
        </div>
        <hr class="navbarHRNav">
        <div class="FoodOrder">
            <h3 class="navbarText">Qo'shilgan <span>ovqatlar</span></h3>
            <div class="cardsMenu d-flex">
                <OrderFood />
                <OrderFood />
            </div>
        </div>
        <hr class="navbarHRNav">
        <div class="d-flex justify-content-center align-items-center">
            <button class="orderactive my-5"><router-link to="/orderactive">Buyutmani amalga oshirish</router-link></button>
        </div>
        <hr class="navbarHRNav">
    </div>
</template>

<style scoped>
.orderactive {
    border: none;
    outline: none;
    width: 40%;
    height: 50px;
    border-radius: 5px;
}

.orderactive a {
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    color: #5C4EAE;
    font-weight: 600;
    letter-spacing: 1px;
}

@media screen and (max-width: 600px) {
    .navbarText {
        text-align: center;
    }
}

.cardsMenu {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.navbarText {
    color: #323142;
    font-size: 35px;
    font-family: sans-serif;
    font-weight: 600;
    margin: 50px 0;
}

.navbarText span {
    color: #5C4EAE;
}

.navbarHRNav {
    width: 100%;
    height: 0px;
    border: 1px solid #CBCBCB;
}

.cheef {
    margin: 100px 0;
}
</style>