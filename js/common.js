function gotop(){
    $('html,body').animate({scrollTop:'0px'},500);
}

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>=100){
            $('.gotop').fadeIn(300);
        }else{
            $('.gotop').fadeOut(300);
        }
    });
    $(".gotop").click(gotop);
});