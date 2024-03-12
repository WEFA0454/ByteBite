// pages/sharedetails/sharedetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    fileList: [

      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      {
        url: 'https://img95.699pic.com/photo/50039/3912.jpg_wh860.jpg',
        name: '图片2',
        isImage: true,
        deletable: true,
      },
    ],
  },
  onChange(e){
    this.setData({
      value: e.detail,
    });
  },
  onSearch(){
    console.log(this.data.value);
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