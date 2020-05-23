//引入请求文件
var fetch = require('../../utils/fetch.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    navList:[]
  },
  //获取轮播数据
  getSwiperData() {
    fetch('https://locally.uieee.com/slides', 'GET').then(res => {
      //更新数据和视图
      this.setData({swiperList:res.data})
    }).catch()
  },

  //获取分类菜单栏数据
  getNavMenuData(){
    fetch('https://locally.uieee.com/categories', 'GET').then(res => {
      //更新数据和视图
      this.setData({ navList: res.data })
    }).catch()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperData()
    this.getNavMenuData()
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
