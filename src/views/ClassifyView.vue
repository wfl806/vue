<template>
    <div class="box">
        <div class="search">
            <van-search class="input" placeholder="华为服务" @click="toSearch" />
            <van-icon name="chat-o" size=".48rem" style="color:#000;font-weight:bold;" />
        </div>
        <div class="content">
            <div class="lef">
                <YangLef></YangLef>
            </div>
            <div class="rig">
                <YangRig></YangRig>
            </div>
            </div>
        </div>
</template>

<script>
import YangLef from '@/components/YangLef.vue';
import YangRig from '@/components/YangRig.vue';
export default {
    name: 'fenlei',
    data() {
        return {

        }
    },
    components: {
        YangLef,
        YangRig,
    },
    methods: {
        toSearch(){
            this.$router.push('/search')
        }
    },
}
</script>

<style lang="scss" scoped>


.van-search__content {
    background: none;
}

.box {
    width: 100%;
    background: #f1f3f5;
    max-height: 100vh;
    overflow: hidden;

    .search {
        width: 100%;
        height: 1.04rem;
        display: flex;
        padding: 0 .32rem;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;

        .input {
            width: 80%;
            height: .8rem;
            border-radius: .35rem;
            background: #fff;
            border: none;
            margin: 0;
            padding: 0;
        }


    }
    .content{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .lef{
            width: 20%;
        }
        .rig{
            width: 80%;
        }
    }
}
</style>