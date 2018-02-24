Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

let secret = 'eb7f104bd5c44f5fb6862b3b9a4b31af';
let timeStamp = function () {
  return new Date().getTime();
};



// 彩票开奖列表
exports.getNewestLotteryCode = function(id) {
  return 'https://route.showapi.com/44-1?code=' + id + '&showapi_appid=46754&showapi_test_draft=false&showapi_timestamp=' + timeStamp() + '&showapi_sign=' + secret;
}

// 显示近20期开奖号码
exports.getHistoryLotteryCode = function (id) {
  return 'https://route.showapi.com/44-2?code=' + id + '&count=50&endTime=' + new Date().Format('yyyy-MM-dd hh:mm:ss') + '&showapi_appid=46754&showapi_test_draft=false&showapi_timestamp=' + timeStamp() + '&showapi_sign=' + secret;
};