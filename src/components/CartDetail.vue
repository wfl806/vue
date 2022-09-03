<template>
    <div class="Cart_detail">
        <!-- 卡片详情 -->
        <div class="h2">
            <H2>猜你喜欢</H2>
        </div>
        <div class="CartBox">
            <div class="CartLeft">
                <div class="box" @click="openDetail(item.id)" v-if="index%2==0" v-for="item,index in cartList" :key="index">
                    <div class="imgBox">
                        <img :src="item.image" alt="" class="img">
                    </div>
                    <p class="title">{{item.title}}</p>
                    <div class="nPriceBox">
                        <p class="nPrice price">￥{{item.newPrice}}</p>
                        <p class="oPrice price" v-if="item.oldPrice?true:false">￥{{item.oldPrice}}</p>
                        <p class="duokuan" v-if="item.duokuan?true:false">{{item.duokuan}}</p>
                    </div>
                    <div class="youhuiBox">
                        <p class="youhui" v-if="item.tejia?true:false">{{item.tejia}}</p>
                        <p class="youhui" v-if="item.fenqi?true:false">{{item.fenqi}}</p>
                        <p class="youhui" v-if="item.jifen?true:false">{{item.jifen}}</p>
                    </div>
                    <div class="pinglun">
                        <p class="pingjia" v-if="item.pingjia?true:false">{{item.pingjia}}人评价</p>
                        <p class="haoping" v-if="item.pingjia?true:false">{{item.haoping}}好评</p>
                    </div>
                </div>
            </div>
            <div class="CartRight">
                <div class="box" @click="openDetail(item.id)" v-if="index%2!=0" v-for="item,index in cartList" :key="index">
                    <div class="imgBox">
                        <img :src="item.image" alt="" class="img">
                    </div>
                    <p class="title">{{item.title}}</p>
                    <div class="nPriceBox">
                        <p class="nPrice price">￥{{item.newPrice}}</p>
                        <p class="oPrice price" v-if="item.oldPrice?true:false">￥{{item.oldPrice}}</p>
                        <p class="duokuan" v-if="item.duokuan?true:false">{{item.duokuan}}</p>
                    </div>
                    <div class="youhuiBox">
                        <p class="youhui tejia" v-if="item.tejia?true:false">{{item.tejia}}</p>
                        <p class="youhui fenqi" v-if="item.fenqi?true:false">{{item.fenqi}}</p>
                        <p class="youhui jifen" v-if="item.jifen?true:false">{{item.jifen}}</p>
                    </div>
                    <div class="pinglun">
                        <p class="pingjia">{{item.pingjia}}人评价</p>
                        <p class="haoping">{{item.haoping}}好评</p>
                    </div>
                </div>
            </div> 
        </div>   
        <div class="loading_box" ref="loading" v-show="loadingShow">
          <van-loading size="24px" v-show="loadingTextShow">加载中...</van-loading>
          <span v-show="!loadingTextShow">没有更多商品了</span>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                cartList:[],
                start:0,
                end:4,
                loadingShow:false,
                loadingTextShow:true,
                ListLength:0,
                timer:null
            }
        },
        created() {
            this.getLike()
        },
        mounted(){
            window.addEventListener("scroll",this.loadingList)
        },
        methods:{
            openDetail(id){ // 跳转详情页
                this.$router.push("/details?id="+id+"")
            },
            async getLike(){ // 获取猜你喜欢的数据
              const res = await axios({url:"./json/Cart.json"})
              this.ListLength = res.data.res.length
              this.cartList = this.cartList.concat(res.data.res.slice(this.start,this.end))
            },
            loadingList(){ // 触底加载数据
                let zh = document.documentElement.scrollHeight
                let h = document.documentElement.clientHeight
                let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if(this.end >= this.ListLength){
                    this.loadingShow = true
                    this.loadingTextShow = false;
                    return;
                }
                if(top > (zh - h - 20)){
                  clearTimeout(this.timer)
                  this.loadingShow = true
                  this.loadingTextShow = true;
                  this.timer = setTimeout(()=>{
                    this.start += 4
                    this.end += 4
                    this.getLike()
                    this.loadingShow = false;
                  },2000)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;padding: 0;
    }
    .h2 {
        height: 0.4rem;
        padding: .15rem 0 .25rem;
        h2 {
            font-weight: bold;
            line-height: .5rem;
            text-align: left;
            font-size: .3rem;
        }
    }
    
    .CartBox {
        display: flex;
        justify-content: space-between;
        .CartLeft {
            width:49%;
        }
        .CartRight {
            width:49%;
        }
    }

    .box {
        padding-bottom: 0.2rem;
        background: white;
        margin-bottom: .2rem;
        width: 100%;
        border-radius: 5%;
        .imgBox {
            padding-top: .26rem;
            width: 100%;
            height: 2.8rem;
            text-align: center;
            .img {
                display:inline-block;
                width: 2.3rem;
                height: 2.3rem;
            }
        }
        .title {
            text-align: left;
            padding: .15rem .15rem 0;
            font-size: .26rem;
            line-height: .37rem;
            font-weight: 500;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .nPriceBox {
            padding: .15rem .15rem 0;
            display: flex;
            .nPrice {
                font-family: HarmonyHeiTi-Medium;
                font-size: .28rem;
                color: #CF0A2C;
                text-align: left;
                line-height: .38rem;
                font-weight: 500;
            }
            .oPrice {
                font-family: LucidaGrande;
                font-size: .2rem;
                color: rgba(0,0,0,0.6);
                line-height: .35rem;
                font-weight: 400;
                margin-left: 0.02rem;
                text-decoration: line-through;
            }
            .duokuan {
                font-size: .24rem;
                margin-left: .1rem;
                opacity: 0.8;
                border: 0.02rem solid #46B1E3;
                border-radius: .1rem;
                font-family: HarmonyHeiTi-Medium;
                font-size: .2rem;
                color: #46B1E3;
                line-height: .3rem;
                font-weight: 500;
                padding: 0 .1rem;
                -webkit-box-align: center;
                -webkit-align-items: center;
                -ms-flex-align: center;
                align-items: center;
                height: .35rem;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
            }
        }
        .youhuiBox {
            padding: 0 .2rem 0;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            .youhui {
                display: inline-block;
                opacity: 0.8;
                border-radius: .1rem;
                font-size: .18rem;
                height: .35rem;
                border: 0.02rem solid rgba(230,69,102,0.6);
                font-family: HarmonyHeiTi;
                color: #E64566;
                line-height: .3rem;
                font-weight: 400;
                padding: 0 0.07rem;
                margin-right: .1rem;
                margin-top: 0.05rem;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
            }
        }
        .pinglun {
            padding-top: .1rem;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            padding: 0 .2rem 0;
            line-height: .35rem;
            font-size: .2rem;
            opacity: 0.6;
            font-family: HarmonyHeiTi;
            color: #000000;
            font-weight: 400;
            .pingjia {
                margin-right: .4rem;
            }
        }
    }
    .loading_box{
    display: flex;
    height:.8rem;
    justify-content: center;
    align-items: center;
    span{
      color:#999;
    }
  }
</style>