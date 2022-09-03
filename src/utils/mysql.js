// link-db.js
const mysql =require("mysql2");
// 连接数据库
const db = mysql.createPool({
    host:"localhost", // 数据库ip地址
    user:"root", // 用户名
    password:'123456', // 密码
    port:3307, // 数据库端口
    database:"huawei", // 要连接的数据库
})

// 测试
// db.query() 两个参数，第一个参数是sql语句，第二个参数是回调函数
// db.query("select * from users",(err,res)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log(res)
// })
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa()
const router = new Router();
// 解决调用接口跨域的问题
const cors = require("koa2-cors")
app.use(cors())

let dataObj = {
    msg:"成功",
    code:200,
    data:[]
}
router.get('/getProduct',async ctx=>{
    let data = await new Promise((resolve,reject)=>{
        db.query("select * from product",(err,res)=>{
            if(err){
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
    console.log(data)
    dataObj.data = dataObj
    ctx.body=data
})
// // updateUser?username=**&sex=**
// router.get("/updateUser",async ctx=>{
//     let res = await new Promise((resolve,reject)=>{
//         let sqlStr = "update users set ? where id=?"
//         let userObj = ctx.query
//         db.query(sqlStr,[userObj,userObj.id],(err,res)=>{
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(res)
//             }
//         })
//     })
//     if(res.affectedRows===1){ 
//         ctx.body = {
//             msg:"修改成功",
//         }
//     }
// })
// // 删除数据
// router.get("/deleteUser",async ctx=>{
//     let res = await new Promise((resolve,reject)=>{
//         let sqlStr = "delete from users where id = ?"
//         let id = ctx.query.id
//         db.query(sqlStr,id,(err,res)=>{
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(res)
//             }
//         })
//     })
//     if(res.affectedRows===1){ 
//         ctx.body = {
//             msg:"删除成功"
//         }
//     }
// })
// // 添加数据
// router.get("/addUser",async ctx=>{
//     let addObj = ctx.query
//     let result = await new Promise((reslove,reject)=>{
//         let sqlStr = "insert into users (username,sex) values(?,?)"
//         db.query(sqlStr,[addObj.username,addObj.sex],(err,res)=>{
//             if(err){
//                 reject(err)
//             } else {
//                 reslove(res)
//             }
//         })
//     })
//     if(result.affectedRows === 1){
//         ctx.body = {
//             msg:"添加成功"
//         }
//     }
// })
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(8888)
//   