<template>
    <div class="box">
        <div class="header">
            <div class="pic">
               <img :src="list.icon" alt="">
            </div>
            <div class="text">{{list.name}}</div>
        </div>
        <p class="propose">{{list.propose}}</p>
        <div class="title">{{list.title}}</div>
        <p class="date">{{list.date}}</p>
        <div class="text">{{list.summary}}</div>
        <ul class="list_pic">
            <li v-for="(item,index) in list.imgPath" :key=index>
                <img :src="item" alt="">
            </li>
        </ul>
        <p class="like">您可能还喜欢</p>
        <Find :arr="data"></Find>
        <div class="scrollTop">
            <div class="backTop" v-show="flag_scroll"  @click="backTop">
                <van-icon name="upgrade" class="upgrade" />
            </div>
        </div>
        <div class="icon">
            <div class="left">
                <van-icon name="chat-o" class="icon_size" badge="9" />
                <van-icon name="like-o" class="icon_size" />
            </div>
        </div>
        <div class="right">
                <img src="https://res.vmallres.com/nwap/cp_20220620/staticm/img/cart.18885bd.png" alt="">
        </div>
    </div>
</template>
<script>
    import axios from "axios"
    import Find from "@/components/Find.vue"
    export default{
        data(){
            return {
                obj:null,
                list:[],
                flag_scroll:false,
                scroll:0,
                data:[]
            }
        },
        components:{
            Find
        },
        async created(){
            let findData = await axios({url:'findData.json'});
            this.data=findData.data.data
            this.getData()
        },
        methods:{
            async getData(){
                let res = await axios({url:"findData.json"})
                // console.log(res);
                let id = this.$route.query.id
                this.obj = res.data.data.find(item =>item.id == id)
                // console.log(this.obj.details);
                this.list = this.obj.details
                // console.log(this.list.date);
            },
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
            }
        },
         mounted(){
            window.addEventListener('scroll',this.handleScroll,true)
         }
    }
</script>
<style lang="scss" scoped>
    .box{
        padding:0 .3rem;
    }
    .header{
        display:flex;
        align-items:center;
        .pic{
            img{
                width: .74rem;
                height: .74rem;
                border-radius:50%;
                margin:.2rem .2rem 0 0;
            }
        }
        .text{
            font-size:.28rem;
        }
    }
    .propose{
        font-size:.26rem;
        color:#9e9797;
        padding: 0.3rem 0 0.2rem 0;
    }
    .date{
        font-size:.26rem;
        color:#9e9797;
        margin-top:.2rem;
    }
    .text{
         font-size:.26rem;
        color:#9e9797;
        margin-top:.4rem;
        margin-bottom:.4rem;
    }
    .list_pic{
        li{
            img{
                width: 100%;
            }
        }
    }
    .like{
        text-align:center;
        margin:.2rem 0;
    }
     .backTop{
        position:fixed;
        width: .7rem;
        height: .7rem;
        background-color:white;
        border-radius:50%;
        bottom:1.3rem;
        z-index:200;
        right:.3rem;
        .upgrade{
            font-size:.7rem;
            color:black;
        }
    }
    .icon{
        position:fixed;
        bottom:.3rem;
        z-index:200;
        left:.3rem;
        .icon_size{
            font-size:.6rem;
            margin-right:.2rem;
        }
        img{
            width: .6rem;
            height: .6rem;
        }
        
    }
    .right{
        position:fixed;
        bottom:.3rem;
        z-index:200;
        right:.2rem;
        width: .6rem;
        height: .6rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
           
</style>