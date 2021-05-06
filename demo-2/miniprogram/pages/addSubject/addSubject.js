//拿到数据库的引用
const db = wx.cloud.database();
var app = getApp();
// 获取到集合的引用
const courseSD = db.collection("courseSD");
// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classLength:"2",
    speciality:"信息管理技术系",
    week:true,
    weekTime:"1-16周",
    dayTime: "",
    courseSD:""
  },

  submit: function (e) {
    // 表单里面的值 是一个对象
    // console.log(e.detail.value.classTime);
  
    if (e.detail.value.classTime == "1") {
      this.setData({
        dayTime: "8:20-10:00"})
    } if (e.detail.value.classTime == "3") {
      this.setData({ dayTime: "10:30-12:00" })
    } if (e.detail.value.classTime == "5") {
      this.setData({ dayTime: "14:00-15:40" })
    } if (e.detail.value.classTime == "7") {
      this.setData({ dayTime:  "16:00-17:20" })
    } if (e.detail.value.classTime == "9") {
      this.setData({ dayTime:  "18:40-20:20" })
    }
    // console.log(this.data.dayTime);
    console.log(e.detail.value)
    courseSD.add({
      // data字段 需要新增的json 数据

      data: {
        sid:app.globalData.number,
        classLength: this.data.classLength,
        className: e.detail.value.className,
        weekday: e.detail.value.weekday,
        classTime: e.detail.value.classTime,
        position: e.detail.value.position,
        teacher: e.detail.value.teacher,
        speciality:this.data.speciality,
        week:this.data.week,
        weekTime:this.data.weekTime,
        dayTime:this.data.dayTime,
        courseSD:app.globalData.number


      },

      success: res => {
        console.log("数据添加成功");
      
     
        wx.showToast({
          title: '数据添加成功',
          duration: 2000
        })
      
    
      },
      fail: err => {
        console.log("数据添加失败", err);
      }
    })
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})