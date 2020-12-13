$('#menu li a').click(function(e){
    var jump = $(this).attr('href');
    console.log(jump);
    e.preventDefault();
    setTimeout(function(){
        document.location.href=jump;
    },1000);
});

$('#menu li a').click(function(){
    $('.triangleBox').css('display','block');
});



