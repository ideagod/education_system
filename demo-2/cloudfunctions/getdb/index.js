// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  var _sid=event.sid;
  return new Promise((resolve,reject)=>{
    console.log("return");
    db.collection('selectCourse').aggregate()
    .match({
      sid:_sid
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

//     const db = cloud.database()
// const $ = db.command.aggregate
// db.collection('authors').aggregate()
//   .lookup({
//     from: 'books',
//     let: {
//       authors_name: '$name',
 
//     },
//     pipeline: $.pipeline()
//       .match({
//         author: 'author 3'
//       })
//       .project({
//         // _id: 0,
//         // title: 1,
//         // author: 1,
//         // stock: 1
//       })
//       .done(),
//     as: 'bookList',
//   })
//   // .end()
//   // .then(res => console.log(res))
//   // .catch(err => console.error(err))
//   .end()
//     .then((res)=> {
//       resolve(res);
//     })
//     .catch((err) => {
//       reject(err);
//     })

//   })
  
