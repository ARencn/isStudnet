
//封装请求
module.exports = (url,type,data) => {
  //返回一个promise对象处理异步逻辑
  return new Promise((resolve,reject)=>{
    wx.request({
      url: url,
      data: data,
      header: {
        "Content-Type": 'json'
      },
      method: type,
      dataType: "json",
      success: resolve,
      fail: reject,
    })
  })
}