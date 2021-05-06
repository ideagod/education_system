var app = getApp();
var util = require("../../utils/util.js");
//拿到数据库的引用
const db = wx.cloud.database();
// 获取到集合的引用
const course_information = db.collection("course_information");
const courseSD = db.collection("courseSD");

var that;
// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D"],
    detail:""
  },
  /**
  * 按钮点击事件，显示模态框
  */
  showModal: function (e) {
    this.setData({
  
      showModal: true,
      _className: e.currentTarget.dataset.detail.className,
      _teacher: e.currentTarget.dataset.detail.teacher,
      _position: e.currentTarget.dataset.detail.position,
      _weekTime: e.currentTarget.dataset.detail.weekTime,
      _dayTime: e.currentTarget.dataset.detail.dayTime
     
    })
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    that=this;   
    that.getdb();
    that.getTime();
  },
  
  getTime:function(){   
    let date = util.getThisWeek();
    console.log(date);
    this.setData({
      date
    });
  },


  // 自定义获取数据库数据的方法
    getdb:function(event){
      wx.cloud.callFunction({
        name:'getdb',
        data:{
          sid:app.globalData.number
        },
        success: res => {
          that.setData({
            course:res.result.list[0].timetableList
          })
          that.getSub()     
        },
        fail: err => {
          console.error('[云函数] [login] 调用失败', err)
        }
      })

   
  },

getSub:function(){
    // 使用查询指令时，要先获取指令的对象
    const _ = db.command;
    // 获取集合里面的所有数据
    courseSD.where({
      sid:app.globalData.number,
      courseSD:app.globalData.number
    }).get({
      success: res => {
        that.setData({
          //courseSelf: res.data
          detail: this.data.course.concat(res.data)
        })
      }, fail: err => {
        console.log(err)
      }
 })
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
    var that=this;
    that.onLoad();

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
    var k = this
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 500
    })
    // 下拉刷新 调用onload函数
    k.onLoad()
   // 注意现在需要使用停止函数停止刷新
    wx.stopPullDownRefresh()

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