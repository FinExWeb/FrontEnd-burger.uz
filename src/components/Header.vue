<script>
import NavbarMenu from './NavbarMenu/NavbarMenu.vue'
import Card from './Cards/Card.vue'
import axios from 'axios'

export default {
    name: "Header",
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
    },
    components: { NavbarMenu, Card }
}
</script>


<template>
    <div class="container">
        <div class="navbarMenu">
            <NavbarMenu />
            <hr class="navbarHRNav" />
        </div>
        <div class="row justify-content-center align-items-center my-4">
            <div class="col-sm-9 col-md-10 d-flex text-center mainControl">
                <div class="content text-center">
                    <ul class="d-flex align-items-center ulList justify-content-center">
                        <hr />
                        <span>1000 ta foydalanuvchi</span>
                    </ul>
                    <h1 class="my-4 text-center w-100">Bugun barcha <span>ovqatlar</span> siz uchun</h1>
                    <p class="my-4">START-BURGER.UZ restoranida barcha ovqatlar uchun ajoyib qo’shimchalar mavjud. Eng
                        sifatli ovqatlar va tez yetkazib berish xizmati faqat START-BURGER.UZda!</p>
                    <form class="mainForm" @submit.prevent>
                        <button style="background-color: #6C5FBC;">
                            <a style="font-size: 16.271px;" class="text-decoration-none" href="#">Boshlash</a>
                        </button>
                        <button class="mx-4">
                            <a class="text-decoration-none" href="#">Pro versiya</a>
                        </button>
                    </form>
                </div>
                <img class="d-flex justify-content-center align-items-center img-fluid" src="/Hero.png" alt="" />
            </div>
        </div>
        <hr class="navbarHR" />
        <div class="shopping">
            <h1 class="text-center foodText">Ovqatlar <span style="color: #5C4EAE;">menyusi</span></h1>
            <div class="foods">
                <Card v-for="food of backFoods" :key="food._id" :food="food" />
            </div>
            <div class="viewAll">
                <a href="/menu"><router-link to="/menu">Barchasini ko'rish</router-link></a>
            </div>
        </div>
        <hr class="navbarHR" />
    </div>
</template>

<style scoped>
@media screen and (max-width: 800px) {
    .foods {
        flex-direction: column;
    }
}

.content ul {
    color: rgba(32, 31, 31, 0.20);
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;
}

.content h1 {
    color: #201F1F;
    font-size: 75px;
    font-weight: 600;
    letter-spacing: -3px;
}

.content p {
    color: #676767;
    font-size: 18px;
}

.content h1 span {
    color: #5C4EAE;
}

@media screen and (min-width: 768px) {
    .content h1 {
        text-align: start !important;
    }

    .mainForm {
        display: flex;
        justify-content: start;
    }

    .mainControl {
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .ulList {
        justify-content: start !important;
    }

    .ulList hr {
        width: 36px;
    }

    .ulList span {
        margin-left: 20px;
    }

    .content p {
        text-align: start;
    }
}

@media screen and (max-width: 576px) {
    .mainControl {
        flex-direction: column;
    }

    .content p {
        text-align: center;
    }
}

.content p {
    color: #676767;
    font-size: 18px;
}

.mainForm {
    margin: 70px 0;
}

.mainForm button {
    outline: none;
    border: none;
}

.mainForm button:nth-child(1) {
    width: 156px;
    height: 59px;
    border-radius: 12.412px;
    background: #6C5FBC;
}

.mainForm button:nth-child(1) a {
    color: #FFF;
    font-size: 16.271px;
    letter-spacing: 0.163px;
}

.mainForm button:nth-child(2) a {
    color: #6C5FBC;
    font-size: 16.271px;
    font-weight: 500;
    letter-spacing: 0.163px;
}

.mainForm button:nth-child(2) {
    background: none;
    width: 110px;
    height: 59px;
    border-radius: 12.412px;
    border: 1.5px solid #6C5FBC;
}

@media screen and (max-width: 576px) {
    .content h1 {
        color: #201F1F;
        font-size: 35px;
        font-weight: 600;
        letter-spacing: -2px;
        width: 300px;

    }

    .content h1 span {
        color: #5C4EAE;
    }

    .ulList hr {
        width: 34px;
        height: 2px;
        opacity: 0.20000000298023224;
        background: #201F1F;
    }

    .ulList span {
        color: rgba(32, 31, 31, 0.20);
        font-size: 15px;
        font-weight: 600;
        letter-spacing: 2px;
        margin: 0 10px;
    }

    .shopping .foodText {
        font-size: 30px;
    }

    .viewAll {
        justify-content: center !important;
    }
}

.viewAll {
    display: flex;
    justify-content: end;
    width: 100%;
    margin: 30px 0;
}

.viewAll a {
    text-decoration: none;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: -0.1px;
    color: #ACADB9;
}

.navbarHR {
    margin: 50px 0;
}

.navbarHRNav {
    width: 100%;
    height: 0px;
    border: 1px solid #CBCBCB;
}

.shopping {
    margin: 100px 0;
}

.shopping h1 {
    margin: 50px 0;
    font-weight: 600;
    font-size: 45px;
    color: #323142;
}

.foods {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
}

.container {
    padding: 30px 0;
}

.container .navbarHR {
    width: 100%;
    height: 0px;
    border: 1px solid #CBCBCB;
}

* {
    font-family: sans-serif;
}
</style>
