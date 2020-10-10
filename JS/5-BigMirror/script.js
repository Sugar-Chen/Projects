var smallPngContainer = document.querySelector('.smallPngContainer');
var shadow = document.querySelector('.shadow');
var bigPngContainer = document.querySelector('.bigPngContainer');
var bigImgDiv = document.querySelector('.bigImgDiv');
// step1: 鼠标移动到小图上时，显示遮罩和大图; 
smallPngContainer.addEventListener('mouseover', function() {
    shadow.style.display = 'block';
    bigPngContainer.style.display = 'inline-block';
    // step3: 移动遮罩位置到当前悬停区域
    smallPngContainer.addEventListener('mousemove', function(e) {
        var w = shadow.offsetWidth;
        var h = shadow.offsetHeight;
        var top = e.pageY - this.offsetTop - h * 0.5;
        var left = e.pageX - this.offsetLeft - w * 0.5;
        // step4: 大图中位置也偏移
        if (top < 0) {
            shadow.style.top = 0;
            bigImgDiv.style.top = 0;
        } else if (top >= this.offsetHeight - h) {
            shadow.style.top = this.offsetHeight - h + 'px';
            bigImgDiv.style.top = -(this.offsetHeight - h + 'px');
        } else {
            shadow.style.top = top + 'px';
            bigImgDiv.style.top = -top + 'px';
        }
        if (left < 0) {
            shadow.style.left = 0;
            bigImgDiv.style.left = 0;
        } else if (left >= this.offsetWidth - w) {
            shadow.style.left = this.offsetWidth - w + 'px';
            bigImgDiv.style.left = -(this.offsetWidth - w + 'px');
        } else {
            shadow.style.left = left + 'px';
            bigImgDiv.style.left = -left + 'px';
        }
    })
})
// step2: 鼠标离开小图上时，隐藏遮罩和大图; 
smallPngContainer.addEventListener('mouseout', function() {
    shadow.style.display = 'none';
    bigPngContainer.style.display = 'none';
})

