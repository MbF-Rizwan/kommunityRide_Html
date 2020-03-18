////////////////////
//Application Module
////////////////////
var app = (function() {
    "use strict";
    //-----------------------------------------------------------------
    // Page Initalization handler : exposed to app.init();
    //-----------------------------------------------------------------
    var init = function() {
            _formElements();
            headerEvents();
        },


        headerEvents = function(){
            $(document).on('click','.sub-menu', function(e){
              e.stopPropagation();
                var windowWidth= $(window).width();
                if (windowWidth < 1200) {
                    if($(this).hasClass('open') === false){
                        $('.sub-menu').removeClass('open');
                        $('.sub-menu-wrapper').stop(true, true).slideUp('slow');
                        $(this).addClass('open');
                        $(this).find('.sub-menu-wrapper').slideDown('slow');
                    }else{
                        $(this).removeClass('open');
                        $('.sub-menu-wrapper').stop(true, true).slideUp('slow');
                    }
                } else {
                    if($(this).hasClass('open') === false){
                      $('.sub-menu').removeClass('open');
                      $(this).addClass('open');
                    }else{
                      $('.sub-menu').removeClass('open');
                    }
                }
            });
            $(document).on('click','.drop-menu', function(e){
              e.stopPropagation();
              if($(this).hasClass('open')){
                $('.drop-menu').removeClass('open');
              }
              else{
                $('.drop-menu').removeClass('open');
                $(this).addClass('open');
              }
            });
            $(document).on('click','.hamburger', function(e){
                e.preventDefault();
                $('body').addClass('hidden');
                $('.header .nav-bar').addClass('open');
              });
            $(document).on('click','.menu-close', function(e){
                e.preventDefault();
                $('body').removeClass('hidden');
                $('.header .nav-bar').removeClass('open');
              });
            $(document).click(function(e){
                if ( $(e.target).closest('.drop-container').length === 0 ) {
                    $(".drop-menu").removeClass('open');
                  }
                if($('.sub-menu').hasClass('open')){
                    $('.sub-menu').removeClass('open');
                  }
              });
        },

        // cart quantity

        
        //form elements

        _formElements = function() {
            //form 
           
        }

    // Expose Global Functions
    return {
        init: init,
    };
})();

$(window).scroll(function() {
    //scroll function here

});

$().ready(function() {
    app.init();
});

// if(Modernizr.touch){  
//   //modernizer touch function code here for mobile
// }
$(window).on('load', function() {
    $('.render-blk').stop(true, true).animate({ opacity: 1 }, 1000);
    if (sessionStorage.getItem('loader') == null) {
        sessionStorage.setItem('loader', 'true');
    }
});