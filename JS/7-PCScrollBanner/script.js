var container = document.querySelector('.container');
var imgContainer = document.querySelector('.imgContainer');
var imgSet = document.querySelectorAll('.imgContainer img');
var imgWidth = imgSet[0].offsetWidth;
var arrowLeft = document.querySelector('.arrowLeft');
var arrowRight = document.querySelector('.arrowRight');
var liContainer = document.querySelector('.liContainer');
var liSet = document.querySelectorAll('.liContainer li');

// step1: 点击小圆点，切换到对应的图片
for (let index = 0; index < liSet.length; index++) {
    const element = liSet[index];
    element.addEventListener('click', function () {
        for (let index = 0; index < liSet.length; index++) {
            const ele = liSet[index];
            ele.setAttribute('class', '');
        }
        this.setAttribute('class', 'highlight');
        slowAnimation(imgContainer, -index * imgWidth);
    });
}

// step2: 点击左右箭头，进行图片位置的前进或后退
let targetIndex = 0;
// step5: 节流
var flag = true;
arrowRight.addEventListener('click', function () {
    if (flag) {
        flag = false;
        if (targetIndex === imgSet.length - 1) {
            imgContainer.style.left = 0;
            targetIndex = 0;
        }
        targetIndex++;
        slowAnimation(imgContainer, -targetIndex * imgWidth, function() {
            flag = true;
        });
    
        // step3: 改变小圆点的高亮属性
        for (let index = 0; index < liSet.length; index++) {
            const ele = liSet[index];
            ele.setAttribute('class', '');
            if (targetIndex === liSet.length) {
                liSet[0].setAttribute('class', 'highlight');
            } else {
                liSet[targetIndex].setAttribute('class', 'highlight');
            }
        }
    }
})

arrowLeft.addEventListener('click', function() {
    if (flag) {
        flag = false;
        if (targetIndex === 0) {
            imgContainer.style.left = -(imgSet.length - 1) * imgWidth + 'px';
            targetIndex = imgSet.length - 1;
        }
        targetIndex--;
        slowAnimation(imgContainer, -targetIndex * imgWidth, function() {
            flag = true;
        });
    
        // step3: 改变小圆点的高亮属性
        for (let index = 0; index < liSet.length; index++) {
            const ele = liSet[index];
            ele.setAttribute('class', '');
            liSet[targetIndex].setAttribute('class', 'highlight');
        }
    }
})

// step4: 自动播放功能
var timer = setInterval(function() {
    arrowRight.click();
}, 2000);

container.addEventListener('mouseover', function() {
    clearInterval(timer);
})

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