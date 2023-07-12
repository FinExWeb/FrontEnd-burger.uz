<script>
export default {

}
</script>

<template>
    <div class="router--link">
        <ul>
            <button>
                yangi
            </button>
            <button>
                qo'shish
            </button>
            <button>
                o'chirish
            </button>
        </ul>
    </div>
</template>

<style scoped>
button {
    background: none;
    border: none;
    outline: none;
    text-transform: uppercase;
}

.router--link {
    width: 420px;
    height: 50px;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 15px 15px 20.545400619506836px 0px rgba(0, 0, 0, 0.15);
}

.router--link ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 25px;
    height: 100%;
}

.router--link ul button {
    width: 108px;
    height: 35px;
}

.active {
    padding: 5px;
    border-radius: 5px;
    background: #3859CD;
}

.router--link ul button:hover {
    padding: 5px;
    border-radius: 5px;
    background: #3859CD;
    transition: 0.1s;
    color: #FFF;
}

a {
    color: black;
    text-decoration: none;
}

li {
    list-style: none;
}

* {
    text-transform: uppercase;
    font-size: 17px;
    font-family: Paytone One;
    font-weight: 400;
}
</style>