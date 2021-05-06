// pages/login/login.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    number:"",
    pwd:""

  },
  /**
* wxml界面中点击button就会调用这个函数方法
*/
  formsubmit: function (e) {
    console.log("表单发生了点击事件，内容：", e.detail.value)
    console.log("用户名:", e.detail.value.unumber)
    console.log("密码:", e.detail.value.upwd)
    this.setData({
      number: e.detail.value.unumber,
      pwd:e.detail.value.upwd
    })
  },
  /**
   * this.data.number 是前端用户输入的数据 
   * data中数据传到云函数login中。
   * success：function中的res是云函数返回的数据结果，
   * 进入判断语句判断用户是否存在。
   * 登录成功后，跳转至index首页面
   */
  btm(){
    var that = this;
    console.log("Testing"+this.data.pwd)
    wx.cloud.callFunction({
      name:"login",
      data:{
        number: this.data.number,
        pwd:this.data.pwd,
        openid:app.globalData.openid
      },
      success: function(res) {
        if (res.result=="not exist"){
          wx.showToast({
            title:"用户不存在",
            icon: 'none'
          })
        }else{
          if (res.result=="log in"){

            app.globalData.number =  that.data.number;

            wx.showToast({
              title: "登录成功",
              icon: "success",
              duration:2000,
              success:function(){
                setTimeout(function(){
                  wx.switchTab({
                    url: '../index/index',
                  })
                })
              }
            })
          }else{
            wx.showToast({
            title:"密码错误",
            icon: 'none'
          })
          }
        }
        console.log(res)
        
      },
      fail: console.error
    })
  },
  formReset: function (e) {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'autologin',
      data: {
        openid: app.globalData.openid
      }, success: res => {
        console.log(res)
        if (res.result =="Is logged in"){
          wx.showToast({
            title: "该用户已登录",
            icon: "success",
            duration: 2000,
            success:function(){
              setTimeout(function () {
                wx.switchTab({
                  url: '../index/index',
                })
              })
            }
          })
        }else{
            wx.showToast({
              title: "请登录",
              icon:"none",
              duration: 1000
            })
        }
      }, fail: err => {
        console.log(err)
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  
  onReady: function () {
    let that = this;
   
      // 调用云函数
      wx.cloud.callFunction({
        name: 'getOpenId',
        data: {
          
        },
        success: res => {
          console.log(res)
          console.log('[云函数] [login] user openid: ', res.result.openid)
          app.globalData.openid = res.result.openid 
          /*调用getopenID云函数 返回res中的openid存在全局变量
           *调用时用app.globaldata.openid
           */       
        },
        fail: err => {
          console.error('[云函数] [login] 调用失败', err)
        }
      })

     

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

  // 移动
  move: function (res) {
    let left = res.touches[0].pageX;
    if (left > 0) {
      this.setData({
        left: left
      })
    }
    else {
      this.setData({
        left: 0
      })
    }
  },
})