<script>
import axios from 'axios'
import Card from '../Cards/Card.vue';
export default {
    name: "CardMenu",
    props:{
        viewfood: Array
    },
    data() {
        return {
            img: null,
            foodName: "",
            price: "",
            foodInfo: "",
            foodBall: "",
            backFoods: [],
        }
    },
    created() {
        this.getFoodsBackEnd();
    },
    methods: {
        changeImg(e) {
            this.img = e.target.files[0];
        },
        async sendFoodBackEnd() {
            const formData = new FormData();
            formData.append('img', this.img);
            formData.append('foodName', this.foodName);
            formData.append('price', this.price);
            formData.append('foodInfo', this.foodInfo);
            formData.append('foodBall', this.foodBall);

            try {
                const response = await axios.post('http://localhost:5000/food/addfood', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });
                console.log(response.data);
            } catch (error) {
                console.log(error.response.data);
            }
        },
        async getFoodsBackEnd() {
            try {
                const response = await axios.get('http://localhost:5000/foods');
                this.backFoods = response.data;
            } catch (error) {
                console.log(error.message);
            }
        },
        async plusemenulist(food){
            this.viewfood.push(food)
        }
    },
    components: { Card },
}
</script>

<template>
    <div class="container">
        <h3 class="navContent">Barchasi 🔥</h3>
        <div class="cards">
            <Card  v-for="food of backFoods" :key="food._id" :food="food" @plusefoodmenu="plusemenulist" />
        </div>
    </div>
</template>

<style scoped>
.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
}
.navContent {
    color: #323142;
    font-size: 35px;
    font-family: sans-serif;
    font-weight: 600;
}

.cards {
    margin: 60px 0;
    display: flex;
    justify-content: space-between;
}
</style>