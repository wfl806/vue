const mysql = require("mysql2");

const cart = mysql.createPool({  // 连接数据库
    host:'127.0.0.1',   // 数据库ip地址
    user:"root",        // 用户名
    password:"123456",  // 密码
    database:"guesslike"// 连接的数据
});

// 引入koa
const Koa = require("Koa");
const app = new Koa();
const koaRouter = require("koa-router");
const router = new koaRouter();

// 引入koa2-cors解决调用接口产生的跨域问题
const cors = require("koa2-cors");
app.use(cors());

// 获取数据
router.get("/", async ctx=>{
    let res = await new Promise((resolve,reject)=> {
        cart.query("select * from detailbox",(err,res)=> {
            if(err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
    console.log(res);
    ctx.body = {
        msg:"获取成功",
        res
    }
})


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8087);