<template>
    <div class="wrapper" style="height:100vh;overflow-y:scroll;">
        <div class="box">
            <div class="item" v-for="(item, index) in dataList" :key="index">
                <span :class="xiabiao === index ? 'active' : ''" v-text="item" @click="chuanzhi(index)"></span>
            </div>
        </div>
    </div>
</template>

<script>
import Mock from "mockjs";
import bus from "@/utils/EventBua.js"
export default {
    data() {
        return {
            xiabiao: 0,
            dataList: [],
            list: [],
        }
    },
    async created() {
        const { list1, list2 } = await Mock.mock({
            "list1|5": [() => Mock.Random.ctitle(2)],
            "list2|10": [() => Mock.Random.ctitle(4)],
        })
        // console.log(list);
        this.dataList = [...list1, ...list2];
        const { list } = await Mock.mock({
            "list|15": [{
                "banner|2-10": [() => Mock.Random.image('200x100')],
                "contentData|2-3": [{
                    "title": () => Mock.Random.ctitle(4, 7),
                    "imgList|7-13": [{
                        "name": () => Mock.Random.cname(4, 7),
                        "imgSrc": () => Mock.Random.dataImage('55x55', 'haha')
                    }]
                }]
            }]
        });
        this.list = list;
        bus.$emit("getdata", this.list[this.xiabiao])
    },

    methods: {
        chuanzhi(index) {
            this.xiabiao = index;
            bus.$emit("getdata", this.list[this.xiabiao]);
        },
    },
}
</script>

<style lang="scss" scoped>

.wrapper::-webkit-scrollbar{
    display: none;
}
.item {
    box-sizing: border-box;
    padding: .3rem 0 .28rem 0;
    font-weight: 400;
    opacity: 0.6;
    color: rgb(0, 0, 0);

    span {
        opacity: 1;
        padding-left: .31rem;
        font-size: .26rem;
        line-height: 19px;
        border-left: 2px solid transparent;
    }
}

span.active {
    border-left: 2px solid #cf0a2c;
    color: #cf0a2c;
    font-weight: bold;
}
</style>