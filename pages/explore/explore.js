// pages/explore/explore.js
import { callGPTAPI } from '../../api/callgpt';

Page({
 /**
   * 页面的初始数据
   */
  data: {

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

   // 生命周期函数--监听页面加载
  onLoad(options) {
    // 页面加载时执行初始化逻辑
    this.initializeData();
  },

  // 初始化数据的函数
  initializeData() {
    // 获取本地日期和时间
    const currentDateTimeString = new Date().toLocaleString();
    console.log(currentDateTimeString);

    // 修改以下身体指标内容
    var height = '1.70';
    var weight = '57';
    var steps = '6000';
    var favour = '';

    // 调用 GPT API
    this.callAPI(currentDateTimeString, height, weight, steps, favour);
  },

  // 按钮点击事件处理函数
  nextstepbutton:function(event){
     // 按钮点击时执行初始化逻辑
     this.initializeData();
  },

  // 调用 GPT API 的函数
  callAPI(currentDateTimeString, height, weight, steps, favour) {
    // 调用 GPT API 示例
    callGPTAPI(`现在是${currentDateTimeString},我身高是${height}米,体重是${weight},今天目前为止走了${steps}步，结合我的今天消耗的卡路里，现在的时令菜，为我提供几种合适的菜品，
    按照1.菜名
        2.菜名
        3.菜名
        4.菜名
        5.菜名
        6.菜名的格式输出`, (error, generatedText) => {
      if (error) {
        // 处理错误
        console.error('API调用失败:', error);
      } else {
        // 处理生成的文本
        console.log('生成的文本:', generatedText);
        // 更新页面数据，如果需要展示在页面上
        this.setData({
          message: generatedText
        });
      }
    });
  }

  // ...其他页面代码...
});
