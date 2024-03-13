
// pages/explore/explore.js
var height='170';
var weight='58';
var favour='';
var steps='12000'; 
var Ques=``;
//export {defaultQus,Ques};
Page({  
  data: {  
    isStriked:true,
    socketTask: null, // WebSocket 任务对象  
    userInput: '', // 用户输入的内容  
    currentTime:'' ,
    msgList:[{
      content:"我是您的饮食管家,请问下列有哪些是您不喜欢吃的吗？注：选中的是您不想吃的",
    }],
    recommendation:['蔬菜沙拉','麻辣烫','西冷牛排','炒饭']
  },  
  
  onLoad: function() {  
    this.initWebSocket(); 
     // 设置一个定时器，每秒钟更新一次时间  
     this.timer = setInterval(() => {  
      this.updateTime();  
    }, 1000);  
  },  
  
  // 点击按钮选择不喜欢
  // strikeThrough: function () {
  //   this.setData({
  //     isStriked:false
  //   });
  // },
  updateTime:function(){
    // var that = this;
    // var msgList = this.data.msgList;
    // this.initWebSocket();  
    var date = new Date();  
    var year = date.getFullYear();  
    var month = date.getMonth() + 1; // 注意：月份是从0开始的，所以要加1  
    var day = date.getDate();  
    var hours = date.getHours();  
    var minutes = date.getMinutes();  
    var seconds = date.getSeconds();  
      
    // 如果月份、日期、小时、分钟或秒数小于10，则在前面添加0  
    month = month < 10 ? '0' + month : month;  
    day = day < 10 ? '0' + day : day;  
    hours = hours < 10 ? '0' + hours : hours;  
    minutes = minutes < 10 ? '0' + minutes : minutes;  
    seconds = seconds < 10 ? '0' + seconds : seconds;  
      
    // 格式化日期和时间  
    var currentTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;  
      
    // 将格式化后的时间设置为页面的数据，以便在WXML中显示  
    this.setData({  
      currentTime: currentTime  
    }); 
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
      console.log('收到服务器内容', message); 
      const str = JSON.stringify(message); 
      //console.log(str); 
      // 解析外层字符串得到内层JSON对象   
       const outerParsed = JSON.parse(str);   
       //console.log(outerParsed); 
       // 解析内层JSON字符串得到菜品数组   
       const innerParsed = JSON.parse(outerParsed.data);  
       //console.log(innerParsed); 
       // 提取菜品并存入数组   
       const dishesArray = innerParsed.recommendations.map(recommendation => recommendation.dish);  
       console.log(dishesArray);
       this.setData({
        recommendation: dishesArray
      });
       console.log(Array.isArray(dishesArray));  
       console.log(dishesArray instanceof Array);
    });  
  
    // 监听 WebSocket 关闭事件  
    this.data.socketTask.onClose((res) => {  
      console.log('WebSocket 连接已关闭', res);  
    });  
  },  
  
  takeaway(){
    wx.navigateTo({
      url: '/pages/takeaway/takeaway',
    })
  },
  // 用户点击发送按钮时触发  
  sendMessage: function() {  
    var defaultQus=`我想让你成为一个饮食助手，帮我推荐合适的饮食，现在是${this.data.currentTime},
                我的身高是${height}cm，体重是${weight}kg,今日步数是${steps}，
                结合我的体征和热量，根据地理位置、时令、季节、时间等多方面因素，为我推荐
                我的主食。 按照
                1.麻辣烫 
                2.蔬菜沙拉 
                3.西冷牛排 
                的例子的形式进行回答，注意不要有多的解释，直接返回序号和菜名，推荐的菜的个数4个。\ 
                其中返回的json格式应该为{"recommendations":[{"number":,"dish":},]}`;
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
    // 清除定时器  
    clearInterval(this.timer); 
  }  
});
