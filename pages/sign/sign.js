// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:"https://tse2-mm.cn.bing.net/th/id/OIP-C.xA5QX2crc3fR5d0DIH-oDQAAAA?w=182&h=182&c=7&r=0&o=5&dpr=1.6&pid=1.7"

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  //返回登陆界面
  back(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  //用户提交信息
  submit(e){
    let id=e.detail.value
    console.log(id);
    if(!id.nickname||!id.phone||!id.password||!id.con_pass){
      wx.showToast({
        title: '请输入完整信息',
        icon:'none'
      })
    }
    else if(!id.paseword!=id.con_pass){
      wx.showToast({
        title: '密码不一致',
        icon:'none'
      })
      return;
    }
    
  },

  //用户获取头像信息
    bindchooseavatar(e){
      console.log(e.detail.avatarUrl);

      let that=this
      let avatarUrl = e.detail.avatarUrl

      wx.showLoading({
        title: '上传中',
      })
      let time = Date.now()//获取当前时间段
      wx.cloud.uploadFile({
        cloudPath:"users.images/"+time,//文件名
        filePath:avatarUrl//文件
      })
      .then(res=>{
        that.setData({
          avatarUrl:res.fileID
        })
        wx.hideLoading()
        wx.showToast({
          title: '上传成功',
          icon:'none'
        })
      })
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