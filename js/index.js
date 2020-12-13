new WOW().init();

$("#gotop").click(function(){
    $("html,body").animate({
        scrollTop:0
    },1000);
 });
$(window).scroll(function() {
    if ( $(this).scrollTop() > 300){
    $('#gotop').css('display','block'); 
    } else {
       $('#gotop').css('display','none'); 
    }
});