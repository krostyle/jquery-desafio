$(document).ready(function () {
    let myList = $('#my-list')
    let btn = $('#my-btn')
    myList.hide();
    btn.click(function () {
        myList.fadeToggle();
    });
})