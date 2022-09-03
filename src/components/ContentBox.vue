<template>
    <div class="contentbox">
        <h2 v-text="data.title"></h2>
        <div class="imgBox">
            <div class="card" v-for="(item, index) in data.imgList" :key="index">
                <img :src="item.imgSrc" alt="">
                <p v-text="item.name"></p>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['data'],
}
</script>

<style lang="scss" scoped>
.contentbox {
    width: 100%;
    border-radius: .3rem;
    background: #fff;
    box-sizing: border-box;
    padding: .04rem 0 .12rem;
    // margin-bottom: .12rem;
    display: flex;
    flex-direction: column;

    h2 {
        width: 100%;
        box-sizing: border-box;
        padding: 0 .12rem;
        font-size: .24rem;
        line-height: .72rem;
    }

    .imgBox {
        display: flex;
        align-items: center;
        flex-wrap: wrap;


        .card {
            width: 33%;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 1.17rem;
                height: 1.17rem;
                padding: .08rem;
                margin-bottom: .04rem;
            }

            p {
                -webkit-line-clamp: 2;
                width: 71.875px;
                overflow: hidden;
                white-space: nowrap;
                font-size: .22rem;
                text-align: center;
            }
        }


    }

    .imgBox::after {
        display: block;
        content: '';
        width: 33%;

    }
}
</style>