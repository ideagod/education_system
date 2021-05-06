// pages/Entrance_guard/Entrance_guard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.cloud.downloadFile({
      fileID:'cloud://hanpy-5sirv.6861-hanpy-5sirv-1301529993/QRCode-04172524.png',
      success:res=>{
        console.log(res.tempFilePath)
        that.setData({
          image:res.tempFilePath
        })

      },
      fail:console.error
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