<script>
export default {

}
</script>

<template>
    <div>
        <div class="cardProduct">
            <div class="left">
                <img src="/palov.png" alt="">
                <div>
                    <h4>Tuxum solingan, toy palov</h4>
                    <h5>$12.99</h5>
                </div>
            </div>
            <div class="Right text-end">
                <h6 class="Price">05 PORS</h6>
                <h5 class="Price">45.000 So'm</h5>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 100px;
}

.cardProduct {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    padding: 10px 20px;
    border-radius: 5px;
    border-radius: 11.965px;
    background: #FFF;
    box-shadow: 0px 19.941944122314453px 29.912918090820312px 0px rgba(70, 70, 70, 0.10);
    width: 654px;
    height: 109px;
    flex-shrink: 0;
    margin: 10px 0;
}

.cardProduct .left {
    display: flex;
    align-items: center;
    justify-content: center;
}

.cardProduct .left img {
    margin: 0 10px 0 0;
}
</style>