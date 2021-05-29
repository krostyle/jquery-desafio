$(document).ready(function(){
    let overMe=$('#overMe')
    let box=$('#box')
    overMe.mouseover(function () { 
        box[$('li:even').css('background-color','red')]
        box[$('li:odd').css('background-color','green')]
        
    });
    overMe.mouseleave(function(){
        box[$('li').css('background-color','')]
    })
})