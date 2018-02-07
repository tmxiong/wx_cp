// let urls = {

// };
// module.exports = urls;

let timeStamp = function () {
  return new Date().getTime();
};

// 福彩3d/高频彩/数字彩的列表链接
exports.getPlayTips = function (type, offset) {
  // type = fc/gpc/szc/csxw
  return 'https://m.qmcai.com/support/cmsv2/information/queryContent?parameter=%7B%22command%22:%22queryContent%22,%22categoryId%22:%22' + type + '%22,%22offset%22:' + offset + ',%22size%22:15,%22platform%22:%22html%22,%22version%22:%225.2.16%22%7D&callback=jsonp5'
};

// 福彩3d/高频彩/数字彩的详情链接
exports.getPlayTipsDetail = function (id) {
  return 'https://m.qmcai.com/zixun/detail.html?_id=' + id + '&time=' + timeStamp();
};

// 彩票彩种列表
exports.getLotteryKind = function () {
  return 'https://api.niubcaipiao.com/Prizes/getList'
}

// 彩票开奖列表
exports.getLotteryList = function(type,page) {
  return 'https://api.niubcaipiao.com/'+ type +'/getPrizes'
}

// 彩票销售数据
exports.getLotteryPrice = function () {
  return 'https://api.niubcaipiao.com/TwoColorBall/getPrize?issue=2018015'
}