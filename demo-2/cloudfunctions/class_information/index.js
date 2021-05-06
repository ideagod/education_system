// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  traceUser:true,
  env: "hanpy-5sirv"
})
const db=cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  return new Promise((resolve,reject)=>{
    db.collection("course_information").where({
      course_name:event.course_name
    }).get()
    .then((res)=>{
      if(res.data.length==0){
        resolve("Please enter the correct course name")
        console.log("请输入正确的课程名称")
      }else{
        console.log(res)
        resolve(res)
      }
    }).catch((err)=>{
      
      reject(err)
    })
  })
}