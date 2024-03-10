
// app.js
App({
  onLaunch() {
    //初始化开发环境 xyt0305
    if(!wx.cloud){
      console.error('未启用云开发环境');
    }else{
      wx.cloud.init({
        env:"clmn-5grv1e6qc0c699ee",//云开发环境的id号
        traceUser:true,
      })
    }
    // 展示本地存储能力
    //导入npm包
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if(res.code){
          
        }else{
          console.log('登陆失败！'+res.errMsg)
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    phone:null,
  }
})
