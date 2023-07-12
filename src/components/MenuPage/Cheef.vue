<script>
export default {
    name: 'cheef'
}
</script>
<template>
    <div class="cardApp">
        <img class="cheef" src="/chees.png" alt="">
        <div class="content">
            <div class="d-flex justify-content-between">
                <p>Eng zo’ri <span style="color: #5C4EAE;">tovuq</span><img src="/cup.svg" alt="cup"></p>
                <ul class="d-flex align-items-center">
                    <span class="time-data">24min •</span>
                    <div class="star d-flex align-items-center">
                        <i class="fa fa-star"></i>
                        <li>4.8</li>
                    </div>
                </ul>
                <div class="bookmark">
                    <img src="/Bookmark.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@media screen and (max-width: 776px) {
    .cardApp {
        width: 100%;
        height: 250px !important;
        border-radius: 30px;
    }

    .cardApp .content p {
        font-size: 20px;
    }

    .cardApp .content ul span {
        font-size: 15px;
    }

    .cardApp .content ul .star {
        font-size: 15px;
    }

    .content ul .star li {
        font-size: 15px;
    }

    .bookmark img {
        width: 30px;
    }
}

@media screen and (max-width: 576px) {
    .cardApp {
        width: 100%;
        height: 250px !important;
        border-radius: 30px;
    }

    .cardApp .content p {
        font-size: 20px;
    }

    .cardApp .content ul span {
        font-size: 15px;
    }

    .cardApp .content ul .star {
        font-size: 15px;
    }

    .content ul .star li {
        font-size: 15px;
    }

    .bookmark img {
        width: 30px;
    }
}

.content {
    padding: 35px;
}

.content ul .time-data {
    color: #8E97A6;
    font-size: 26.233px;
    font-family: Manrope;
}

.star {
    color: #6C5FBC;
    font-size: 26.233px;
    margin: 0 10px;
}

.star li {
    list-style: none;
    margin: 0 10px;
    color: #8E97A6;
    font-size: 26.233px;
    font-family: Manrope;
}

.content p {
    color: #323142;
    font-size: 40px;
    font-family: sans-serif;
    font-weight: 600;
}

.content p img {
    width: 35px;
    margin: 0 15px;
}

.cheef {
    border-radius: 30px 30px 0 0;
    width: 100%;
}

.cardApp {
    width: 100%;
    height: 520px;
    border-radius: 30px;
    background: #fff;
    box-shadow: 7px 90px 457px 0px rgba(171, 171, 171, 0.7);
}</style>