<template>
    <div class="box">
        <div class="banner" style="width:100%">
            <van-swipe class="my-swipe" style="border-radius: .3rem;" :autoplay="2000" indicator-color="#000">
                <van-swipe-item v-for="(item, index) in dataList.banner" :key="index">
                    <img :src="item" alt="haha">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="content" style="overflow-y:scroll">
            <ContentBox v-for="(item, index) in dataList.contentData" :key="index" :data="item"></ContentBox>
        </div>
    </div>
</template>

<script>
import ContentBox from '@/components/ContentBox.vue';
import bus from '@/utils/EventBua.js'
export default {
    data() {
        return {
           dataList:{
                banner: [
                    'https://res.vmallres.com/pimages/uomcdn/CN/cms/202208/EBDA626710E7C0E7CDF9987B40B34380.jpg',
                    'https://res.vmallres.com/pimages/uomcdn/CN/cms/202208/D64152E284F08F7265C4D6D13BE60649.jpg',
                    'https://res.vmallres.com/pimages/uomcdn/CN/cms/202208/EB053E21058D52C6A8A37953F19275BF.jpg',
                    'https://res.vmallres.com/pimages/uomcdn/CN/cms/202208/12CC610A20CDF09322246F1FE332EBBA.jpg',
                    'https://res.vmallres.com/pimages/uomcdn/CN/cms/202208/E36CCBDCAEF6AA882743EBCEBD7C93D3.jpg',
                    'https://res.vmallres.com/pimages/uomcdn/CN/cms/202208/161BCCFEB467F2C30C2D7A2534170F36.jpg',
                    'https://res.vmallres.com/pimages/uomcdn/CN/cms/202208/305283A3ECDDEA5C95203147509F94C6.jpg',
                    'https://res.vmallres.com/pimages/uomcdn/CN/cms/202208/712D98203B020F6A5DFBED0E06271B3B.png',
                    'https://res.vmallres.com/pimages/uomcdn/CN/cms/202207/147C97BDCA061C353B1A72FE393B60D9.jpg',
                    'https://res.vmallres.com/pimages/uomcdn/CN/cms/202207/317A51CB254B79A7C91137C9603EBD0F.png',
                    'https://res.vmallres.com/pimages/uomcdn/CN/cms/202207/15F0621897CE0889DD3CA42A39159E3C.jpg',
                    'https://res.vmallres.com/pimages/uomcdn/CN/cms/202208/2638C9539EFFE0B0F9F6180A54869857.jpg',
                ],
                contentData:[
                    {title:"新品推荐",
                    imgList:[
                       {
                            imgSrc: "https://res.vmallres.com/uomcdn/CN/cms/202208/2D4E1B59410DED4821E9B86CC1D95BAD.png.50.webp",
                            name:'nova系列'
                       },
                        {
                            imgSrc: "https://res.vmallres.com/uomcdn/CN/cms/202207/FBF9FAC8F302FC1FA36D0600BF0D84B4.png.50.webp",
                            name: 'P50系列'
                        },
                        {
                            imgSrc: "https://res.vmallres.com/uomcdn/CN/cms/202207/E801790F89AAF4D238878B7E28DC760D.jpg.50.webp",
                            name: '畅想系列'
                        },
                        {
                            imgSrc: "https://res.vmallres.com/pimages//uomcdn/CN/pms/202202/gbom/6941487250684/428_428_BF66EB274D635C86BCE31D307AE9A6EDmp.png",
                            name: 'HUAWEI P50 Pocket'
                        }
                    ]},
                    {
                        title: "美酒饮欢",
                        imgList: [
                            {
                                imgSrc: "https://res.vmallres.com/uomcdn/CN/cms/202208/2D4E1B59410DED4821E9B86CC1D95BAD.png.50.webp",
                                name: 'nova系列'
                            },
                            {
                                imgSrc: "https://res.vmallres.com/uomcdn/CN/cms/202207/FBF9FAC8F302FC1FA36D0600BF0D84B4.png.50.webp",
                                name: 'P50系列'
                            },
                            {
                                imgSrc: "https://res.vmallres.com/uomcdn/CN/cms/202207/E801790F89AAF4D238878B7E28DC760D.jpg.50.webp",
                                name: '畅想系列'
                            },
                            {
                                imgSrc: "https://res.vmallres.com/pimages//uomcdn/CN/pms/202202/gbom/6941487250684/428_428_BF66EB274D635C86BCE31D307AE9A6EDmp.png",
                                name: 'HUAWEI P50 Pocket'
                            }
                        ]
                    },
                    {
                        title: "鸿蒙智联",
                        imgList: [
                            {
                                imgSrc: "https://res.vmallres.com/uomcdn/CN/cms/202208/2D4E1B59410DED4821E9B86CC1D95BAD.png.50.webp",
                                name: 'nova系列'
                            },
                            {
                                imgSrc: "https://res.vmallres.com/uomcdn/CN/cms/202207/FBF9FAC8F302FC1FA36D0600BF0D84B4.png.50.webp",
                                name: 'P50系列'
                            },
                            {
                                imgSrc: "https://res.vmallres.com/uomcdn/CN/cms/202207/E801790F89AAF4D238878B7E28DC760D.jpg.50.webp",
                                name: '畅想系列'
                            },
                            {
                                imgSrc: "https://res.vmallres.com/pimages//uomcdn/CN/pms/202202/gbom/6941487250684/428_428_BF66EB274D635C86BCE31D307AE9A6EDmp.png",
                                name: 'HUAWEI P50 Pocket'
                            }
                        ]
                    },
                    {
                        title: "车边周边",
                        imgList: [
                            {
                                imgSrc: "https://res.vmallres.com/uomcdn/CN/cms/202208/2D4E1B59410DED4821E9B86CC1D95BAD.png.50.webp",
                                name: 'nova系列'
                            },
                            {
                                imgSrc: "https://res.vmallres.com/uomcdn/CN/cms/202207/FBF9FAC8F302FC1FA36D0600BF0D84B4.png.50.webp",
                                name: 'P50系列'
                            },
                            {
                                imgSrc: "https://res.vmallres.com/uomcdn/CN/cms/202207/E801790F89AAF4D238878B7E28DC760D.jpg.50.webp",
                                name: '畅想系列'
                            },
                            {
                                imgSrc: "https://res.vmallres.com/pimages//uomcdn/CN/pms/202202/gbom/6941487250684/428_428_BF66EB274D635C86BCE31D307AE9A6EDmp.png",
                                name: 'HUAWEI P50 Pocket'
                            }
                        ]
                    }
                ]
           }
        }
    },
    async created() {
       await bus.$on("getdata", (data) => {
            this.dataList = data;
            // console.log('content数据：',data);
        })
        // console.log(this.dataList);
    },
    components:{
        ContentBox,
    },

}
</script>

<style lang="scss" scoped>

.content::-webkit-scrollbar{
    display: none;
}
.van-swipe__indicator{
    background: #666;
}
.banner{
    border-radius: .3rem;
    margin-bottom: .24rem;
}
.box {
    width: calc(100% - .64rem) !important;
    // padding-top: .16rem;
    padding: .16rem .32rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 5.36rem;
        height: 2.2rem;
        display: block;
        
    }
}
</style>