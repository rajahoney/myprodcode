
 /* jQuery Preloader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});



$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  /* jQuery to collapse the navbar on scroll
    -----------------------------------------------*/
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 10) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });
  
  $(window).resize(function() {
  if($(window).width() < 760) {
    $(".bannerimgoveraide").each(function() {
      $(this).attr("src", $(this).attr("src").replace("/img/slider/slide1.jpg", "/img/slider/slide114.jpg"));
    });
  }
});
  

  $(window).resize(function() {
	if($(window).width() < 760 ) {
			$('.imagesize').attr('src','/img/mobile/see_yourself_banner_mobile.jpg');
			
	}
	if($(window).width() > 760 ) {
			$('.imagesize').attr('src','/img/see_yourself_banner_desktop.jpg');
			
	}
	
	
  });
  
  // ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
	
	

// When the user clicks on the button, scroll to the top of the document


(function($) {
  $(function() {
    $('.toggle-overlay').click(function() {
		 $(".navbar-collapse").addClass("hide");
      $('aside').toggleClass('open');
    });
  });
})(jQuery);
	
	
	
  /* BxSlider
    -----------------------------------------------*/
  (function (window, $) {
  'use strict';

  // Cache document for fast access.
  var document = window.document;

  function mainSlider() {
    $('.bxslider').bxSlider({
		auto: true,
      pagerCustom: '#bx-pager',
      mode: 'fade',
      nextText: '',
      prevText: ''
    });
  }

  mainSlider();

  var $links = $(".bx-wrapper .bx-controls-direction a, #bx-pager a");
  $links.click(function(){
     $(".slider-caption").removeClass('animated fadeInLeft');
     $(".slider-caption").addClass('animated fadeInLeft');
  });

  $(".bx-controls").addClass('container');
  $(".bx-next").addClass('fa fa-angle-right');
  $(".bx-prev").addClass('fa fa-angle-left');


  })(window, jQuery);


   /* Owl Carousel
    -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-work").owlCarousel({
      autoPlay: 3000,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
    });
  });
  

  /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#work').parallax("100%", 0.3);
    $('#about').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#portfolio').parallax("100%", 0.1);
   // $('#plan').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.2);
  }
  initParallax();




  });

