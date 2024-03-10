// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  //搜索界面搜索框事件处理函数*****
  onSearchClick(){

  },
  //搜索框内内容改变
<<<<<<< HEAD
=======
  onChange1(e){
    this.setData({
      value: e.detail,
    });
  },
>>>>>>> b24629d76bc0df6e0ba2475065ee78725e4086f2
  onChange(e){
    this.setData({
      value: e.detail,
    });
  },
  //实现搜索
  onSearch(){
    console.log(this.data.value);
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