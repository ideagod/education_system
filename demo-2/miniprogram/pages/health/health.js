// pages/health/health.js
//var utils = require('../../utils.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    tel: '',
    address: '',
    options: ''
  },

  checkboxgroupBindchange: function (e) {
    console.log(e)
    var temp1 = e.detail.value
    var temp2 = ''
    console.log(temp1)
    if (temp1.length != 0) {
      for (var i = 0, len = temp1.length; i < len; i++) {
        temp2 = temp2 + temp1[i] + ','
      } this.setData({
        text: '您选择了：' + temp2
      })
    } else {
      this.setData({
        text: ''
      })
    }
    this.setData({
      options: e.detail.value
    })
  },

  //取值
  name_txVal: function (e) {
    this.setData({
      name: e.detail.value,
    })
  },
  tel_txVal: function (e) {
    this.setData({
      tel: e.detail.value,
    })
  },
  address_txVal: function (e) {
    this.setData({
      address: e.detail.value,
    })
  },

  btm() {
    var that = this;
    wx.cloud.callFunction({
      name: "health_condition",
      data: {
        name: this.data.name,
        tel: this.data.tel,
        address: this.data.address,
        options: this.data.options
      },
      success: function (res) {
        console.log(res)
        if (res.result="save success") {
          wx.showToast({
            title: "提交成功",
            icon: "success",
            success: function () {
              setTimeout(function () {
                wx.switchTab({
                  url: '../index/index',
                });
              },1000)
            },
          });
        }else{
          wx.showToast({
            title: '提交失败，请重新填写！',
            icon:"none",
            duration:2000
          })
        }
      },
      fail: console.error
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