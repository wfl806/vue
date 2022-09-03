<template>
    <div class="slider_box" ref="slider_box">
        <div class="slider" ref="slider">
            <ul class="sli_list">
                <li v-for="item in list.slice(0,l)" :key="item.id" ref="li">
                    <img :src="item.imgSrc" alt="">
                    <span>{{ item.title }}</span>
                </li>
            </ul>
            <ul class="sli_list">
                <li v-for="item in list.slice(l)" :key="item.id">
                    <img :src="item.imgSrc" alt="">
                    <span>{{ item.title }}</span>
                </li>
            </ul>
        </div>
        <div class="scroll_container">
            <div class="scroll_box" ref="s_box"><span class="scroll" ref="s"></span></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data(){
            return {
                list:[],
                l:-1
            }
        },
        methods:{

        },
        async created(){
            const res = await axios({url:"./json/h_nav.json"})
            this.l = Math.ceil(res.data.data.length / 2)
            this.list = res.data.data
        },
        updated(){
            let slider = this.$refs.slider
            let box = this.$refs.slider_box
            let s_box = this.$refs.s_box
            let s = this.$refs.s
            let sX = 0;
            let x = 0;
            let xz = (box.offsetWidth / 5) * (this.list.length / 2)
            let bl = xz / s_box.offsetWidth
            s.style.width = this.$refs.slider.offsetWidth / bl +'px'
            // 拖拽容器
            slider.addEventListener("touchstart",(e)=>{
                sX = e.changedTouches[0].clientX - x
            })
            slider.addEventListener("touchmove",(e)=>{
                x = e.changedTouches[0].clientX - sX
                if(x>0){
                    x = 0;
                }
                if(x < -xz+slider.offsetWidth){
                    x = -xz+slider.offsetWidth
                }
                slider.style.left = x + 'px'
                s.style.left = -x / bl + 'px'
            })

            let xt = 0;
            let sXt = 0;
            // 拖拽小滚动条
            s_box.addEventListener("touchstart",(e)=>{
                sXt = (e.changedTouches[0].clientX - s_box.offsetLeft) - xt
            })
            s_box.addEventListener("touchmove",(e)=>{
                xt = (e.changedTouches[0].clientX - s_box.offsetLeft) - sXt
                if(xt<0){
                    xt = 0;
                }
                if(xt > s_box.offsetWidth - s.offsetWidth){
                    xt = s_box.offsetWidth - s.offsetWidth
                }
                s.style.left = xt + 'px'
                slider.style.left = -xt * bl + 'px'
            })

        }
    }
</script>

<style lang="scss" scoped>
.slider_box{
     overflow: hidden;
    .slider{
        position: relative;
        .sli_list{
            display: flex;
            li{
                min-width:20%;
                height:1.44rem;
                margin-bottom:.16rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    width:.96rem;
                    height:.96rem;
                }
                span{
                    font-size:.24rem;
                    margin:0 .1rem;
                }
            }
        }
    }
    .scroll_container{
        display: flex;
        justify-content:center;
        padding:.05rem 0;
        .scroll_box{
            width:.8rem;
            height:.08rem;
            border-radius:.08rem;
            background:white;
            overflow: hidden;
            position: relative;
            .scroll{
                width:20px;
                height:100%;
                background: rgb(207, 10, 44);
                border-radius:.08rem;
                position:absolute;
                left:0;
            }
        }
    }
}   
</style>