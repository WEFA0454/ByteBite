// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    //导入npm包
    const myPackage = require('packageName')
    const packageOther = require('packageName/other')
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
