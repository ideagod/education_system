// miniprogram/pages/addNotice/addNotice.js
//拿到数据库的引用
const db=wx.cloud.database();
// 获取到集合的引用
const notice=db.collection("notice");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onchange:function(){
    console.log("radio =>",e.detail);
  },
  submit: function(e) {
    // 表单里面的值 是一个对象
    console.log(e.detail.value);

    notice.add({
      // data字段 需要新增的json 数据
      data:e.detail.value,
      success:res=>{
        console.log("数据添加成功");
        // 添加成功后返回到首页
        // wx.navigateBack();
      },
      fail:err =>{
        console.log("数据添加失败",err);
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