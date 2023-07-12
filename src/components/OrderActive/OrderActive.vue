<script>
import NavbarMenu from '../NavbarMenu/NavbarMenu.vue';
import OrderCard from './OrderCard.vue'
export default {
    components: { NavbarMenu, OrderCard }
}
</script>

<template>
    <nav class="container my-2">
        <NavbarMenu />
        <hr class="navbarHRNav" />
    </nav>
    <div class="container d-flex justify-content-center align-items-center flex-column" style="height: 95vh;">
        <div class="cards">
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
        </div>

        <div class="calculate my-5 d-flex justify-content-between" style="width: 50%;">
            <p>Jami tolovingiz:</p>
            <p>235.000 so'm</p>
        </div>

        <div class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none">
                <path
                    d="M99.0803 102.926C78.8003 103.949 58.4169 99.8568 43.2489 84.9896C29.5581 71.5702 26.8806 53.3965 46.8972 44.7935C56.3726 40.7209 70.3294 42.226 76.4286 51.3826C83.2236 61.5838 68.7233 68.5095 60.5963 68.1606C41.6146 67.346 23.6852 51.816 22.9103 31.0129C21.9926 6.37728 47.1778 9.3636 47.1038 9.51503"
                    stroke="#6C5FBC" stroke-width="2.88658" stroke-miterlimit="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path
                    d="M84.3521 120.097C84.9598 117.935 86.3941 116.261 87.7396 114.518C92.1572 108.794 98.7449 104.041 106.048 102.906C98.1494 101.599 88.336 97.2391 85.2082 89.4299"
                    stroke="#6C5FBC" stroke-width="2.88658" stroke-miterlimit="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
            <button>Tolovni amalga oshirish</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none">
                <path
                    d="M30.2112 102.926C50.4912 103.949 70.8746 99.8568 86.0426 84.9896C99.7334 71.5702 102.411 53.3965 82.3943 44.7935C72.9189 40.7209 58.9621 42.226 52.8629 51.3826C46.0679 61.5838 60.5682 68.5095 68.6952 68.1606C87.6769 67.346 105.606 51.816 106.381 31.0129C107.299 6.37728 82.1137 9.3636 82.1877 9.51503"
                    stroke="#6C5FBC" stroke-width="2.88658" stroke-miterlimit="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path
                    d="M44.9394 120.097C44.3317 117.935 42.8974 116.261 41.5519 114.518C37.1343 108.794 30.5466 104.041 23.2439 102.906C31.1421 101.599 40.9555 97.2391 44.0833 89.4299"
                    stroke="#6C5FBC" stroke-width="2.88658" stroke-miterlimit="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
    </div>
</template>

<style scoped>
.btn button {
    position: relative;
    top: 40px;
    width: 654px;
    height: 60px;
    flex-shrink: 0;
    outline: none;
    border-radius: 15.043px;
    background: #6C5FBC;
    border: none;
    color: #FFF3EB;
    font-family: Poppins, sans-serif;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
}

.calculate p {
    color: #323142;
    font-family: Poppins, sans-serif;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.5px;
}

.navbarHRNav {
    width: 100%;
    height: 0px;
    border: 1px solid #CBCBCB;
}
</style>