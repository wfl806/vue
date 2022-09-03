<template>
    <div class="timeLimit_box">
      <div class="timeLimit">
        <div class="t_header">
          <div class="t_h_left">
            <h5>限时购</h5>
            <span>好货限时抢</span>
          </div>
          <div class="t_h_right">
            <h5>秒杀</h5>
            <span>距离结束</span>
            <ul class="djs">
                <li class="timer">{{ this.timeData.hours }}</li>
                <li class="colon">:</li>
                <li class="timer">{{ this.timeData.minutes }}</li>
                <li class="colon">:</li>
                <li class="timer">{{ this.timeData.seconds }}</li>
            </ul>
          </div>
        </div>
        <div class="t_cont">
            <ul>
                <li v-for="item in list" :key="item.id">
                    <div class="img_box">
                        <img :src="item.imgSrc" alt="">
                    </div>
                    <div class="price_box">
                        <span class="newPrice">￥{{ item.newPrice }}</span>
                        <span class="oldPrice">￥{{ item.oldPrice }}</span>
                    </div>
                </li>
            </ul>
        </div>
      </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data(){
            return {
                timeData:{
                    hours:0,
                    minutes:0,
                    seconds:0
                },
                allList:[],
                list:[],
                start:0,
                end:4
            }
        },
        async created(){
            const res = await axios({
                url:"./json/h_seckill.json"
            })
            this.allList = res.data.data
            this.sj()
            setInterval(this.seckillDjs,1000)
        },
        methods:{
            sj(){
               this.list = this.allList.slice(this.start,this.end)
            },
            seckillDjs(){
                var date = new Date(),
                s = date.getHours(),
                f = date.getMinutes(),
                m = date.getSeconds();
                var ws = 0; // 未来场时
                if(s%2==0){ // 两个小时数据会发生一次改变
                    this.start = 0;
                    this.end = 4;
                    this.sj()
                } else {
                    this.start = 4;
                    this.end = 8;
                    this.sj()
                }
                if((s+2)%2 == 0){
                    ws = s+2
                } else {
                    ws = s +1
                }
                this.timeData.hours=this.zero(ws-(s+1))
                this.timeData.minutes=this.zero(59-f)
                this.timeData.seconds=this.zero(59-m)
            },
            zero(v){
                return v<10?"0"+v:v
            }
        }
    }
</script>

<style lang="scss" scoped>
.flexG{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.timeLimit_box{
  margin-top:.2rem;
  .timeLimit{
    background:white;
    border-radius:.2rem;
    padding:0 .24rem;
    .t_header{
      display: flex;
      justify-content: space-between;
      align-items:center;
      height:.88rem;
      h5{
        font-size:.32rem;
      }
      span{
        font-size:.24rem;
        margin:0 .05rem;
      }
      .t_h_left{
        @extend .flexG;
      }
      .t_h_right{
        @extend .flexG;
          .djs{
            display: flex;
            line-height:.34rem;
            .timer {
                width: .34rem;
                height: .34rem;
                color: #fff;
                font-size: .24rem;
                text-align: center;
                background-color: #ee0a24;
                border-radius:.05rem;
            }
            .colon {
                display: inline-block;
                margin: 0 .04rem;
                color: #ee0a24;
            }
          }
           
      }
    }
    .t_cont{
        margin-top:.2rem;
        padding-bottom:.2rem;
        ul{
            display: flex;
            li{
                width:25%;
                .img_box{
                    padding:.16rem;
                }
                img{
                    width:1.14rem;
                    height:1.14rem;
                }
                .price_box{
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    font-size:.24rem;
                    .newPrice{
                        color:red;
                    }
                    .oldPrice{
                        color:#666;
                        text-decoration: line-through;
                    }
                }
            }
        }
    }
  }
}
</style>