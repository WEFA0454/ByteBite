
let db=wx.cloud.database()//操作数据库
// pages/explore/explore.js
var height='170';
var weight='58';
var favour='';
var steps=120;
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
    userInput: '' ,// 用户输入的内容 
    msgList:[{
      content:"我是您的饮食管家,请问下列有哪些是您不喜欢吃的吗？",
    }],
    recommendation:[]
  },  
  
  onLoad: function() {  
    var that = this;
    var msgList = this.data.msgList;
    this.initWebSocket();  
    this.setData({
      user:wx.getStorageSync('userInfo')
    });
    // db.collection('users').where({phone:that.data.user.phone}).get({
    //   fail:res =>{
    //     console.log("失败")
    //   },
    //   success: res => {
    //     this.setData({
    //       msgList: msgList.concat(res.data), // 将新数据合并到 msgList 中
    //     })
    //   }
    // });
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
      this.setData({
        recommendation: message.data
      }
      )
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