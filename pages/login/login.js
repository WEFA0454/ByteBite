let db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if(wx.getStorageSync('userInfo')){//用户保留登陆状态
    wx.switchTab({
      url: '/pages/explore/explore',
    })
  }
  },

  //前往注册页面
go_sign(){
  wx.navigateTo({
    url: '/pages/sign/sign',
  })
},
//用户点击登录
submit(e){
  let id=e.detail.value
  if(!id.phone){
    wx.showToast({
      title: '请输入手机号',
      icon:'none'
    })
    return;
  }else if(!id.password){
    wx.showToast({
      title: '请输入密码',
      icon:'none'
    })
  }else{
    //输入完整
    wx.showLoading({
      title: '登录中',
    })
    db.collection("users").where({
      phone:id.phone,
      password:id.password
    }).get()
    .then(res=>{  
      wx.hideLoading()
      if(res.data.length){
        
        console.log(res.data[0]);
        wx.setStorageSync('userInfo', res.data[0])
        wx.showToast({
          title: '登录成功',
          icon:'none'
        })
        setTimeout(()=>
        {wx.switchTab({
          url: '/pages/explore/explore',
        })},500)
      }else{
        wx.showToast({
          title: '账号不存在或者密码错误',
          icon:'none'
        })
      }
    })
    .catch(err=>{
      wx.showToast({
        title: '错误，请重试',
        icon:'none'
      })
      wx.hideLoading()
    })
  }
},
go_explore(){
  wx.navigateTo({
    url: '/pages/explore/explore',
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