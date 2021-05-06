// pages/getdata/getdata.js
//拿到数据库的引用
const db = wx.cloud.database();
// 获取到集合的引用
const grading = db.collection("grading");
Page({
  data: {

  },

  submit: function(e) {
    // 表单里面的值 是一个对象
    var getTerm = e.detail.value.getTerm;
    var that = this;
    if (getTerm.length == 0) {
      wx.showToast({
        title: '      请选择学期     ',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.navigateTo({
        url: '/pages/get/get?_detail=' + getTerm,
      })
    }
    this.setData({
      //获取到radio的值并存进去
      _detail: e.detail.value.getTerm
    })


    const _ = db.command;
    // 获取集合里面的所有数据
    grading.where({
      term: this.data._detail
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