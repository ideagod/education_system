// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  var _sid=event.sid;
  var _courseSD=event.courseSD
  return new Promise((resolve,reject)=>{
    console.log("return");
    db.collection('selectCourse').aggregate()
    .match({
      sid:_sid,
      courseSD:_courseSD

    })
      .lookup({
          from: 'course_information',
          localField: 'courseList',
          foreignField: 'cid',
          as: 'timetableList',
          })
    .end()
    .then((res)=> {
      resolve(res);
    })
    .catch((err) => {
      reject(err);
    })
 } )
}