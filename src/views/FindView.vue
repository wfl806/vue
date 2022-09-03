<template>
    <div class="box">
        <HeaderAdvertising></HeaderAdvertising>
        <ul class="nav_list">
            <li>
                <div class="pic">
                    <img src="https://res.vmallres.com/uomcdn/CN/cms/202204/140500291543CA2B15A44764788258C1.png.50.webp" alt="">
                </div>
                <p>买家秀</p>
            </li>
            <li>
                <div class="pic">
                     <img src="	https://res.vmallres.com/uomcdn/CN/cms/202204/847355F1B844E9F1AD550801E7F73010.png" alt="">
                </div>
                <p>0元试用</p>
            </li>
            <li>
                <div class="pic">
                    <img src="	https://res.vmallres.com/uomcdn/CN/cms/202204/C052D6F9341E565DE7F447554FEC3EA0.png.50.webp" alt="">
                </div>
                <p>好物圈</p>
            </li>
            <li>
                <div class="pic">
                     <img src="https://res.vmallres.com/uomcdn/CN/cms/202204/98BEDD82D29BD48A04A32EA41578D573.png.50.webp" alt="">
                </div>
                <p>发布会回顾</p>
            </li>
        </ul>
        <div class="title">
            <h4>热门话题</h4>
            <ul class="title_list">
                <li>
                    <div class="fl">
                         <p>带你快速上手新机</p>
                        <img src="https://res.vmallres.com/portal/1.11.6.303/h5/images/ic-hot-wap.png" alt="">
                    </div>
                </li>
                <li>
                    <p>好物推荐榜</p>
                </li>
                <li>
                    <p>我的鸿蒙我定义</p>
                </li>
                <li>
                    <p class="red">更多话题<van-icon name="arrow" />
                    </p>
                </li>
            </ul>
        </div>
       <Find :arr="list"></Find>
        <div class="scrollTop">
            <div class="backTop" v-show="flag_scroll"  @click="backTop">
                <van-icon name="upgrade" class="upgrade" />
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import HeaderAdvertising from '@/components/HeaderAdvertising.vue'
    import Find from "@/components/Find.vue"
    export default {
        data(){
            return{
                list:[],
                flag_scroll:false,
                scroll:0
            }
        },
        async created(){
            let res = await axios({url:"findData.json"})
            this.list = res.data.data
        },
        components:{
            HeaderAdvertising,
            Find
        },
         methods: {
            //返回顶部事件
            backTop(){
                 document.documentElement.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            },
            //滑动超过200时显示按钮
            handleScroll(){
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                // console.log("距离顶部的距离"+scrollTop);
                // console.log(scrollTop);
                if(scrollTop > 200){
                    this.flag_scroll=true
                }else{
                    this.flag_scroll = false
                }
                // console.log(this.flag_scroll)
            },
         },
         mounted(){
            window.addEventListener('scroll',this.handleScroll,true)
         }
    };
</script>

<style lang="scss" scoped>
    .box{
        background-color:#f1f3f5;
    }
    .van-notice-bar{
        height: .89rem;
        line-height:.32rem;
    }
    .NoticeBar{
        display:flex;
        align-items:center;
        .left{
            display:flex;
            align-items:center;
            .pic{
                img{
                    width: 0.62rem;
                    height: 0.62rem;
                    margin-right:.12rem;
                }
            }
            .NoticeText{
                .p1{
                    font-size:.18rem;
                }
                .p2{
                    font-size:.16rem;
                    color: rgba(255, 255, 255, 0.9);
                }
            }
        }
        .right{
            margin-left:1.1rem;
            .vanButton{
                width: 1.32rem;
                height: .56rem;
                background-color:#fff;
                font-size:.18rem;
                color:black;
                outline:none;
                border:none;
            }
        }
    }
    .nav_list{
        margin:0 .32rem;
        display:flex;
        justify-content:space-around;
        margin-bottom:.4rem;
        li{
            display:flex;
            flex-direction:column;
            align-items:center;
            img{
                width: .7rem;
                height: .7rem;
                margin:.12rem 0;
            }
            p{
                font-size:.24rem;
            }
        }
    }
    .title{
       h4{
            padding-left:.32rem;
            padding-bottom:.16rem;
        }
        .title_list{
            display:flex;
            flex-wrap:wrap;
             padding-left:.32rem;
            li{
                width: 50%;
                margin-bottom:.16rem;
                .fl{
                    display:flex;
                    p{
                        margin-right:.06rem
                    }
                }
                img{
                    width: .30rem;
                    height: .30rem;
                }
                p{
                    font-size:.24rem;
                }
                .red{
                    color:rgb(207, 10, 44);
                }
            }
        }
    }
    .backTop{
        position:fixed;
        width: .7rem;
        height: .7rem;
        background-color:white;
        border-radius:50%;
        bottom:1rem;
        z-index:200;
        right:.3rem;
        .upgrade{
            font-size:.7rem;
            color:black;
        }
    }
</style>
