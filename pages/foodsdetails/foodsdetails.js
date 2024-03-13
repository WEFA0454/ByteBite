// pages/foodsdetails/foodsdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src1:"",
    src2:"",
    src3:"",
    details:"",
    title:"",
    likenum:"0"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      src1:wx.getStorageSync('src1'),
      src2:wx.getStorageSync('src2'),
      src3:wx.getStorageSync('src3'),
      details:wx.getStorageSync('detail'),
      title:wx.getStorageSync('title'),
      likenum:wx.getStorageSync('likenum')
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
    
  },
  Onlikeclick(){
    this.setData({
      likenum:this.data.likenum+1
    })
    
  }
})