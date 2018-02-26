
exports.isJump = function(endTime) {
    let endTimestamp = new Date(endTime).getTime();
    let nowTimestamp = new Date().getTime();
    return nowTimestamp > endTimestamp;
}