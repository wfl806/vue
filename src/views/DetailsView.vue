<template>
    <div class="details">
        <HeaderAdvertising></HeaderAdvertising>
        <div class="details_box" v-if="obj">
        <!-- 轮播图 -->
        <div class="banner_box">
            <van-sticky @change="xd">
                <header class="header_box" :class="isFixed?'fixed_box':''">
                <span @click="goBack">
                    <van-icon name="revoke" />
                </span>
                <h3>商品详情</h3>
                <span @click="showShare=true"> 
                    <van-icon name="share-o" />
                </span>
                </header>
            </van-sticky>

            <div class="banner">
                <van-swipe @change="onChange" class="banner_swipe">
                  <van-swipe-item v-for="item in obj.details.imgArr" :key="item">
                    <img :src="item" alt="">
                  </van-swipe-item>
                  <template #indicator>
                    <div class="custom-indicator">{{ current + 1 }}/{{ obj.details.imgArr.length }}</div>
                  </template>
                </van-swipe>
            </div>
        </div>
        <!-- 主题 -->
        <div class="main">
            <div class="details_box shop_deatil">
                <h3 class="price">￥{{ obj.newPrice }}</h3>
                <p class="title">{{ obj.title }}</p>
                <DetailPz :title="'优惠'">
                    <div slot="cont">
                        <p class="shop_p" v-if="obj.fenqi"><span class="yh_x">{{ obj.fenqi }}</span><span>花呗、掌上生活、工I行农行、...</span></p>
                        <p class="shop_p" v-if="obj.jifen"><span class="yh_x">{{ obj.jifen }}</span><span>购买即赠商城积分，积分可抵现</span></p>
                    </div>
                </DetailPz>
            </div>
            <div class="details_box pz_detail">
                <DetailPz :title="'配置'">
                    <div slot="cont">
                        <div class="pz_wrap">
                            <span class="pz" v-for="item in obj.details.pz" :key="item">{{ item }}</span>
                        </div>
                    </div>
                </DetailPz>
                <DetailPz :title="'颜色'">
                    <div slot="cont">
                        <div class="pz_wrap">
                            <span class="pz" v-for="item in obj.details.color" :key="item">{{ item }}</span>
                        </div>
                    </div>
                </DetailPz>
                <DetailPz :title="'销售'">
                    <div slot="cont">
                        <div class="pz_wrap">
                            <span class="pz" v-for="item in obj.details.market" :key="item">{{ item }}</span>
                        </div>
                    </div>
                </DetailPz>
                <DetailPz :title="'数量'">
                    <div slot="cont">
                        <van-stepper v-model="num" theme="round" button-size="22" disable-input />
                    </div>
                </DetailPz>
                <DetailPz :title="'保障'">
                    <div slot="cont">
                        <span class="spa" @click="show=true">选购 ></span>
                        <van-action-sheet
                          v-model="show"
                          :actions="actions"
                          cancel-text="取消"
                          description="保障服务"
                          close-on-click-action
                        />
                    </div>
                </DetailPz>
            </div>
            <div class="details_box song_detail">
                <DetailPz :title="'配送'">
                    <div slot="cont">
                        <div class="pz_wrap">
                            <span class="spa" @click="site_show=true">{{ site_text }}</span>
                            <van-action-sheet v-model="site_show" title="请选择地址">
                                <div class="content">
                                    <van-area title="标题" @confirm="sideFn" :area-list="areaList" />
                                </div>
                            </van-action-sheet>
                        </div>
                    </div>
                </DetailPz>
                <DetailPz :title="'服务'">
                    <div slot="cont">
                        <div class="pz_wrap">
                            <span class="spa">满48元包邮</span>
                        </div>
                    </div>
                </DetailPz>
            </div>
        </div>
        <!-- 底部 -->
        <van-goods-action>
          <van-goods-action-icon to="/home" icon="wap-home-o" text="首页" />
          <van-goods-action-icon icon="chat-o" text="客服" dot />
          <van-goods-action-icon to="cart" icon="cart-o" text="购物车" :badge="$store.getters.productNum" />
          <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
          <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
        <!-- 分享面板 -->
        <van-share-sheet
          v-model="showShare"
          title="立即分享给好友"
          :options="options"
        />
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import Vue from 'vue';
    import { Toast } from 'vant';
    Vue.use(Toast);
    import HeaderAdvertising from '@/components/HeaderAdvertising.vue'
    import { areaList } from '@vant/area-data';
    import DetailPz from '@/components/DetailPz.vue'
    export default {
        data(){
            return {
                id:null,
                show: false,
                site_show:false,
                site_text:"北京市/北京市/东城区",
                areaList,
                actions: [
                ],
                num:1,
                obj:null,
                current:0,
                isFixed:false,
                showShare:false,
                options: [
                    [
                      { name: '微信', icon: 'wechat' },
                      { name: '朋友圈', icon: 'wechat-moments' },
                      { name: '微博', icon: 'weibo' },
                      { name: 'QQ', icon: 'qq' },
                    ],
                    [
                      { name: '复制链接', icon: 'link' },
                      { name: '分享海报', icon: 'poster' },
                      { name: '二维码', icon: 'qrcode' },
                      { name: '小程序码', icon: 'weapp-qrcode' },
                    ],
                ],
              };
        },
        async created(){
            this.getData()
        },

        components:{
            HeaderAdvertising,
            DetailPz
        },
        methods:{
            goBack(){ // 返回
                this.$router.back()
            },
            onChange(index) {
                this.current = index;
            },
            async getData(){ // 获取详情数据
                const res = await axios({url:"./json/Cart.json"})
                let id = this.$route.query.id
                this.obj = res.data.res.find(item=>item.id == id)
                this.obj.details.imgArr.unshift(this.obj.image)
                this.actions = this.obj.details.actions
            },
            xd(isFixed){
                this.isFixed = isFixed
            },
            sideFn(a){
                this.site_text = a.map(item=>item.name).join("/")
                this.site_show = false;
            },
            addCart() {
                let arr = JSON.parse(localStorage.getItem("productId"))?JSON.parse(localStorage.getItem("productId")):[]
                arr.forEach(item => { // 如果购物车有该商品那么就商品累加
                    if(item.id == this.obj.id){
                        item.num+=this.num; // 数量累加
                        item.total+=this.obj.newPrice * this.num // 价钱累加
                    }
                })
                let obj = { // 详情数据
                    id:this.obj.id,
                    img:this.obj.image,
                    title:this.obj.title,
                    smallTitle:this.obj.smallTitle,
                    price:this.obj.newPrice,
                    status:true,
                    num:this.num,
                    total:this.obj.newPrice * this.num
                }
                if(!arr.some(item => item.id == obj.id)){ // 找不到该商品就添加新商品数据
                     arr.push(obj)
                }
                localStorage.setItem("productId",JSON.stringify(arr)) // 存储数据
                Toast.success('加入成功!');
                this.$store.state.productNum=arr // 更新购物车数量
            }
        }
    }
</script>

<style lang="scss" scoped>
.flexG{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.details{
    position: relative;
    .header_box{
         padding:0 .32rem;
         width:calc(100% - 0.64rem);
         position: absolute;
         top:0;
         left:0;
         z-index: 100;
         @extend .flexG;
         height:1.12rem;
         span{
            width:.64rem;
            height:.64rem;
            border-radius:50%;
            background:rgba(0,0,0,0.5);
            text-align:center;
            line-height:.64rem;
            color:white;
         }
         h3{
            font-weight:200;
         }
    }
    .fixed_box{
        background: rgb(241, 243, 245);
         span{
            background:rgba(0,0,0,0);
            color:black;
         }
    }
    .banner_box{
        padding:.73rem .6rem .8rem;
        background:white;
        position: relative;
        .banner{
            .banner_swipe{
                img{
                    width:6.3rem;
                    height:6.3rem;
                }
                .custom-indicator {
                  position: absolute;
                  right: .1rem;
                  bottom: .1rem;
                  padding: .04rem .1rem;
                  font-size: .24rem;
                  color:white;
                  border-radius:.24rem;
                  background: rgba(0, 0, 0, 0.4);
                }
            }
        }
    }
    .main{
        padding:0 .32rem;
        margin-top:.2rem;
        .details_box{
            border-radius:.4rem;
            padding:.3rem .32rem;
            background: white;
            margin-bottom:.4rem;
        }
        .shop_deatil{
            .price{
                color:#cf0a2c;
                font-size:.4rem;
                font-weight:300;
                padding-bottom:.12rem;
            }
            .title{
                 display: -webkit-box;   
                 overflow: hidden;
                 -webkit-box-orient: vertical;     
                 -webkit-line-clamp: 2;
                 margin-bottom:.2rem;
            }
            .shop_p{
                line-height:.52rem;
                margin-bottom:.15rem;
                .yh_x{
                    font-size:.24rem;
                    padding:.04rem .08rem;
                    border:1px solid #cf0a2c;
                    border-radius:.08rem;
                    color: #cf0a2c;
                    margin-right:.1rem;
                }
                span{
                    font-size:.26rem;
                }
            }
            
        }
        .pz_detail{
            .pz_wrap{
                display: flex;
                flex-wrap: wrap;
                width:5.36rem;
                align-items: center;
                .pz{   
                    padding:.1rem .24rem;
                    background: rgba(0,0,0,.05); 
                    font-size:12px;
                    border-radius:.3rem;
                    margin:0 .1rem .1rem 0;
                }
            }
            
        }
        .spa{
            line-height:.52rem;
            font-size:.24rem;
        }
        
    }
}
</style>