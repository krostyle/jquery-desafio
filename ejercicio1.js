$(document).ready(function(){
    let elementChange=$('#changeMe')
    let elementClick=$('#clickMe')
    elementClick.click(function(){
        elementChange.css("background-color", "yellow").css('height','500px');
    })
})
