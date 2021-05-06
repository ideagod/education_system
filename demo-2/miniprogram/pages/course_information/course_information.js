// miniprogram/pages/course_information/course_information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course_name:'',
    course_information:'',
    credits:'',
    test_form:'',

  },
//取值
txVal:function(e){
  this.setData({
    course_name:e.detail.value
  })

},
submit(){
  wx.cloud.callFunction({
    name:"class_information",
    data:{
      course_name:this.data.course_name
    }
  }).then(res=>{
    console.log(res)
    if(res.result=="Please enter the correct course name"){
      wx.showToast({
        title: '请输入正确的课程名称',
        icon:'none'
      })
    }else{
        this.setData({
          course_information:res.result.data[0].course_information,
          credits:res.result.data[0].credits,
          test_form:res.result.data[0].test_form
        })
      }
    }

  ).catch(err=>{
    console.log(err)

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