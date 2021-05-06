// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  traceUser: true,
  env: "hanpy-5sirv"
})

// 云函数入口函数
const db = cloud.database()
exports.main = async (event, context) => {
  return new Promise((resolve, reject) => {
    db.collection("students").where({
      number: event.number
    }).get()
      .then((res) => {
        resolve(res)
      }).catch((err) => {
        console.log(res)
        reject(err)
      })
  })
}