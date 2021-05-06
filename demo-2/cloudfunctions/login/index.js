// 云函数入口文件
const cloud = require('wx-server-sdk')


cloud.init({
  traceUser: true,
  env: "hanpy-5sirv"
})

const db = cloud.database()
// 云函数入口函数
//where语句进行筛查，选出数据库中与event.number（前端传来的数据）相同的number
//通过res.data.length的长度进行判断 返回相应的结果
//登录成功后 将openid存到相应的数据库中.
exports.main = async (event, context) => {
  return new Promise((resolve, reject) => {
    db.collection("students").where({
      number: event.number
    })
    .get().then((res) => {

      if(res.data.length==0){
        resolve("not exist")
      }else{
        if(res.data[0].pwd==event.pwd){
          resolve("log in")
          console.log(event.openid)
          db.collection('students').where({

            number:event.number

          }).update({
            data: {
              openid:event.openid
            },success:function(res){
              console.log(res)
            },fail:console.error
            })
          

        }else{
          resolve("wrong pwd")
        }
      }

     
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })

}