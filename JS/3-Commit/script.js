var commits = document.querySelector('.commits');
var subBtn = document.querySelector('.subBtn');
var textIn = document.querySelector('.textIn');
subBtn.addEventListener('click', function () {
    var commitDetail = textIn.value;
    if (commitDetail) {
        var newP = document.createElement('p');
        newP.innerText = commitDetail;
        newP.addEventListener('click', function() {
            commits.removeChild(newP);
        });
        commits.appendChild(newP);
        textIn.value = '';
    }
});
