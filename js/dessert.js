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
$(document).ready(function(){
    $('.prod').hide();
    $('.present .drink').click(function() {
        var prod = $(this).next('.prod');
        if (prod.is(':hidden')) {
            prod.slideDown();
            $('.present .drink').css('backgroundColor','#7C1924');
        } else {
            prod.slideUp();
            $('.present .drink').css('backgroundColor','#452b21');
        }
    }); 
    $('.present .foot').click(function() {
        var prod = $(this).next('.prod');
        if (prod.is(':hidden')) {
            prod.slideDown();
            $('.present .foot').css('backgroundColor','#7C1924');
        } else {
            prod.slideUp();
            $('.present .foot').css('backgroundColor','#452b21');
        }
    }); 
}); 