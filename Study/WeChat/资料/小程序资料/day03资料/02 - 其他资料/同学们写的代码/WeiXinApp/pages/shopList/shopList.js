//引入请求文件
var fetch = require('../../utils/fetch.js');
// pages/shopList/shopList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        titleName: '',
        cate_id: '',//当前分类id
        shopList: [],
        _page: 0,//分页起始页码
        _limit: 10,//每页条数,
        hasMore: true
    },
    //获取当前分类的数据
    getShopListData() {
        wx.showNavigationBarLoading()
        //判断是否还有数据
        if (!this.data.hasMore && this.data.shopList.length > 0) return wx.showToast({
            title: '到底了',
            success() {
                //导航加载关闭
                wx.hideNavigationBarLoading()
            }
        });
        this.data._page++;
        const { _page, _limit, cate_id } = this.data;

        fetch(`https://locally.uieee.com/categories/${cate_id}/shops`, 'GET', { _page, _limit }).then(res => {
            //拼接达到数据的累加
            const shops = this.data.shopList.concat(res.data)

            //console.log(res.header) 在响应头中X-Total-Count代表数据总数
            //判断是否还有数据
            const hasMore = _page * _limit < (res.header['X-Total-Count'] - 0)

            this.setData({ shopList: shops, hasMore })

            //关闭下拉动画
            wx.stopPullDownRefresh()

            //关闭上拉提示
            wx.hideLoading()


            //导航加载关闭
            wx.hideNavigationBarLoading()
        }).catch()
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //options可获取地址栏?后面的参数

        //获取导航栏显示
        this.setData({ titleName: options.cate_name, cate_id: options.cate_id })

        //获取商品数据
        this.getShopListData()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        if (this.data.titleName) {
            wx.setNavigationBarTitle({
                title: this.data.titleName
            })
        }
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        this.setData({ shopList: [], _page: 0, _limit: 10 })
        this.getShopListData()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        wx.showLoading({
            title: 'loading',
        })
        this.getShopListData()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})