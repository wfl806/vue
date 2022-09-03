<template>
  <div>
    <div class="sL_box">
      <div class="sL" ref="slide">
        <ul>
          <li v-for="(item, index) in bv[0]" :key="index" @click="showPopup">
            <img :src="item.imgSrc" alt="" />
            <p>{{ item.title }}</p>
          </li>
        </ul>
        <van-popup v-model="show">
          <p style="text-align:center;">点我干嘛(ಥ_ಥ)</p>
          <img src="https://img0.baidu.com/it/u=3688881229,1705024996&fm=253&fmt=auto&app=138&f=GIF?w=204&h=172" alt="">
          <p style="text-align:center;">不跳转行不行...</p>
        </van-popup>
        <ul>
          <li v-for="(item, index) in bv[1]" :key="index" @click="showPopup">
            <img :src="item.imgSrc" alt="" />
            <p>{{ item.title }}</p>
          </li>
        </ul>
      </div>
      <div class="sliding_block_box">
        <div class="sliding_block" ref="sliding_block"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
       show: false,
    };
  },
  props: ["bv"],
  mounted() {
    let sldie = this.$refs.slide;
    let sliding_block = this.$refs.sliding_block;
    sliding_block.style.transition = ".5s";
    let startX = 0; // 记录开始位置
    sldie.addEventListener("touchstart", function (e) {
      startX = e.touches[0].clientX; // 记录位置
    });
    sldie.addEventListener("touchmove", function (e) {
      let distanceX = e.changedTouches[0].clientX - startX; // 求得手指滑动的位移

      if (distanceX > 0) {
        sliding_block.style.left = "0";
      } else {
        sliding_block.style.left = "20px";
      }
    });
  },
  methods: {
     showPopup() {
      this.show = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.sL_box {
  width: calc(90% + 0.2rem);
  height: 3.5rem;
  margin: 0 auto;
  border-radius: 0.3rem;
  background: white;
  position: relative;
  top: -0.5rem;
  .sL {
    overflow-x: auto;
    white-space: nowrap;
    ul {
      display: flex;
      li {
        width: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 0.26rem;
        margin: 0 0.2rem;
        img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
  .sL::-webkit-scrollbar {
    display: none;
  }
  .sliding_block_box {
    width: 0.8rem;
    height: 0.1rem;
    background: #f2f2f2;
    position: absolute;
    bottom: 0.2rem;
    left: calc(50% - 0.4rem);
    .sliding_block {
      width: 0.4rem;
      height: 0.1rem;
      border-radius: 0.1rem;
      background: #cf0a2c;
      margin: 0 auto;
      position: absolute;
    }
  }
}
</style>