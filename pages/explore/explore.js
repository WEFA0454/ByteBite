
// index.js
// 获取应用实例
/*
const app = getApp();
const INPUTING = 1;
const ANSWERING = 2;
Page({
  data: {
    hint: '',
    showHint: false,
    greeting: '',
    apiKey: '',
    messages: [],
    inputMessage: '',
    state: INPUTING
  },
  // 添加处理发送消息的逻辑
  sendMessage: function (e) {
    console.log(e)
    var inputMessage = this.data.inputMessage;
    var messages = this.data.messages;
    messages.push({ content: inputMessage, type: 'right'})
    this.setData({messages:messages, inputMessage: ''})
    messages.push({ content: '', type: 'left'})
    this.setData({messages:messages, state:ANSWERING})
    // 响应处理
    let that = this;
    var socketTask = wx.connectSocket({
      url: app.globalData.ws_host + '/ws/explore/',
      success(res){
        console.log("连接成功");
      }
    })
    socketTask.onOpen(function(e){
      var data = {
        message: inputMessage,
        openid: app.globalData.userInfo.openid,
        history: that.data.messages,
        api_key: that.data.apiKey
      }
      socketTask.send({
        data: JSON.stringify(data)
      });
    })
    socketTask.onMessage(function(e){
      console.log(e);
      var res = JSON.parse(e.data);
      if(res.finish){
        that.setData({state:INPUTING})
      }
      var sub = that.data.messages.length - 1;
      var msg = that.data.messages[sub].content + res.message;
      that.setData({[key]: msg});
    })
    socketTask.onError(function(e){
      console.log(e);
    })
    socketTask.onClose(function(e){
      console.log(e);
    })
  },

  onShow: function(e){
    let that = this;
    wx.getStorage({
      key:'apiKey',
      success(res){
        console.log(res);
        that.setData({apiKey:res.data, showHint:false});
      }
    })
  },

  onLoad: function(e){
    let that = this;
    wx.showLoading({title: '初始化...', mask:true})
    var s = setInterval(function(){
      if(app.globalData.userInfo){
        wx.hideLoading();
        that.setData({times:app.globalData.userInfo.times})
        clearInterval(s);
      }
    }, 100)
    // 获取配置

    wx.request({
      url: app.globalData.host + '/get_config/',
      success(res){
        console.log(res);
        that.setData({greeting:res.data.greeting, hint:res.data.hint})
      },
      fail(res){
        console.log(res);
      }
    })
  },

  // 打开设置页面的点击事件处理函数
  openSettings: function () {
    wx.navigateTo({
      url: '/pages/settings/settings?id=5',
    });
  },

  onShareAppMessage(){
    return {
      title: '吃了吗您',
      path: '/pages/index/index?id=' + app.globalData.userInfo.openid
    }
  },

  clearMessages: function () {
    this.setData({
      messages: [],
      state: INPUTING,
      hint: false
    });
  },

  copyMessage: function (e) {
    const messageText = e.currentTarget.dataset.content;
    wx.setClipboardData({
      data: messageText,
      success: function () {
        wx.showToast({
          title: '复制成功',
        });
      },
    });
  },
});
*/

// pages/user/user.js
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