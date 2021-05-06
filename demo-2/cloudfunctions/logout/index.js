// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  traceUser: true,
  env: "hanpy-5sirv"
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  return new Promise((resolve, reject) => {
    db.collection('students').where({

      openid:event.openid

    }).update({
      data: {
        openid: "null"
      }, success: function (res) {
        console.log(res)
      }, fail: console.error
    })
  })
}