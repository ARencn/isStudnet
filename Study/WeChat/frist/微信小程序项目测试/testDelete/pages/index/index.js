Page({

  /**
   * 页面的初始数据
   */
  data: {
    sliderList:[],
    mainList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    // wx.request({
    //   url: 'https://locally.uieee.com/slides', //请求地址
    //   data: {}, //请求参数
    //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   // header: {}, // 设置请求的 header,
    //   dataType: "json", //数据类型
    //   success: function(res){
    //     console.log(res);
    //   },
    //   fail: function() {
    //     // fail
    //   },
    //   //调用结束  失败成功都会执行
    //   complete: function() {
    //     // complete
    //   }
    // })
    //const _this =this;
    //通过在外面赋值的方式获得this
    //请求轮播图
    wx.request({
      url: 'https://locally.uieee.com/slides',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res)=>{
        //使用箭头函数更改this 指向问题
        //直接更新数据并不会更新视图
        //  this.data.sliderList=res.data;
        // this.setData({})
        //setData有两个功能  1.更新视图  2.更新数据
        this.setData({
           sliderList:res.data
        })
    
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    //请求列表数据
    wx.request({
      url: 'https://locally.uieee.com/categories',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res)=>{
        this.setData({
          mainList : res.data
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
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