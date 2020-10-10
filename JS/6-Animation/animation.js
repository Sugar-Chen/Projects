// 匀速动画
function animation(moveEle, targetDistance) {
    clearInterval(moveEle.timer);
     moveEle.timer = setInterval(function () {
         var offLeft = moveEle.offsetLeft;
         if (offLeft >= targetDistance) {
             clearInterval(moveEle.timer);
         }
         moveEle.style.left = offLeft + 2 + 'px';
     }, 30);
}

// 缓动动画
function slowAnimation(moveEle, targetDistance, callback) {
     clearInterval(moveEle.timer);
     moveEle.timer = setInterval(function () {
         var offLeft = moveEle.offsetLeft;
         var step = (targetDistance - offLeft) / 10;
         step = step > 0 ? Math.ceil(step) : Math.floor(step);
         if (offLeft == targetDistance) {
             clearInterval(moveEle.timer);
             callback && callback();
         }
         moveEle.style.left = offLeft + step + 'px';
     }, 15);
}