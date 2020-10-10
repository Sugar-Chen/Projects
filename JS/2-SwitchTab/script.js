var tabs = document.querySelectorAll('.tabs li');
var tabsDesc = document.querySelectorAll('.tabsDesc li');
for (let index = 0; index < tabs.length; index++) {
    const element = tabs[index];
    element.addEventListener('click', function () {
        for (let index1 = 0; index1 < tabs.length; index1++) {
            const ele = tabs[index1];
            ele.className = '';
        }
        this.className = 'highLight';

        for (let index2 = 0; index2 < tabsDesc.length; index2++) {
            const ele = tabsDesc[index2];
            ele.className = 'hide';
        }
        tabsDesc[index].className = 'show';
    });
}
