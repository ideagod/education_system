// pages/mine/mine.js
const app = getApp()

Page({
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    value: ""

  },

  //自定义课程表弹窗
  click: function() {
    var ithis = this;
    var list = ['添加自定义课程表', '删除课程表'];

    wx.showActionSheet({
      itemList: list,
      success(res) {
        if (list[res.tapIndex] == '添加自定义课程表') {
          wx.navigateTo({
            url: '../addSubject/addSubject'
          })
        } else {
          wx.navigateTo({
            url: '../delSubject/delSubject'
          })
        }

      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },

  //事件处理函数
  bindViewTap: function() {

  },
  btnlogout() {
    wx.cloud.callFunction({
      name: 'logout',
      data: {

        openid: app.globalData.openid

      },
      success: res => {
        console.log(res)

      },
      fail: err => {
        console.error(err)
      }
    })

  },

  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})