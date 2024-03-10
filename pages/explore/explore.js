<<<<<<< HEAD

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
=======
// pages/explore/explore.js
var height='170';
var weight='58';
var favour='';
var steps='12000';
var defaultQus=`我想让你成为一个饮食助手，帮我推荐合适的饮食，
                我的身高是${height}cm，体重是${weight}kg,今日步数是${steps}，
                结合我的体征和热量，根据地理位置、时令、季节、时间等多方面因素，为我推荐
                我的主食。请按照
                1.菜名
                2.菜名
                3.菜名
                的形式进行回答。`;
var Ques=``;
export {defaultQus,Ques};
Page({  
  data: {  
    socketTask: null, // WebSocket 任务对象  
    userInput: '' // 用户输入的内容  
  },  
  
  onLoad: function() {  
    this.initWebSocket();  
  },  
  
  // 初始化 WebSocket 连接  
  initWebSocket: function() {  
    const url = 'ws://localhost:8888'; // WebSocket 服务器地址  
    this.data.socketTask = wx.connectSocket({  
      url: url,  
      success: (res) => {  
        console.log('WebSocket 连接成功', res);  
      },  
      fail: (error) => {  
        console.error('WebSocket 连接失败', error);  
      }  
    });  
  
    // 监听 WebSocket 连接打开事件  
    this.data.socketTask.onOpen((res) => {  
      console.log('WebSocket 连接已打开', res);  
    });  
  
    // 监听 WebSocket 错误事件  
    this.data.socketTask.onError((error) => {  
      console.error('WebSocket 连接打开失败，请检查', error);  
    });  
  
    // 监听 WebSocket 接收消息事件  
    this.data.socketTask.onMessage((message) => {  
      console.log('收到服务器内容', message.data);  
      // 在这里处理服务器返回的数据，比如更新页面内容  
    });  
  
    // 监听 WebSocket 关闭事件  
    this.data.socketTask.onClose((res) => {  
      console.log('WebSocket 连接已关闭', res);  
    });  
  },  
  
  // 用户点击发送按钮时触发  
  sendMessage: function() {  
    const userInput = defaultQus;//this.data.userInput; // 获取用户输入的值  
    const jsonData = JSON.stringify({ message: userInput }); // 包装成 JSON 格式  
  
    if (this.data.socketTask) {  
      this.data.socketTask.send({  
        data: jsonData,  
        success: (res) => {  
          console.log('发送消息成功', res);  
        },  
        fail: (error) => {  
          console.error('发送消息失败', error);  
        }  
      });  
    } else {  
      console.error('WebSocket 连接未建立，无法发送消息');  
    }  
  
    // 清空输入框  
    this.setData({  
      userInput: ''  
    });  
  },  
  
  // 绑定输入框的值变化事件  
  bindInputChange: function(e) {  
    this.setData({  
      userInput: e.detail.value  
    });  
  },  
  
  // 页面卸载时关闭 WebSocket 连接  
  onUnload: function() {  
    if (this.data.socketTask) {  
      this.data.socketTask.close();  
    }  
  }  
});
>>>>>>> a1c7e2f7fc14ab0e7a88df69a3943525cfae92f1
