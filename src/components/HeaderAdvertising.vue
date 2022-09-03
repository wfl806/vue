<template>
    <div class="advertising" v-show="$store.state.headerAdIsShow">
        <span class="close" @click="$store.state.headerAdIsShow=false"></span>
        <div class="left">
            <div class="img_box">
                <img src="https://res.vmallres.com/pimages//pages/templateContent/05414906713610941450.png" alt="">
            </div>
            <div class="ad_text">
                <span>来华为商城APP</span>
                <span>立即领取新人专享见面礼</span>
            </div>
        </div>
        <a href="" class="openApp">打开APP</a>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                isShow:true
            }
        },
        created(){
           
        }
    }
</script>

<style lang="scss" scoped>
.advertising{
    width: 100%;
    z-index: 200;
    margin: 0 auto;
    background-color: #333;
    height: 52px;
    clear: both;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items:center;
    .close{
        position: absolute;
        top: 18px;
        display: block;
        width: 16px;
        height: 16px;
        left: 16px;
        background: url("https://res.vmallres.com/portal/1.11.6.303/h5/css/pullup-app/icon-app-close.png") no-repeat;
        background-size: 16px 16px;
        border-radius: 50%;
    }
    .left{
        display: flex;
        margin-left:40px;
        .img_box{
            width:36px;
            height:36px;
            margin-right:5px;
            img{
                width:100%;
                height:100%;
            }
        }
        .ad_text{
            display: flex;
            flex-direction: column;
            color:white;
            font-size:12px;
            justify-content: space-between;
        }
    }
    .openApp{
        background:white;
        color:black;
        padding:0 12px;
        height:28px;
        margin-right:16px;
        border-radius:28px;
        line-height:28px;
        text-align: center;
        font-size:12px;
    }
}
</style>