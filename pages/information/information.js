
// pages/information/information.js
let db=wx.cloud.database()//操作数据库
Page({
  data: {
    step:null
  },
  onLoad: function (options) {
    var that = this;
    // wx.login({
    //   success:function(resLonin){
    //     console.log(resLonin)
    //     console.log(resLonin.code)
    wx.showModal({
      title: '获取您的微信运动信息',
      content: '获取您的微信运动信息',
      complete: (res) => {
        if (res.cancel) {
        }
    
        if (res.confirm) {
        
        wx.getWeRunData({
          success:function(resRun){
            console.log("微信运动密文：")
            console.log(resRun)
            wx.cloud.callFunction({
              name:'deswerundata',//云函数的文件名
              data:{
                weRunData: wx.cloud.CloudID(resRun.cloudID),
                obj:{
                  shareInfo: wx.cloud.CloudID(resRun.cloudID)
                }
              },
              
              success: function (res) {
                console.log("云函数接收到的数据:")
                console.log(res)
                let step = res.result.event.weRunData.data.stepInfoList[30].step
                that.setData({
                  step:step
                })
                console.log("得到的今日步数：",that.data.step)
                db.collection("users").where({}).update({
                  data:{
                    step:that.data.step
                  }
                })

              },
              fail:console.error
            })
          }
        })
      }
    }
  })
  //     }
  //   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})