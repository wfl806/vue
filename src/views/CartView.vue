<template>
    <div class="Cart">
        <!-- 粘性头部 -->
        <van-sticky>
            <header class="header_box">
                <h2>购物车</h2>
                <span v-show="cartShow" @click="bianji">编辑</span>
            </header>
        </van-sticky>
        <div class="main">
            <!-- 购物车 -->
            <div class="cart_wrap">
                <div v-show="cartShow">
                <div v-for="(item,index) in list" :key="index" class="carbox">
                    <van-card :price="item.price+'.00'" :desc="item.smallTitle" :title="item.title" class="goods-card">
                        <template #thumb>
                            <div class="cart_left">
                                <van-checkbox v-model="item.status" @change="checkDx(item.id,item.status)" checked-color="#ee0a24" class="dx"></van-checkbox>
                                <img :src="item.img" alt="">
                            </div>
                        </template>
                        <template #footer>
                            <van-stepper v-model="item.num" theme="round" button-size="22" disable-input @plus="plus(item.id)" @minus="minus(item.id)"/>
                        </template>
                    </van-card>
                </div>
                </div>
                <!-- 没有商品 -->
                <div class="cartNull" v-show="!cartShow">
                    <i class="cartNullImg"></i>
                    <p>您的购物车没有商品</p>
                    <van-button round type="danger" @click="openHome">去购物</van-button>
                </div>
            </div>
            <!-- 猜你喜欢 -->
            <CartDetail></CartDetail>
            <!-- 商品结算 -->
            <div class="account" v-show="cartShow">
                <van-submit-bar @submit="submit" class="submitBar" :price="!bjFlag?allPrice:null" :button-text="!bjFlag?'结算('+$store.getters.productNum+')':'删除'">
                  <van-checkbox v-model="checkedAll" checked-color="#ee0a24">全选</van-checkbox>
                </van-submit-bar>
            </div>
        </div>
    </div>
</template>

<script>
    import CartDetail from '@/components/CartDetail.vue'
    import axios from "axios";

    export default {
        components:{
            CartDetail
        },
        data(){
            return {
                AllList:[],
                list:[],
                sum:'',
                zj:0,
                bjFlag:false,
                cartShow:false
            }
        },
        async created(){
            axios({url:"./json/Cart.json"}).then(res=>{
                this.AllList = res.data.res;
            })
            this.getObj()
        },
        methods:{
            getObj(){ // 获取购物车数据
                let arr = JSON.parse(localStorage.getItem("productId"))?JSON.parse(localStorage.getItem("productId")):[];
                if(arr.length==0){ // 判断购车里是否有数据
                    this.cartShow = false;
                    return;
                }
                this.cartShow = true;
                this.list = arr;
            },
            openHome(){ // 去购物
                this.$router.push("/home")
            },
            plus(id) { // 数量 +
                this.list.forEach(item => {
                    if(item.id == id){
                        item.num++;
                        item.total=Number(item.price*item.num)
                    }
                })
                localStorage.setItem("productId",JSON.stringify(this.list))
                this.$store.state.productNum =this.list // 更新购物车数量
            },
            minus(id) { // 数量 -
                this.list.forEach(item => {
                    if(item.id == id){
                        item.num--;
                        item.total=Number(item.price*item.num)
                    }
                })
                localStorage.setItem("productId",JSON.stringify(this.list))
                this.$store.state.productNum =this.list // 更新购物车数量
            },
            checkDx(id,status){ // 单选商品
                this.list.forEach(item=>{
                    if(id == item.id){
                        item.status = status;
                    }
                })
                localStorage.setItem("productId",JSON.stringify(this.list))
            },
            bianji(){ // 编辑商品
                this.bjFlag = !this.bjFlag
                this.list.forEach(item=>{
                    item.status = false
                })
            },
            submit(){ // 提交 || 删除操作
                if(this.bjFlag){
                    while(this.list.some(item=>item.status)){
                        let index = this.list.findIndex(item=>item.status)
                        this.list.splice(index,1)
                    }
                    localStorage.setItem("productId",JSON.stringify(this.list))
                    this.$store.state.productNum =this.list // 更新购物车数量
                    this.getObj()

                }
            }
        },
        computed:{
            allPrice:{ // 计算总价
                get(){
                    this.zj = 0;
                    this.list.forEach(item=>{
                        if(item.status){
                            this.zj += item.total
                        }
                    })
                    return Number.parseFloat(this.zj+"00")
                },
            },
            checkedAll:{ // 全选反选
                get(){
                    return this.list.every(item=>item.status)
                },
                set(val){
                    this.list.forEach(item=>{
                        item.status = val;
                    })
                    localStorage.setItem("productId",JSON.stringify(this.list))
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .Cart {
        width: 100%;
        .header_box{
                height:1.12rem;
                line-height:1.12rem;
                background: rgb(241, 243, 245);
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding:0 .32rem;
                h2{
                    font-weight:400;
                }
        }
        .main{
            padding:0 .25rem;
            .cart_wrap{
                .cartNull{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width:100%;
                    padding:.64rem 0;
                    .cartNullImg{
                        background-image: url("https://res.vmallres.com/bporder/20220715/staticvue/img/ic_shopping_cart_empty.28d238e.svg");
                        height: 1.92rem;
                        width: 1.92rem;
                        background-size: 100% auto;
                    }
                    p{
                        color:rgba(0,0,0,.4);
                        font-weight: 400;
                        margin:.32rem 0;
                    }
                    .van-button--normal{
                        padding:0 .8rem;
                    }
                }
            }
        }
    }
    .account {
        height: 1rem;
        .van-submit-bar {
            margin-bottom: .99rem;
            opacity: 1;
        }
    }
    .carbox{
        border-radius:.2rem;
        overflow: hidden;
        margin-bottom:.2rem;
    }
    .cart_left{
        width:100%;
        height:100%;
        display: flex;
        align-items: center;
        img{
            width:1.2rem !important;
            height:1.2rem !important;
        }
    }
    .van-card__bottom {
        display: flex;
        flex-direction: column;
        .van-tag--danger {
            width:.97rem
        }
        .van-card__price {
            font-family: HarmonyHeiTi-Medium;
            font-size: .28rem;
            color: #CF0A2C;
            text-align: left;
            line-height: .38rem;
            font-weight: 500;
        }
    }
    ::v-deep .van-checkbox__label{
        margin-top:.1rem;
    }
    .van-submit-bar__bar{
        justify-content: space-between !important;
    }
</style>