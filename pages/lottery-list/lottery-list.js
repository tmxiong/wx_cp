// pages/lottery-list/lottery-list.js
import urls from '../../utils/urls.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载...',
    })
    var that = this;
    var type = options.type;

    this.setData({
      type: type
    })

    wx.request({
      url: urls.getHistoryLotteryCode(type),
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success

        let list = res.data.showapi_res_body.result;
        for (let i = 0; i < list.length; i++) {
          let openCode = list[i].openCode;
          openCode = openCode.replace("+", ",");
          openCode = openCode.split(",");
          list[i].openCode = openCode;

          list[i].time = list[i].time.substring(5, list[i].time.length)
        }

        that.setData({
          list: list
        })
        wx.hideLoading();
        console.log(res.data)

      },
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