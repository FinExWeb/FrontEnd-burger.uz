<script>
export default {
    name: 'orderFood'
}
</script>

<template>
    <div class="card">
        <div class="card--img">
            <img src="/somsa.png" alt="Somsa">
        </div>
        <h4 class="text-center fs-3 mt-4">Qo'shilgan</h4>
        <div class="text-center listProduct">
            <p>Somsa</p>
            <p>23 ta</p>
        </div>
        <button class="delete">
            O'chirish
        </button>
    </div>
</template>

<style scoped>
@media screen and (min-width: 800px) {
    .card .card--img img {
        width: 170px;
    }
}

@media screen and (max-width: 800px) {
    .card .card--img img {
        width: 150px;
    }
}

.card h4 {
    color: #5C4EAE;
}

@media screen and (max-width: 700px) {
    .card[data-v-05af7fdc] {
        width: 250px;
        height: 350px;
    }

    .card .delete {
        width: 100%;
        margin: 5px 0;
        font-size: 18px;
    }
}

.listProduct {
    font-family: sans-serif;
    font-size: 1.1rem;
    color: rgb(79, 131, 0);
    font-weight: 600;
}

.listProduct p {
    margin: 0;
}

.delete {
    background: #dc6161;
    border: none;
    outline: none;
    box-shadow: 0 0 30px #C36666;
    height: 50px;
    border-radius: 5px;
    font-family: sans-serif;
    color: white;
    font-size: 20px;
    margin: 15px 0;
    transition: 0.2s;
}

.delete:active {
    transform: scale(1.05);
}

.card {
    width: 300px;
    max-height: 450px;
    background: #efedec;
    border-radius: 15px;
    padding: 20px;
    border: none;
    box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.20);
    margin: 20px;
}

.card .card--img {
    background: #F5F5F5;
    box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 150px;
}
</style>