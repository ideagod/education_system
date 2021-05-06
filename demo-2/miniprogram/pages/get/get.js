//拿到数据库的引用
const db = wx.cloud.database();
var app = getApp();
// 获取到集合的引用
const grading = db.collection("grading");
var that;

// pages/get/get.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },


  // 自定义获取数据库数据的方法
  getdb: function() {
    const _ = db.command;
    // 获取集合里面的所有数据
    grading.where({
      term: this.data.detailterm,
      sid:app.globalData.number
    }).get({
      success: res => {

        that.setData({

          detail: res.data
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this;
    console.log(options);
    console.log(options._detail);
    //  没有获取到值，参数
    this.setData({
      detailterm: options._detail
    })
    
    that.getdb();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})