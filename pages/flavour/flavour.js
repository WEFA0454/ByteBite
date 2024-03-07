// pages/flavour/flavour.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scoreImg:[
      {
        id:1,
        rank:1,
      },
      {
        id:2,
        rank:2,
      },
      {
        id:3,
        rank:3,
      },
      {
        id:4,
        rank:4,
      },
      {
        id:5,
        rank:5,
      },
      {
        id:6,
        rank:6,
      },
      {
        id:7,
        rank:7,
      },
      {
        id:8,
        rank:8,
      },
      {
        id:9,
        rank:9,
      },
      {
        id:10,
        rank:10,
      },
    ],
    score_salty:5,
    score_sweet:5,
    score_sour:5,
    score_spicy:5,

    score_full:'/images/score_full.svg',
    score_empty:'/images/score.svg',
  },
  select_salty(e){
    this.data.score_salty = e.currentTarget.dataset.index;
    this.setData({
      score_salty : this.data.score_salty,
    })
  },
  select_sweet(e){
    this.data.score_sweet = e.currentTarget.dataset.index;
    this.setData({
      score_sweet: this.data.score_sweet,
    })
  },
  select_sour(e){
    this.data.score_sour = e.currentTarget.dataset.index;
    this.setData({
      score_sour : this.data.score_sour,
    })
  },
  select_spicy(e){
    this.data.score_spicy = e.currentTarget.dataset.index;
    this.setData({
      score_spicy : this.data.score_spicy,
    })
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