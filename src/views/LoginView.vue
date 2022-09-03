<template>
    <div>
        <div class="header">
            <img src="https://id1.cloud.huawei.com/CAS/static_rss/rss_92/CAS/vuebuild/img/ic_header_logo.png" alt="">
            <p class="p1">华为账号</p>
            <p class="p2">登录华为账号以使用云空间、华为应用及更多服务</p>
        </div>
        <form>
            <el-input v-model="tel" placeholder="手机号/邮件地址/账号名"></el-input>
            <el-input placeholder="密码" v-model="pwd" show-password></el-input>
            <button @click="click">登录</button>
        </form>
        <div class="rests">
            <p>其他方式登录</p>
            <img src="https://id1.cloud.huawei.com/CAS/static_rss/rss_92/CAS/vuebuild/img/wap_qq_huawei.png" alt="" onclick="alert('暂不支持哦')">
        </div>
        <div class="footer">
            <p>遇到问题</p>
            <p class="center">|</p>
            <p>隐私声明</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tel:"",
                pwd:""
            }
        },
        methods:{
            click(){
                if(this.tel&&this.pwd){
                localStorage.setItem('token', this.tel)
                    this.$router.push('/my')
                }else{
                    alert('请输入用户名和密码')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    div{
        background: white;
        .header{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 .3rem;
            margin-bottom: 1rem;
            img{
                width: 1rem;
                margin-top: .3rem;
            }
            .p1{
                font-size: .5rem;
                font-weight: bold;
                margin-top: .4rem;
            }
            .p2{
                font-size: .30rem;
                color: #666666;
            }
        }
        form{
            padding: 0 .3rem;
            ::v-deep .el-input__inner{
                outline: none;
                border: none;
                height: 1rem;
                line-height: 1rem;
                font-size: .32rem;
            }
            button{
                width: 100%;
                outline: none;
                border: none;
                margin-top: .3rem;
                height: .8rem;
                border-radius: .8rem;
                background: #9eceff;
                color: white;
            }
        }
        .rests{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 2rem;
            color: #666666;
            img{
                width: 1rem;
                margin-top: .2rem;
            }
        }
        .footer{
            margin-top: .3rem;
            padding-bottom: .5rem;
            display: flex;
            color: #007dff;
            justify-content: center;
            align-items: center;
            .center{
                margin: 0 .3rem;
                color: #cccccc;
            }
        }
    }
</style>