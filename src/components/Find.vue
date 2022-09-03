<template>
    <div>
          <ul class="list">
            <li v-for="(item,index) in arr" :key="index" @click="openDetail(item.id)" >
               <img :src="item.imgPath" alt="">
               <span class="propose">{{item.propose}}</span>
               <h4>{{item.title}}</h4>
               <div class="list_footer">
                    <div class="left">
                        <img :src="item.icon" alt="">
                        <span class="text">{{item.text}}</span>
                    </div>
                    <div class="right">
                        <van-icon class="van_icon" name="browsing-history-o" />
                        <span class="num">{{item.num}}</span>
                    </div>
               </div>
               
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        props:['arr'],
        data(){
            return {

            }
        },
        created(){

        },
        methods:{
            openDetail(id){
                this.$router.push("/findDetails?id="+id+"")
            }
        }
    }
</script>
<style lang="scss" scoped>
     .list{
        padding:0 .32rem;
        column-count:2;
        column-gap:.2rem;
        margin-top:.08rem;
        li{
            margin-bottom:.16rem;
            break-inside:avoid;
            background-color:white;
            border-radius:.1rem;
            img{
                width: 100%;
                height: 2.82rem;
                border-top-left-radius: .1rem;
                border-top-right-radius: .1rem;
            }
            .propose{
                font-size:.18rem;
                padding:.08rem .16rem .08rem .16rem;
                background-color:#f2f2f2;
                border-radius:.3rem;
                margin:.16rem 0 .18rem .16rem;
                display:inline-block;
                font-weight:600;
            }
            h4{
                -webkit-line-clamp: 2;
                line-height:.38rem;
                font-size:.24rem;
                font-weight:600;
                margin-left:.16rem;
                width: 2.42rem;
            }
            .list_footer{
                display:flex;
                justify-content:space-between;
                margin:.16rem .16rem 0 .16rem;
                padding-bottom:.16rem;
                .left{
                    display:flex;
                    align-items:center;
                    img{
                        width: .3rem;
                        height: .3rem;
                        border-radius:50%;
                    }
                    .text{
                        font-size:.18rem;
                        margin-left:.06rem;
                        color:rgb(181,181,181);
                    }
                }
                .right{
                    .van_icon{
                        font-size:.18rem;
                        color:rgb(181,181,181);
                        margin-right:.10rem;
                    }
                    .num{
                        font-size:.18rem;
                        color:rgb(181,181,181);
                    }
                }
            }
        }
    }
</style>