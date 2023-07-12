<script>
import NavbarMenu from '../NavbarMenu/NavbarMenu.vue'
import Chart from '../ChartJS/Chart.vue';
export default {
    components: {
    NavbarMenu,
    Chart
}
}
</script>

<template>
    <div class="container">
        <nav>
            <NavbarMenu />
        </nav>
        <Chart />
    </div>
</template>

<style></style>