<template>
  <div class="home" ref="home">
    <!-- 头部小广告 -->
    <HeaderAdvertising></HeaderAdvertising>
    <!-- 头部 -->
    <van-sticky>
      <header class="header_box" ref="header">
      <div class="header">
        <a href="#">
          <img src="https://res.vmallres.com/portal/1.11.6.303/h5/images/logo_red.png" alt="">
        </a>
        <div class="search_box">
          <van-icon class="search_icon" name="search" size=".32rem" color="#666" />
          <input type="text" class="search_input" :placeholder="searchText" @focus="openSearch"> 
        </div>
        <div class="tb_box">
          <van-icon class="chat_icon" name="chat" size="24px" color="#666" />
          <a href="" class="lp_img">
            <img class="li" src="https://res.vmallres.com/pimages/uomcdn/CN/cms/202111/F4EF91EB72D3D82F0CA772243C6A031E.png" alt="">
          </a>
        </div>
      </div>
      </header>
    </van-sticky>
    <!-- 导航 -->
    <nav class="nav_box">
      <div class="nav">
        <div class="nav_item" v-for="item in navList" :key="item.title">{{ item.title }}</div>
      </div>
    </nav>
    <!-- banner -->
    <div class="banner_box">
      <van-swipe class="banner_swip" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgSrc" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 主题 -->
    <article class="main_box">
      <div class="main">
        <!-- 主题广告1 -->
        <div class="main_banner_1">
          <img src="https://res.vmallres.com/uomcdn/CN/cms/202208/B6959C189C6DAE3E2A19A8B3AF8E0C57.gif" alt="">
        </div>
        <!-- 主题导航 -->
        <!-- <div class="main_nav">
          <div class="swiper mySwiper3">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in mainNavList" :key="item.id">
                <img :src="item.imgSrc" alt="">
                <span>{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div> -->
        <SliderNav></SliderNav>
        <!-- 限时购物 -->
        <TimeLimit></TimeLimit>
        <!-- 主题广告2 -->
        <div class="main_banner_2">
          <img src="https://res.vmallres.com/uomcdn/CN/cms/202207/F88748F17342EB9DDE09E40F3461F255.gif" alt="">
        </div>
        <!-- 精选爆款 -->
        <div class="hotCake_box">
          <div class="hotCake">
            <header>
              <img src="https://res.vmallres.com/uomcdn/CN/cms/202104/89A5EF9383442D7E0D9BA1EF8E95EA9B.png" alt="">
            </header>
            <div class="hot_main">
                <div class="hot_left hot_fx">
                    <div class="hot_item" v-for="item in hotCakeList.slice(0,3)" :key="item.id">
                        <van-swipe class="hot_swip" :autoplay="3000" indicator-color="white" v-if="item.imgArr.length>1">
                          <van-swipe-item v-for="i,index in item.imgArr" :key="index">
                              <img :src="i" alt="">
                          </van-swipe-item>
                        </van-swipe>
                        <img v-else :src="item.imgArr[0]" alt="">
                    </div>
                </div>    
                <div class="hot_right hot_fx">
                    <div class="hot_item" v-for="item in hotCakeList.slice(3)" :key="item.id">
                        <img :src="item.imgArr[0]" alt="">
                    </div>
                </div>
            </div>
          </div>
        </div>
        <!-- 猜你喜欢 -->
        <CartDetail></CartDetail>
      </div>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
import TimeLimit from '@/components/TimeLimit.vue'
import HeaderAdvertising from '@/components/HeaderAdvertising.vue'
import SliderNav from '@/components/SliderNav.vue'
import CartDetail from '@/components/CartDetail.vue'
let i = 0;
export default {
  name: 'HomeView',
  data(){
    return {
      navList:[],
      bannerList:[],
      mainNavList:[],
      hotCakeList:[],
      searchText:'手机',
      start:0,
      end:4,
      loadingShow:false,
      loadingTextShow:true,
      ListLength:0,
      timer:null
    }
  },
  components: {
    TimeLimit,
    HeaderAdvertising,
    SliderNav,
    CartDetail
  },
  methods:{
    async getData(){
      // 导航数据
      const res1 = await axios({url:"./json/h_fl.json"})
      this.navList = res1.data.list
      // banner数据
      const res2 = await axios({url:"./json/h_banner.json"})
      this.bannerList = res2.data.data
      
      // 爆款数据
      const res4 = await axios({url:"./json/h_hotCake.json"})
      this.hotCakeList = res4.data.data
    },
    async loadSwiper(){
      var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 5,
        grid: {
          rows: 2,
        },
        spaceBetween:0,
      });
    },
    searchGjz(){ // 搜索关键字
      i ++
      if(i>this.navList.length-1){
        i = 0
      }
      this.searchText = this.navList[i].title
    },
    openSearch(){
      this.$router.push("/search")
    }, 
  },
  async created(){
    this.getData();
    setInterval(this.searchGjz,3000)
  },
  mounted(){
  },
  updated(){
    this.loadSwiper()
  }
}
</script>
<style lang="scss" scoped>
.flexG{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home{
  .header_box{
    padding:0 .32rem;
    background:rgb(241, 243, 245);
    z-index:10;
    .header{
      display:flex;
      height:58px;
      align-items: center;
      justify-content: space-between;
      .search_box{
        background: rgba(0, 0, 0, 0.05) !important;
        height:40px;
        border-radius:40px;
        overflow: hidden;
        flex:1;
        position: relative;
        margin:0 .2rem;
        .search_icon{
          position:absolute;
          top:50%;
          left:.15rem;
          transform: translateY(-50%);
        }
        .search_input{
          border:none;
          outline: none;
          width:100%;
          padding-left:.5rem;
          height:100%;
          background: rgba(0, 0, 0, 0.05) !important;
          overflow: hidden;
        }
      }
      .tb_box{
        width:72px;
        display: flex;
        align-items:center;
        justify-content: space-between;
        .lp_img{
          width:24px;
          height:24px;
          img{
            width:100%;
          }
        }
      } 
    }
  }
  .nav_box{
    padding:.08rem .32rem;
    overflow-x:scroll;
    .nav{
        display: flex;
        width:182%;
        .nav_item{
            background: rgba(0, 0, 0, 0.05) !important;
            font-size:.24rem;
            text-align: center;
            padding:0 .16rem;
            height:.56rem;
            line-height:.56rem;
            margin-right:.1rem !important;
            border-radius:.56rem;
        }
    }
  }
  .nav_box::-webkit-scrollbar {display:none}
  .banner_box{
    overflow: hidden;
    height:3rem;
    margin-top:.2rem;
    .banner_swip{
      .van-swipe-item{
        display: flex;
        justify-content: center;
        img{
          width:90%;
          height:100%;
          border-radius:.2rem;
        }
      }
    }
  }
  .main_box{
    padding:.05rem .32rem;
    .main_banner_1{
      height:2.3rem;
      img{
        width:100%;
        height:100%;
      }
    }
    .main_nav{
      width:100%;
      height:3.12rem;
      .swiper {
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
      }
      .swiper-slide {
        text-align: center;
        font-size: .24rem;
        height:50% !important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
          width:.96rem;
          height:.96rem;
        }
        
      }
    }
    .main_banner_2{
      margin-top:.2rem;
      height:2.74rem;
      border-radius:.2rem;
      overflow: hidden;
      img{
        width:100%;
        height:100%;
      }
    }
    .hotCake_box{
      margin:.2rem 0 .1rem 0;
      .hotCake{
        header{
          img{
            width:2.8rem;
          }
        }
        .hot_main{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .hot_fx{
            width:49%;
          }
          .hot_item{
            margin-bottom:.2rem;
            img{
              width:100%;
              height:100%;
            }
          }
        }
      }
      
    }
  }
}
</style>