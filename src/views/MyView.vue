<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <!-- 吸顶 -->
      <div class="ceiling" ref="searchBar">
        <div class="header_user">
          <div class="user_lef">
            <img
              src="https://res.vmallres.com/portal/1.11.6.303/h5/images/ic_avatar.png"
              alt=""
            />
            <div>
              <div class="_tel">
                <p @click="login">{{ msg }}</p>
                <img
                  src="https://res.vmallres.com/portal/1.11.6.303/h5/images/medal-gold.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="header_icon">
          <van-icon name="setting-o" size="20" />
          <van-icon name="chat-o" badge="6" size="20" />
        </div>
      </div>
      <div class="header_icon">
        <van-icon name="setting-o" size="20" />
        <van-icon name="chat-o" badge="6" size="20" />
      </div>
      <div class="header_user">
        <div class="user_lef">
          <img
            src="https://res.vmallres.com/portal/1.11.6.303/h5/images/ic_avatar.png"
            alt=""
          />
          <div>
            <div class="_tel">
              <p @click="login">{{ msg }}</p>
              <img
                src="https://res.vmallres.com/portal/1.11.6.303/h5/images/medal-gold.png"
                alt=""
              />
            </div>
            <div class="_list">
              <span>V10会员</span>
              <span class="sp2">V10权益</span>
              <span class="sp3">收货地址</span>
            </div>
          </div>
        </div>
        <div class="user_rig">
          <img
            src="https://res.vmallres.com/portal/1.11.6.303/h5/images/Sign_no.png"
            alt=""
          />
        </div>
      </div>
      <div class="header_footer">
        <ol>
          <li>
            <strong>0</strong>
            <span>积分 ></span>
          </li>
          <li class="_li2">
            <strong>7</strong>
            <span>优惠券 ></span>
          </li>
          <li class="_li3">
            <strong>0.00</strong>
            <span>代金券 ></span>
          </li>
        </ol>
      </div>
    </div>
    <!-- 订单模块 -->
    <div class="order">
      <div class="my_order">
        <p class="p1">我的订单</p>
        <p class="p2">
          全部订单
          <span>></span>
        </p>
      </div>
      <van-grid column-num="5" :border="false" gutter="1">
        <van-grid-item
          @click="showPopup"
          icon="pending-payment"
          text="待付款"
        />
        <van-grid-item @click="showPopup" icon="send-gift-o" text="待收货" />
        <van-grid-item @click="showPopup" icon="chat-o" text="待评价" />
        <van-grid-item @click="showPopup" icon="after-sale" text="退货退款" />
        <van-grid-item @click="showPopup" icon="peer-pay" text="回收单" />
      </van-grid>
    </div>
    <van-popup v-model="show">
      <p style="text-align: center">点我干嘛(ಥ_ಥ)</p>
      <img
        src="https://img0.baidu.com/it/u=3688881229,1705024996&fm=253&fmt=auto&app=138&f=GIF?w=204&h=172"
        alt=""
      />
      <p style="text-align: center">不跳转行不行...</p>
    </van-popup>
    <!-- slide -->
    <slider :bv="slideList"></slider>

    <!-- Aftermarket -->
    <div class="Aftermarket">
      <ol>
        <li
          v-for="(item, index) in AftermarketList"
          :key="index"
          @click="showPopup"
        >
          <img :src="item.imgSrc" alt="" />
          <p>{{ item.title }}</p>
        </li>
      </ol>
    </div>
    <!-- Two -->
    <div class="Two">
      <div>
        <img
          src="https://res.vmallres.com/uomcdn/CN/cms/202207/69FF239653B3F5D7A7963FC501D6367E.jpg.50.webp"
          alt=""
          @click="showPopup"
        />
      </div>
      <div>
        <img
          src="https://res.vmallres.com/uomcdn/CN/cms/202206/23ADD18FBB6FDDC34822D6D4735D9626.gif"
          alt=""
          @click="showPopup"
        />
      </div>
    </div>
    <!-- 返回顶部 -->
    <div class="goTop" ref="goTop" @click="goTop">
      <van-icon name="back-top" size="30px" />
    </div>
    <!-- list -->
    <div class="card">
      <CardDetail></CardDetail>
    </div>
    <!-- footer -->

    <footer>
      <div class="footer_box">
        <div class="f_top">
          <p>
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F06%2F45%2F59013abf33658_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662948863&t=cdad8b0983a30b5cd6ff03d177f9b1ce"
              alt=""
            />

            <span>客户端</span>
          </p>
          <p>
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F07%2F26%2F5e1f33262e076eb83e2083fc304bf765.jpg%21%2Ffwfh%2F804x804%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fku.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662948790&t=09d3fd56270f0b0d0eeb3bb969193513"
              alt=""
            />
            <span>触屏版</span>
          </p>
        </div>
        <div class="f_btm">
          <p>
            <span>隐私政策</span>
            <span class="g">|</span>
            <span>用户协议</span>
            <span class="g">|</span>
            <span>关于Cookie</span>
          </p>
          <p>营业执照 备案主体编号 44201919072182</p>
          <p>粤ICP备19015064号 粤公网安备 44190002003939号</p>
          <p>增值电信业务经营许可证:粤B2-20190762</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import slider from "@/components/slider.vue";
import CardDetail from "@/components/CartDetail.vue";
import axios from "axios";
export default {
  data() {
    return {
      show: false,
      msg: "",
      cartList: [],
      // 页面滚动的高度
      scrollTop: 0,
      // slideList数据
      slideList: [
        [
          {
            imgSrc:
              "https://res.vmallres.com/uomcdn/CN/cms/202206/115C49BE2C06DCFFA6249650A8496E7A.png.50.webp",
            title: "会员频道",
          },
          {
            imgSrc:
              "https://res.vmallres.com/uomcdn/CN/cms/202203/7D74DBFE5CD3758C076689CC86533675.png.50.webp",
            title: "积分商城",
          },
          {
            imgSrc:
              "https://res.vmallres.com/uomcdn/CN/cms/202203/600EAD3CDF21EF656896BE267EF489B5.png.50.webp",
            title: "互动有礼",
          },
          {
            imgSrc:
              "https://res.vmallres.com/uomcdn/CN/cms/202203/40599FBBBB85DF82E1461E92F3E425A1.png.50.webp",
            title: "喵喵智慧屋",
          },
          {
            imgSrc:
              "https://res.vmallres.com/uomcdn/CN/cms/202203/8674EEBFD89135A7C9AF80BEFFC1AEB5.png.50.webp",
            title: "优购码",
          },
          {
            imgSrc:
              "https://res.vmallres.com/uomcdn/CN/cms/202206/2555610F8E903E0D15BEBF9018119165.png.50.webp",
            title: "企业团购",
          },
        ],
        [
          {
            imgSrc:
              "https://res.vmallres.com/uomcdn/CN/cms/202203/1E050290AACA41673B2EE92BF92D971D.png.50.webp",
            title: "关注店铺",
          },
          {
            imgSrc:
              "https://res.vmallres.com/uomcdn/CN/cms/202207/56C33E1C189E9C345F6ACBB60FDC9E57.png.50.webp",
            title: "Huawei",
          },
          {
            imgSrc:
              "https://res.vmallres.com/uomcdn/CN/cms/202203/3439BD2B29F6C63FFC466CEE20AD077E.png.50.webp",
            title: "教育优惠",
          },
          {
            imgSrc:
              "https://res.vmallres.com/uomcdn/CN/cms/202203/EEC01E7B8995ED7E76006D7A58260662.png.50.webp",
            title: "拼团",
          },
          {
            imgSrc:
              "https://res.vmallres.com/uomcdn/CN/cms/202208/E1AC144A0390DA4E5706FC45C2214553.gif",
            title: "超级体验官",
          },
          {
            imgSrc:
              "https://res.vmallres.com/uomcdn/CN/cms/202204/D766C8BCF40D0B8B94CDA474286F5386.png.50.webp",
            title: "商城公告",
          },
        ],
      ],
      // Aftermarket数据
      AftermarketList: [
        {
          imgSrc:
            "https://res.vmallres.com/uomcdn/CN/cms/202206/ACEEBBC9B240B6BE4C624BD15F84F4CC.png.50.webp",
          title: "官方客服",
        },
        {
          imgSrc:
            "https://res.vmallres.com/uomcdn/CN/cms/202206/2C07EA4283CEFFE04DB54D1F720B74CB.png.50.webp",
          title: "服务商店",
        },
        {
          imgSrc:
            "https://res.vmallres.com/uomcdn/CN/cms/202206/3CDE17E604A6FFD64B51839F8808065C.png.50.webp",
          title: "暖心服务",
        },
        {
          imgSrc:
            "https://res.vmallres.com/uomcdn/CN/cms/202206/054E7F8FCAB49482D31D231C11B2014C.png.50.webp",
          title: "一口价换电池",
        },
        {
          imgSrc:
            "https://res.vmallres.com/uomcdn/CN/cms/202206/7FFD901256F949FF46D982218A093885.png.50.webp",
          title: "以旧换新",
        },
        {
          imgSrc:
            "https://res.vmallres.com/uomcdn/CN/cms/202206/225324270173BFD61608BA35B3207530.png.50.webp",
          title: "补购保障",
        },
        {
          imgSrc:
            "https://res.vmallres.com/uomcdn/CN/cms/202206/016D79BA788D2F55D2DABABEAE5BEE10.png.50.webp",
          title: "收货地址",
        },
        {
          imgSrc:
            "https://res.vmallres.com/uomcdn/CN/cms/202206/00A8CE2E439083F2170FE4D9B8D0A79C.png.50.webp",
          title: "预约记录",
        },
        {
          imgSrc:
            "https://res.vmallres.com/uomcdn/CN/cms/202206/E87DF56BA073CF77248C0C4CA83FED96.png.50.webp",
          title: "常见问题",
        },
      ],
    };
  },
  components: {
    slider,
    CardDetail,
  },
  async created() {
    if (localStorage.getItem("token")) {
      this.msg = localStorage.getItem("token");
    } else {
      this.msg = "登录/注册";
    }
    let res = await axios({ url: "./json/Cart.json" });
    this.cartList = res.data.res;
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (this.scrollTop >= 10) {
        this.$refs.searchBar.style.opacity = ".5";
        if (this.scrollTop > 130) {
          this.$refs.searchBar.style.opacity = "1";
          this.$refs.goTop.style.visibility = "visible";
        }
      } else {
        this.$refs.searchBar.style.opacity = "0";
        this.$refs.goTop.style.visibility = "hidden";
      }
    },
    goTop() {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    login() {
      if (!localStorage.getItem("token")) {
        this.$router.push("/login");
      }
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.header {
  width: 100%;
  height: 4rem;
  position: relative;
  background: url("https://res.vmallres.com/portal/1.11.6.303/h5/images/head_bg_new.png")
    no-repeat;
  background-size: 100% 100%;
  .ceiling {
    width: 100%;
    height: 1.2rem;
    position: fixed;
    top: -0.05rem;
    z-index: 100;
    opacity: 0;
    background: url("https://res.vmallres.com/portal/1.11.6.303/h5/images/oN_bg.png")
      no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    .header_user {
      .user_lef {
        img {
          width: 0.8rem;
          height: 0.8rem;
        }
        ._tel {
          margin-top: 0.2rem;
          p {
            font-size: 0.33rem;
          }
          img {
            width: 0.4rem;
            height: 0.4rem;
            margin-left: 0.1rem;
          }
        }
      }
    }
    .header_icon {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 1.2rem;
      margin-left: 0.8rem;
    }
  }
  .header_icon {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 0.8rem;
    .van-icon {
      margin-right: 0.2rem;
    }
  }
  .header_user {
    display: flex;
    padding-left: 0.4rem;
    position: relative;
    .user_lef {
      display: flex;
      img {
        width: 1.2rem;
        height: 1.2rem;
      }
      div {
        margin-left: 0.1rem;
        width: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        ._tel {
          display: flex;
          flex-direction: row;
          margin-top: 0.1rem;
          p {
            color: white;
            font-weight: bolder;
            font-size: 0.4rem;
          }
          img {
            width: 0.5rem;
            height: 0.5rem;
          }
        }
        ._list {
          display: flex;
          position: relative;
          height: 0.3rem;
          span {
            color: white;
            background: rgba(0, 0, 0, 0.1);
            padding: 0.2rem;
            border-radius: 0.6rem;
            transform: scale(0.5);
            position: absolute;
            top: -0.1rem;
            left: -0.4rem;
          }
          .sp2 {
            left: 0.5rem;
          }
          .sp3 {
            left: 1.4rem;
          }
        }
        div {
          display: flex;
        }
      }
    }
    .user_rig {
      width: 4.3em;
      height: 1.7em;
      position: absolute;
      top: 0.6rem;
      right: 0.2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .header_footer {
    margin-top: 0.2rem;
    ol {
      display: flex;
      li {
        margin-left: 1.3rem;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          color: #ffb4bd;
        }
      }
      ._li2,
      ._li3 {
        margin-left: 1rem;
      }
    }
  }
}
.order {
  width: calc(90% - 0.2rem);
  height: 2.8rem;
  margin: 0 auto;
  background: white;
  border-radius: 0.3rem;
  overflow: hidden;
  padding: 0 0.2rem;
  position: relative;
  top: -0.8rem;
  .my_order {
    display: flex;
    position: relative;
    margin-top: 0.3rem;
    margin-bottom: 0.1rem;
    .p1 {
      font-weight: 700;
      font-size: 0.36rem;
    }
    .p2 {
      font-size: 0.32rem;
      position: absolute;
      right: 0.2rem;
      color: #666;
      font-weight: 700;
      span {
        font-weight: normal;
        color: #ccc;
      }
    }
  }
  ::v-deep .van-grid-item__text {
    color: black;
  }
}
.Aftermarket {
  width: calc(90% + 0.2rem);
  border-radius: 0.3rem;
  position: relative;
  top: -0.2rem;
  padding: 0.2rem 0;
  margin: 0 auto;
  background: rgb(255, 255, 255);
  ol {
    overflow-x: auto;
    white-space: nowrap;
    display: flex;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #666;
      font-weight: bold;
      margin: 0 0.19rem;
      img {
        width: 1.1rem;
        height: 1.1rem;
      }
      font-size: 0.24rem;
    }
  }
  ol::-webkit-scrollbar {
    display: none;
  }
}
.Two {
  width: calc(90% + 0.2rem);
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  div {
    width: 3.3rem;
    height: 4.5rem;
    border-radius: 0.3rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.card {
  width: calc(90% + 0.2rem);
  margin: 0 auto;
}
.goTop {
  width: 0.8rem;
  height: 0.8rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: fixed;
  top: 75%;
  right: 5%;
  visibility: hidden;
  z-index: 10000;
}
footer {
  width: 100%;
  margin-top: 1rem;
  border-bottom: 0.02rem solid #e5e7e9;
  .footer_box {
    width: calc(90% + 0.2rem);
    padding-top: 0.3rem;
    background: #f6f6f6;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    .f_top {
      display: flex;
      width: 3rem;
      justify-content: space-between;
      margin-bottom: 0.3rem;
      img {
        width: 0.8rem;
      }
      p {
        color: #b1b1b1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .f_btm {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 0.3rem;
      p {
        display: flex;
        justify-content: center;
        color: #b1b1b1;
        font-size: 0.26rem;
        margin-top: 0.2rem;
        .g {
          font-size: 0.24rem;
          margin: 0.05rem 0.2rem;
          color: #d7d7d7;
        }
      }
    }
  }
}
</style>