// pages/delSubject/delSubject.js
var app = getApp();
//拿到数据库的引用
const db = wx.cloud.database();
// 获取到集合的引用
const courseSD = db.collection("courseSD");
var that = this;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

    // 自定义获取数据库数据的方法
    getDelSub:function(){
     // 使用查询指令时，要先获取指令的对象
     const _ =db.command;
     // 获取集合里面的所有数据
     courseSD.where({
       sid:app.globalData.number,
       courseSD:app.globalData.number
     }).get({
       success: res => {
         that.setData({
           detail:res.data
         })
       }, fail: err => {
         console.log(err)
       }
     })
   
  },

 
  delSubBtn: function(e) {
    // console.log(e.currentTarget.dataset.detail._id);
    wx.showModal({

      title: '提示',

      content: '确定要删除此课程吗？',

      success: function(res) {

        if (res.confirm) { //这里是点击了确定以后

          // console.log('用户点击确定');

          courseSD.doc(e.currentTarget.dataset.detail._id).remove({
            success: res => {
              var that=this;
              // console.log("删除成功");
              const pages = getCurrentPages();
              const perpage = pages[pages.length - 1];
              perpage.onLoad()  ;
            }
          })
          wx.showToast({
            title: '删除成功',
            duration: 2000
          })
         
      
        } else { //这里是点击了取消以后

          console.log('用户点击取消')

        }

      }

    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this;
    that.getDelSub();

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


})