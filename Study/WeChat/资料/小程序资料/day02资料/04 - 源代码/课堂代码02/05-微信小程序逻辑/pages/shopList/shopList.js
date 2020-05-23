
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shopList: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log("A3:店铺列表页-----监听页面加载");
        console.log(options);
        wx.request({
            url: "https://locally.uieee.com/categories/" + options.cat + "/shops",
            data: {
                _limit: 20,
                _page: 1
            },
            success: (res) => {
                console.log(res);
                this.setData({
                    shopList: res.data
                })
            },
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // console.log("B3:店铺列表页-----监听页面初次渲染完成");
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // console.log("C3:店铺列表页-----监听页面显示");
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log("D3:店铺列表页-----监听页面隐藏");
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log("E3:店铺列表页-----监听页面卸载");
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