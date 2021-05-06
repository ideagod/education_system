// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  traceUser:true,
  env: "hanpy-5sirv"
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
      return new Promise((resolve,reject)=>{
        db.collection('students').where({
          openid:event.openid
        })
          .get().then((res) =>{
            
           if(res.data.length==0){
             resolve("Please log in")
             console.log("请输入账号登录")
           } else{
             resolve("Is logged in")
             console.log("已登录")
           }

          }).catch((err)=>{
            console.log(err)
            reject(err)
          })
      })
}