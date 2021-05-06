// pages/card/card.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    school: '吉林大学珠海学院',
    number: '',
    name: '',
    profession: '',
    class: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.cloud.callFunction({
      name: 'getinformation',
      data: {
        number: app.globalData.number
      },
      success: function (res) {
        console.log(res)
        that.setData({
          number: res.result.data[0].number,
          name: res.result.data[0].name,
          profession: res.result.data[0].professional,
          class: res.result.data[0].class
        })
      },
      fail: console.error
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