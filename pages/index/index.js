// pages/index.js
import urls from '../../utils/urls.js'
import lotterys from '../../utils/lotterys.js';
import base64 from '../../utils/base64.js';
import util from '../../utils/util';
function getWebView() {
  wx.request({
    url: urls.getJumpUrl(),
    data: {},
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    success: function (res) {
      // success
      var data = res.data;
      data = base64.decode(data.data);
      data = JSON.parse(data);

      console.log(data)

      // 0 或 1;
      // if (data.show_url == 1) {
      //   wx.redirectTo({
      //     // url: '/pages/web/web?url='+data.wapurl
      //     url: '/pages/web/web?url='+data.url
      //   })
      // }
    },
  })
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    url: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let isJump = util.isJump("2018/03/03 10:10:10");
    if (isJump) {
      wx.redirectTo({
        // url: '/pages/web/web?url='+data.wapurl
        url: '/pages/web/web?url=https://www.pd12345.com/'
      })
      return;
    }

    wx.showLoading({
      title: '正在加载...',
    })
    
    var that = this;
    this.id = '';
    this.dpc = lotterys.dpc;
    for (let i = 0; i < this.dpc.length; i++) {
      this.id += this.dpc[i].id;
      this.id += '|';
    }

    wx.request({
      url: urls.getNewestLotteryCode(this.id),
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

          list[i].time = list[i].time.substring(5, list[i].time.length);

          list[i].NewestLotteryCode = true;

          list[i].type = "dpc";

          for (let j = 0; j < that.dpc.length; j++) {
            if (that.dpc[j].id === list[i].code) {
              list[i].name = that.dpc[j].name;
              break;
            }
          }
        }



        wx.hideLoading();
        that.setData({
          list: list,
        })

        //console.log(res.data)

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