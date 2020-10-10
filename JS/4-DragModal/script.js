// step1: 点击按钮的时候展示模态框
var showModalBtn = document.querySelector('#showModalBtn');
var modalContainer = document.querySelector('.modalContainer');
showModalBtn.addEventListener('click', function () {
    modalContainer.style.display = 'block';
});

// step2: 点击close按钮隐藏模态框
var closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', function () {
    modalContainer.style.display = 'none';
});

// step3: 拖动模态框的时候，模态框移动
var modal = document.querySelector('.modal');
modal.addEventListener('mousedown', function (outE) {
    // 鼠标在盒子内的位置
    var x = outE.pageX - this.offsetLeft;
    var y = outE.pageY - this.offsetTop;
    // 添加移动事件
    document.addEventListener('mousemove', move);
    function move(midE) {
        modal.style.top = midE.pageY - y + 'px';
        modal.style.left =midE.pageX - x + 'px';
    };
    // 删除移动事件
    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', move);
    })
});


