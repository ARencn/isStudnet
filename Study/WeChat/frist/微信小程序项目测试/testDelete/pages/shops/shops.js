// pages/shops/shops.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
            shopList:[],
            pageIndex: 1,
            pageSize:20,
            catId:0,
            showContent:true,
            requestFlag:true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
       

        if(options.title){
            wx.setNavigationBarTitle({
                title: options.title,
            })
        }
        this.setData({
            catId:options.cat
        });
       this.lodeMore();
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
        this.setData({
            pageIndex:0,
            showContent:true,
            requestFlag:true,
            shopList:[]
        })
        this.lodeMore();
        wx.stopPullDownRefresh();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function(){
    this.lodeMore();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    //用于加载数据
    lodeMore:function(){
        let _this = this.data;
        if(_this.requestFlag){
            wx.request({
                url: 'https://locally.uieee.com/categories/'+_this.catId+'/shops',
                data: {
                    _limit: _this.pageSize, _page : ++_this.pageIndex},
                method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                // header: {}, // 设置请求的 header
                success: (res)=>{
                    let newList = _this.shopList
                    if(res.data.length!==0){
                        this.setData({
                            shopList: newList.concat(res.data)
                        })
    
                    }else{
                        this.setData({
                            showContent:false,
                            requestFlag:false
                        })
                    }
                   
                },
                fail: function() {
                    // fail
                },
                complete: function() {
                    // complete
                }
            })

        }
        
    }
})