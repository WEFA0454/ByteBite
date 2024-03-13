import Toast from '@vant/weapp/toast/toast';
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: true,
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

  },
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
    console.log(this.data.radio);
    db.collection('users').where({}).update({
            data:{
              theme:event.detail
            }
          }).then(res=>{
              Toast.success('更改成功');
          })
      wx.setStorageSync('imgsrc',this.data.radio)
  },
})