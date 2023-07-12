<script>
import axios from 'axios'
import { useToast } from 'vue-toast-notification';

import NavbarMenu from '../NavbarMenu/NavbarMenu.vue';
export default {
    data() {
        return {
            email: "",
            fullname: "",
            password: "",
        };
    },
    methods: {
        async sendDataBackend() {
            const toast = useToast();
            let data = {
                email: this.email,
                password: this.password,
                fullname: this.fullname,
            };
            try {
                const response = await axios.post("http://localhost:5000/users/signup", data);
                console.log(response.data);
                await toast.success("Tizimga yo'naltirilmoqda");
                localStorage.setItem("user", JSON.stringify(response.data.user));
                console.log(JSON.stringify(response.data.user));
                setTimeout(() => {
                    window.location.href = "/menu";
                }, 3500);
            }
            catch (error) {
                console.log(error);
                if (error.response && error.response.status !== 200) {
                    await toast.warning(error.response.data.message);
                }
                else {
                    await toast.warning("Something went wrong");
                }
            }
        }
    },
    components: { NavbarMenu }
}
</script>

<template>
    <div class="container">
        <NavbarMenu />
        <div class="cardForm d-flex justify-content-center align-items-center" style="height: 90vh;">
            <div class="wrapper">
                <header>Ro’yhatdan o’ting</header>
                <form action="#" @submit.prevent>
                    <div class="field email">
                        <div class="input-area">
                            <input type="text" placeholder="ISM VA FAMILYA" required v-model="fullname" name="fullname">
                            <i class="icon fas fa-user"></i>
                        </div>
                    </div>
                    <div class="field password">
                        <div class="input-area">
                            <input type="email" placeholder="EMAIL KIRITING" required v-model="email" name="email">
                            <i class="icon fas fa-envelope"></i>
                        </div>
                    </div>
                    <div class="field password my-5">
                        <div class="input-area">
                            <input type="password" placeholder="PAROL KIRITING" required v-model="password" name="password">
                            <i class="icon fas fa-lock"></i>
                        </div>
                    </div>
                    <a href="#">
                        <input type="submit" value="Yuborish" @click.prevent="sendDataBackend">
                    </a>
                </form>
                <div class="sign-txt">Account mavjudmi? <a href="/login"><router-link to="/login">Kirish</router-link></a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
form input[type="submit"] {
    border-radius: 15.564px;
    background: #6C5FBC;
    width: 382.441px;
    height: 64.487px;
    color: #F3F5F6;
    font-size: 17.788px;
    font-family: sans-serif;
    letter-spacing: 0.534px;
}

.sign-txt {
    color: #CBCBCB;
    font-size: 18.9px;
    font-weight: 700;
    letter-spacing: 0.189px;
}

.sign-txt a {
    text-decoration: none;
    color: #6C5FBC;
}


.container {
    height: 100vh;
}

.wrapper {
    padding: 40px 30px 50px 30px;
    text-align: center;
}

.wrapper form {
    margin: 40px 0;
}

form .field {
    width: 100%;
    margin-bottom: 20px;
}

form .field.shake {
    animation: shake 0.3s ease-in-out;
}

@keyframes shake {

    0%,
    100% {
        margin-left: 0px;
    }

    20%,
    80% {
        margin-left: -12px;
    }

    40%,
    60% {
        margin-left: 12px;
    }
}

form .field .input-area {
    height: 50px;
    width: 100%;
    position: relative;
}

form input {
    width: 382.441px;
    height: 74.487px;
    outline: none;
    border: none;
    padding: 0 45px;
    font-size: 18px;
    background: none;
    border-radius: 14.275px;
    background: #F5F5F5;
}

.input-area .icon {
    left: 15px;
    color: #bfbfbf;
    transition: color 0.2s ease;
}

form input::placeholder {
    color: #bfbfbf;
    font-size: 17px;
}

.input-area {
    display: flex;
    align-items: center;
}

.field {
    margin: 50px 0;
}

header {
    color: #323142;
    font-size: 35.25px;
    font-family: sans-serif;
    font-weight: 600;
    letter-spacing: -1.41px;
    margin: 1.2vh 0;
}

.pass-txt {
    text-align: end;
}

.field .input-area i {
    position: absolute;
    top: 50%;
    font-size: 18px;
    pointer-events: none;
    transform: translateY(-50%);
}

.input-area .icon {
    left: 15px;
    color: #bfbfbf;
    transition: color 0.2s ease;
}

.pass-txt a {
    color: #6C5FBC;
    font-size: 15.564px;
    opacity: 0.699999988079071;
    font-family: sans-serif;
    text-decoration: none;
}
</style>