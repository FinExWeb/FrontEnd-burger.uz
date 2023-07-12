<script>
import NavbarMenu from '../components/NavbarMenu/NavbarMenu.vue'
export default {
    components: {
        NavbarMenu
    }
}
</script>
<template>
    <div class="container">
        <div class="navbarApp">
            <NavbarMenu />
        </div>
        <div class="loader d-flex justify-content-center align-items-center flex-column" style="height: 90vh;">
            <svg class="my-5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" viewBox="0 0 24 30"
                style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <rect class="loaderSVG" x="0" y="0" width="4" height="10" fill="#536DFE">
                    <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"
                        begin="0" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <rect class="loaderSVG" x="10" y="0" width="4" height="10" fill="#536DFE">
                    <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"
                        begin="0.2s" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <rect class="loaderSVG" x="20" y="0" width="4" height="10" fill="#536DFE">
                    <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"
                        begin="0.4s" dur="0.6s" repeatCount="indefinite" />
                </rect>
            </svg>
            <p class="fs-3 text-center">Xozirda bu bo'limda <br>texnik ishlar olib borilmoqda!</p>
        </div>
    </div>
</template>
<style scoped>
p{
    font-family: monospace;
    font-weight: 600;
    letter-spacing: 1px;
}
</style>