/**
 * ES5
 * @param targetTime 目标时间（毫秒形式）
 * @return 返回当前距离目标的间隔时间: 天、时、分、秒
 */
function getGapTimes(targetTime) {
    var curTime = new Date().getTime();
    var tarTime = new Date(targetTime).getTime();
    // 计算两个时间的差值
    var gapTime = tarTime - curTime;
     // 处理异常
     if (gapTime <= 0) {
        return {
            gapDay: '00',
            gapHour: '00',
            gapMin: '00',
            gapSed: '00'
        };
    }
    // 计算相差天数，如果小时数小于10，添加0前缀
    var daysTime = Math.floor(gapTime / 1000 / 60 / 60 / 24);
    var daysMod = gapTime - daysTime * 24 * 60 * 60 * 1000;
    // 计算相差小时数，如果小时数小于10，添加0前缀
    var hoursTime = Math.floor(daysMod / 1000 / 60 / 60);
    var hoursMod = daysMod - hoursTime * 60 * 60 * 1000;
    // 计算相差分数，如果小时数小于10，添加0前缀
    var minsTime = Math.floor(hoursMod / 1000 / 60);
    var minsMod = hoursMod - minsTime * 60 * 1000;
     // 计算相差秒数，如果小时数小于10，添加0前缀
    var sedTime = Math.floor(minsMod / 1000);
    return {
        gapDay: getGapDetail(daysTime),
        gapHour: getGapDetail(hoursTime),
        gapMin: getGapDetail(minsTime),
        gapSed: getGapDetail(sedTime)
    };
}

function getGapDetail(gapTime) {
    if (gapTime < 10) {
        return `0${gapTime}`;
    }
    return `${gapTime}`;
}

var day = document.querySelector('#day');
var hour = document.querySelector('#hour');
var min = document.querySelector('#min');
var sed = document.querySelector('#sed');
var timeId = setInterval(function () {
    var result = getGapTimes('2022-12-31 00:00:00');
    day.innerHTML = `${result.gapDay}:`;
    hour.innerHTML = `${result.gapHour}:`;
    min.innerHTML = `${result.gapMin}:`;
    sed.innerHTML = `${result.gapSed}`;
}, 1000);

window.onunload = function () {
    clearInterval(timeId);
};