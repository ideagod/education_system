// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  traceUser: true,
  env: "hanpy-5sirv"
})
const db=cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  return new Promise((resolve,reject)=>{
    db.collection("students").where({
      name:event.name
    }).update({
      data:{
        tel:event.tel,
        health_condition:event.options,
        home_address:event.address
      }
    }).then((res)=>{
      resolve(res)
      console.log(res)
      if(res.update==0){
        console.log('提交失败')
        resolve('save fail')
      }else{
        console.log('提交成功')
        resolve("save success")
      }
    }).catch((err)=>{
      console.log(err)
      reject(err)
    })
  })
 
}