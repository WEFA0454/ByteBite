
// components/foods-list/foods-list.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    src1:{
      type:String
    },
    src2:{
      type:String
    },
    title1:{
      type:String
    },
    title2:{
      type:String
    },
    likenum1:{
      type:Number,
      value:0
    },
    likenum2:{
      type:Number,
      value:0
    },
    src3:{
      type:String
    },
    src4:{
      type:String
    },
    src5:{
      type:String
    },
    src6:{
      type:String
    },
    detail1:{
      type:String
    },
    detail2:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    FoodsClick1(){
      wx.setStorageSync('src1',this.data.src1);
      wx.setStorageSync('src2',this.data.src3);
      wx.setStorageSync('src3',this.data.src4);
      wx.setStorageSync('title',this.data.title1);
      wx.setStorageSync('detail',this.data.detail1);
      wx.setStorageSync('likenum',this.data.likenum1);
      wx.navigateTo({
        url: '/pages/foodsdetails/foodsdetails'
      })
    },
    FoodsClick2(){
      wx.setStorageSync('src1',this.data.src2);
      wx.setStorageSync('src2',this.data.src5);
      wx.setStorageSync('src3',this.data.src6);
      wx.setStorageSync('title',this.data.title2);
      wx.setStorageSync('detail',this.data.detail2);
      wx.setStorageSync('likenum',this.data.likenum2);
      wx.navigateTo({
        url: '/pages/foodsdetails/foodsdetails'
      })
    }
  }
})