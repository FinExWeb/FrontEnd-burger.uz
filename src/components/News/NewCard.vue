<script>
export default {

}
</script>


<template>
    <div class="cardApp">
        <div class="img">
            <img src="../../assets/img/bg.png" alt="bg">
        </div>
        <div class="content">
            <div class="navContent my-3">
                <h2 class="d-flex align-items-center">
                    <img src="../../assets/img/food-bag.svg" alt="food">
                    KABOB
                </h2>
            </div>
            <div class="mainContent my-4">
                <ul style="padding: 0;">
                    <li>
                        <img src="../../assets/img/tag.svg" alt="icon">
                        <span>Ovqat narxi:</span> 12.000 so'm
                    </li>
                    <li>
                        <img src="../../assets/img/teacher.svg" alt="icon">
                        <span>Restaurant:</span> START-BURER
                    </li>
                    <li>
                        <img src="../../assets/img/chart.svg" alt="icon">
                        <span>Sovg'a:</span> 1 ta coca-col (mir martalik)
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cardApp {
    max-width: 400px;
    min-height: 300px;
    padding: 20px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 15px 15px 50px 0px rgba(0, 0, 0, 0.17);
    display: flex;
    flex-direction: column;
    margin: 10px;
}

.cardApp .content .navContent h2 {
    font-weight: 700;
    letter-spacing: 1px;
}

.cardApp .content .navContent h2 img {
    width: 40px;
}

.cardApp .img {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cardApp .img img {
    width: 300px;
    border-radius: 15px;
}

.cardApp .mainContent ul li {
    list-style: none;
    display: flex;
    align-items: center;
}

.cardApp .mainContent ul li span {
    margin: 0 10px;
}

.cardApp .mainContent ul li img {
    width: 20px;
}
</style>