<template>
    <div>
        <div class="search">
            <van-icon name="arrow-left" size=".48rem" style="color:#000;font-weight:bold;" @click.native="back" />
            <van-search class="input" placeholder="华为服务" v-model.lazy="msg" @input.native="search" autofocus />
            <p>搜索</p>
        </div>
        <div v-show="show" class="close" @click="close">X</div>
        <ul class="searchList" v-show="show">
            <li class="item" @click="goDetails(item.id)" v-for="(item, index) in searchList" :key="index" v-text="item.title"></li>
        </ul>
        <div class="main" v-show="!show">
            <div class="faxian">
                <h2>搜索发现</h2>
                <div>
                    <p v-for="(item, index) in faxianList" :key="index" v-text="item"></p>
                </div>
            </div>
            <div class="resou">
                <img src="https://res.vmallres.com/portal/1.11.6.303/h5/images/hot-recommend-wap.png" alt="">
                <div class="tuijian">
                    <div v-for="(item, index) in resouList" :key="index">
                        <img class="num" v-if="index === 1" :src="imgList[1]" alt="">
                        <img class="num" v-else-if="index === 2" :src="imgList[2]" alt="">
                        <img class="num" v-else-if="!index" :src="imgList[0]" alt="">
                        <i v-else v-text="index + 1"></i>
                        <img :src="item.imgSrc" alt="">
                        <p v-text="item.context"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Mock from 'mockjs';
import axios from 'axios';
export default {
    data() {
        return {
            show: false,
            faxianList: [],
            resouList: [],
            imgList: ['https://res.vmallres.com/portal/1.11.6.303/h5/images/01-wap.png', 'https://res.vmallres.com/portal/1.11.6.303/h5/images/02-wap.png', 'https://res.vmallres.com/portal/1.11.6.303/h5/images/03-wap.png'],
            msg: '',
            searchList: [],
        }
    },
    async created() {
        const { faxianList, resouList } = Mock.mock({
            "faxianList|10": [() => Mock.Random.ctitle(2, 5)],
            "resouList|10": [{
                "context": () => Mock.Random.cparagraph(1),
                "imgSrc": () => Mock.Random.dataImage('48x48', 'haha')
            }]
        })
        this.faxianList = faxianList;
        this.resouList = resouList;
    },
    methods: {
        back() {
            this.$router.back();
        },
        search() {
            // console.log(this.msg);
            this.show = true;
            setTimeout(() => {
                this.getData();
            }, 500);
        },
        goDetails(id) { // 跳转详情页
            this.$router.push("/details?id=" + id + "");
        },
        close() {
            this.show = false;
            this.msg = '';
        },
        async getData() {
            const { data } = await axios.get('json/Cart.json');
            // console.log(data.res); 
            const arr = [];
            data.res.forEach(item => {
                // console.log(item.title);
                if (item.title.includes(this.msg)) {
                    arr.push(item)
                }
            });
            console.log(arr);
            this.searchList = arr;
        }
    },
}
</script>

<style lang="scss" scoped>
.close {
    position: absolute;
    right: 1.5rem;
    top: .37rem;
}

.searchList {
    width: 100%;
    box-sizing: border-box;
    padding: 0 .32rem;

    .item {
        height: .96rem;
        line-height: .96rem;
        border-bottom: 1px solid #666;
        opacity: .6;
        color: #000;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

    }
}

.resou {
    margin-top: .05rem;
    width: 100%;
    padding: 0 .38rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: .96rem;
    }

    .tuijian {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        div {
            width: 100%;
            height: 1.12rem;
            display: flex;
            align-items: center;

            .num {
                display: block;
                width: .4rem;
                height: .4rem;
                margin-right: .16rem;
            }

            i {
                display: block;
                color: #666;
                font-weight: bold;
                width: .4rem;
                height: .4rem;
                line-height: .4rem;
                text-align: center;
                margin-right: .16rem;
                font-size: .24rem;
            }

            img {
                width: .96rem;
                height: .96rem;
                border-radius: .2rem;
                margin-right: .2rem;
            }

            p {
                font-size: .26rem;
                color: #000;
                opacity: .6;
            }
        }

    }
}

.faxian {
    width: 100%;
    box-sizing: border-box;
    padding: 0 .32rem;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: .32rem;
        color: #000;
        margin: .36rem 0 .085rem 0;
    }

    div {
        margin-top: .05rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        p {
            padding: .1rem;
            border-radius: .2rem;
            background: #e5e7e9;
            color: #000;
            margin: .13rem .1rem;
            font-size: .24rem;
        }
    }
}

.van-search__content {
    background: none;
}

.van-cell {
    padding: none;
}

.search {
    width: 100%;
    height: 1.04rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .input {
        width: 70%;
        height: .8rem;
        border-radius: .35rem;
        background: #fff;
        border: none;
        margin: 0;
        padding: 0;
    }

    p {
        font-size: .28rem;
        font-weight: bold;
        color: #000;
    }


}
</style>