jQuery(document).ready(function(){
    
    'use strict';  
  
    
    
    
    
    $(document).ready(function () {


//scrolltop

    var scrollButton = $("#scrolltop");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 300) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });

    scrollButton.click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600);

    });
     var scrollButton11 = $("#live-chat");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 400) {
            scrollButton11.show();
        } else {
            scrollButton11.hide();
        }
    });
    
});
  //wow
   new WOW().init();

});





    
   
