window.addEventListener('DOMContentLoaded', (event) => {
    new WOW().init();
     
    $(function() {
          var pagetop = $('#js-scroll-fadein');
          $(window).scroll(function () {
              if ($(this).scrollTop() > 100) {
                pagetop.addClass("is-fadein");
              } else {
                pagetop.removeClass("is-fadein");
              }
          });
          pagetop.on("click",function () {
              $('body,html').animate({
                  scrollTop: 0
              }, 500);
              return false;
          });
  });
    const keyName = 'visited';
    const keyValue = true;
  if (!sessionStorage.getItem(keyName)) {
      sessionStorage.setItem(keyName, keyValue);
      $('.fadeout').fadeIn("slow", function () {
        $(this).delay(5000).fadeOut("slow");
      });
      setTimeout(function(){
        $('.display').css('display','block');
   },6000);
  } else {
      $('.fadeout').css('display','none');
      $('.display').css('display','block');
  }
  $(function(){
    $('.animation').css('visibility','hidden');
    $(window).scroll(function(){
      var windowHeight = jQuery(window).height(),
          topWindow = jQuery(window).scrollTop();
      $('.animation').each(function(){
      var targetPosition = jQuery(this).offset().top;
      if(topWindow > targetPosition - windowHeight + 100){
        jQuery(this).addClass("fadeInUp");
      }
      });
    });
    });
  });