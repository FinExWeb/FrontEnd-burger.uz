<script>
export default {
    data() {
        return {
            textColor: 'black',
            backgroundColor: 'white',
            clicked: false
        };
    },
    methods: {
        handleClick() {
            this.textColor = 'black';
            this.backgroundColor = '#00FF57';
            this.clicked = true;
        }
    }
};
</script>

<template>
    <div class="order d-flex justify-content-between align-items-center" :class="['order', { 'clicked': clicked }]"
        @click="handleClick" :style="{ backgroundColor: backgroundColor }">
        <div class="rigt-Content">
            <h3 :style="{ color: textColor }">BUYURTMA <span>#0001</span></h3>
            <h4 class="data"><img src="/time.svg" alt="time"
                    :style="{ filter: textColor === 'white' ? 'invert(100%)' : 'none' }">XOZIR BUYURTMA QILINDI</h4>
        </div>
        <h2 :style="{ color: textColor }">201,000 so’m</h2>
    </div>
</template>

<style scoped>
.clicked {
    background-color: #00FF57;
}

.order {
    width: 425px;
    height: 100px;
    border-radius: 15px;
    background: #FFF;
    padding: 5px 30px;
    margin: 25px 0;
    cursor: pointer;
}

.order h2 {
    font-size: 23px;
    font-family: Paytone One;
    font-weight: 400;
    letter-spacing: -1.2px;
}

.order .rigt-Content h4 {
    color: #3D5AFE;
    font-size: 14px;
    font-family: Paytone One;
    display: flex;
    align-items: center;
    margin: 0 -5px;
}

.order .rigt-Content h3 {
    font-size: 17px;
    font-family: Paytone One;
    opacity: 0.6399999856948853;
}

.order .rigt-Content h4 img {
    width: 15px;
    height: 15px;
    margin: 0 5px;
}
</style>