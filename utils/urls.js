

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

// 跳转链接
exports.getJumpUrl = function() {
  return 'https://ios-link.gg-app.com/get_init_data.php?type=ios&appid=2017369'
}

// webview url
exports.getWebviewUrl = function() {
  return 'https://www.ympzcs.com/xiao01/';
}