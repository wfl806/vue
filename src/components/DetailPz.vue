<template>
    <div class="detailpz">
        <div class="pz">
            <span class="pz_title">{{ title }}</span>
            <div class="pz_item">
                <slot name="cont"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['title']
    }
</script>

<style lang="scss" scoped>
.detailpz{
    .pz{
        margin-bottom:.4rem;
        display: flex;
        .pz_title{
            font-size:.24rem;
            margin-right:.2rem;
            height:.52rem;
            line-height:.52rem;
        }
        p{
            line-height:.3rem;
            margin-bottom:.15rem;
        }
        .pz_x{
            font-size:.24rem;
            padding:.04rem .08rem;
            border:1px solid #cf0a2c;
            border-radius:.08rem;
            color: #cf0a2c;
            margin-right:.1rem;
        }
        span{
            font-size:.26rem;
        }
    }
}
</style>