// pages/sharedetails/sharedetails.js
import Toast from '@vant/weapp/toast/toast';
const db=wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    details:'',
    fileList: []
  },
  onChange1(e){
    this.setData({
      value: e.detail,
    });
  },
  onSearch1(){
    console.log(this.data.value);
  },
  onChange2(e){
    this.setData({
      details: e.detail,
    });
  },
  onSearch2(){
    console.log(this.data.details);
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
  // 读取上传图片
  // “Uploader 文件上传” 组件自带 bind:after-read="afterRead" 
  afterRead(e) {
    const that = this;
    const { file } = e.detail;
    console.log(file);
    ///////////////////////
    console.log('filelist-real',this.data.fileList);
    let fileList = this.data.fileList;
        fileList.push({ ...file, url: file.url});
        this.setData({ fileList });
    //////////////////////
    that.setData({
      upLoadDisabled: true,
    });
    that.uploadImage(file.url);
  },

  // 上传到云储存
  uploadImage(fileURL) {
    var that = this;
    wx.cloud.uploadFile({
      cloudPath: new Date().getTime() + ".png", // 上传至云端的路径
      filePath: fileURL, // 小程序临时文件路径
      success: (res) => {
        //获取图片的http路径，准备添加到数据库中
        console.log('ID',res.fileID);
        that.addImagePath(res.fileID);
        // fileID 是为了方便后面删除！！！
        that.setData({
          fileID: res.fileID,
        });
      },
      fail: () => {
        that.setData({
          upLoadDisabled: false,
        });
        console.error;
      },
    });
  },

  // 获取图片上传后的url路径
  addImagePath(fileId) {
    // console.log(fileId);
    var that = this;
    wx.cloud.getTempFileURL({
      fileList: [fileId],
      success: (res) => {
        const url = res.fileList[0].tempFileURL;
        that.getImgsData(url, fileId); // 这里是获取图片的方法，根据情况自己写获取图片的方法
      },
      fail: () => {
        that.setData({
          upLoadDisabled: false,
        });
        console.error;
      },
    });
  },
  Onupclick(){
      console
      db.collection('log').add({
        data:{
          title:this.data.value,
          details:this.data.details,
          fileList:this.data.fileList
        },
        success: (res) => {
          Toast.success('成功上传');
        },
      });
  }
});