<script>
import axios from 'axios';

export default {
    name: 'card',
    emits: ['plusefoodmenu'],
    data() {
        return {
            count: 0,
        };
    },

    props: {
        food: Object,
    },

    methods: {
        async sendShopFood(food) {
            try {
                const response = await axios.post('http://localhost:5000/shop/shopfood', { user: JSON.parse(localStorage.getItem('user')), food: food._id });
            } catch (error) {
                console.log(error.message);
            }
        },
        appendfoodlist(food) {
            this.$emit('plusefoodmenu', food)
        }
    }
}
</script>


<template>
    <div class="card d-flex">
        <div class="card--img">
            <img :src="'http://localhost:5000/images/' + food.img" alt="{{ food.img.id }}">
        </div>
        <hr>
        <div class="content">
            <h2 id="foodName">{{ food.foodName }}</h2>

            <div class="info">
                <h4 id="foodPrice">{{ food.price }}</h4>
                <p id="food-information">Malumot: <span>{{ food.foodInfo }}</span></p>
            </div>
        </div>

        <footer class="d-flex align-items-center justify-content-between">
            <div class="star">
                <i class="fas fa-star"></i>
                <span>{{ food.foodBall }}</span>
            </div>

            <div class="addedButton d-flex align-items-center justify-content-center">

                <!-- add button -->
                <button @click="() => sendShopFood(food)">
                    <img src="/Add.svg" alt="add">
                </button>

                <!-- Count +1 -->
                <button class="addControl" @click="">{{ count }} ta</button>
            </div>
        </footer>
    </div>
</template>

<style scoped>
@media screen and (min-width: 800px) {
    .card .card--img img {
        width: 180px;
    }
}

@media screen and (max-width: 800px) {
    .card .card--img img {
        width: 150px;
    }

    .card[data-v-3893d9c4] {
        width: 250px;
        height: 350px;
    }

    .card hr[data-v-3893d9c4] {
        width: 210px;
    }

    .content #foodName[data-v-3893d9c4] {
        font-size: 18px;
    }

    #foodPrice[data-v-3893d9c4] {
        font-size: 15px;
    }

    #food-information[data-v-3893d9c4] {
        font-size: 10px;
    }

    .info[data-v-3893d9c4] {
        margin: 5px 0;
    }

    .addedButton button[data-v-3893d9c4] {
        width: 60px;
        height: 25px;
        font-size: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .addedButton img[data-v-3893d9c4] {
        width: 16px;
    }

    .star[data-v-3893d9c4] {
        width: 40px;
        height: 20px;
    }

    .star span[data-v-3893d9c4] {
        font-size: 10px;
    }

    .star i[data-v-3893d9c4] {
        font-size: 10px;
    }
}

.addedButton button[data-v-3893d9c4] {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    margin: 20px auto;
}

footer {
    width: 100%;
}

footer .addedButton {
    width: 100%;
}

.addedButton img {
    width: 30px;
}

.addedButton button {
    width: 70px;
    height: 35px;
    background: rgba(242, 136, 110, 0.7);
    border-radius: 5px;
    border: none;
    outline: none;
    transition: .2s;
    margin: 0 5px;
    color: white;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.01em;
    font-family: sans-serif;
}

.addedButton button:active {
    transform: scale(1.1);
}


.star {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px;
    width: 60px;
    height: 30px;
    background: rgba(255, 214, 0, 0.18);
    border-radius: 3px;
    font-family: sans-serif;
}

.star i {
    color: #FFB800;
}

.star span {
    font-weight: 700;
    letter-spacing: 0.01em;
    color: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    margin: 0 5px;
}

.card {
    width: 300px;
    height: 470px;
    background: #efedec;
    border-radius: 15px;
    padding: 20px;
    border: none;
    box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.20);

}

.card .card--img {
    background: #F5F5F5;
    box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}

.card hr {
    width: 266px;
    height: 0px;
    border: 2px solid rgba(0, 0, 0, 0.1);
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 100%;
}

.content #foodName {
    font-family: sans-serif;
    font-weight: 700;
    font-size: 25px;
    letter-spacing: 0.05em;
    color: #039600;
}

#foodPrice {
    font-family: sans-serif;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.01em;
    color: #024B00;
}

#food-information {
    font-family: sans-serif;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.01em;
    color: #000000;
}

#food-information span {
    color: #CC6666;
}

.info {
    margin: 15px 0;
}
</style>
