// pages/notice/notice.js
var app = getApp();
//拿到数据库的引用
const db = wx.cloud.database();
// 获取到集合的引用
const notice = db.collection("notice");
var that = this;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

    // 自定义获取数据库数据的方法
    getDelNotice:function(){
     // 使用查询指令时，要先获取指令的对象
     const _ =db.command;
     // 获取集合里面的所有数据
     notice.get({
       success: res => {
         that.setData({
           detail:res.data
         })
       }, fail: err => {
         console.log(err)
       }
     })
   
  },

 
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this;
    that.getDelNotice();

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