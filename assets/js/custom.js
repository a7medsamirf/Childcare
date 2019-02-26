/*************************************

Template Name: Childcare | Personal Portfolio HTML5 Template
Author: Ahmed Samir
Author URI: https://www.facebook.com/a7med.samir.f
Description: Meruem | Personal Portfolio HTML5 Template
Version: 1.0

NOTE: This is active js file of the template.

****************************************/

/*global $ , alert, console*/


/* ==================================
      Start bootstrap Material Design
===================================== */
$(document).ready(function() {
  $('body').bootstrapMaterialDesign();
});

/* ==================================
      Start WOW
===================================== */
$(document).ready(function () {
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();  }); 
  
/* ==================================
      Start niceScroll
===================================== */
  $(document).ready(function () {
    $("html").niceScroll({
      scrollspeed: "100",
      cursorcolor: "#fc5c7d",
      cursorborder: "3px solid #fc5c7d",
      cursorborderradius:0,
      sensitiverail: false,
      horizrailenabled: false,
  });
}); 

/* ==================================
      Start Navigation Bar
===================================== */
$(document).ready(function () {
  var header = $("#min-header"),
      height = header.height(),
      yOffset = 0,
      triggerPoint = 100;
  $('.header-height').css('height', height+'px');
  $(window).on( 'scroll', function() {
      yOffset = $(window).scrollTop();

      if (yOffset >= triggerPoint) {
        header.removeClass("animated cssanimation fadeIn");
          header.addClass("navbar-fixed-top  cssanimation animated fadeInDown");
      } else {
          header.removeClass("navbar-fixed-top cssanimation  animated fadeInDown");
          header.addClass("animated cssanimation fadeIn");
      }

  });
});

/* ==================================
      Start progress bar
===================================== */
$(document).ready(function ($) {
  function animateElements() {
      $('.progressbar').each(function () {
          var elementPos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          var percent = $(this).find('.circle').attr('data-percent');
          var animate = $(this).data('animate');
          if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
              $(this).data('animate', true);
              $(this).find('.circle').circleProgress({

                  value: percent / 100,
                  size : 140,
                  thickness: 10,
                  fill: {
                      color: '#b539a8'
                  }
              }).on('circle-animation-progress', function (event, progress, stepValue) {
                  $(this).find('.progress-value').text((stepValue*100).toFixed(0) + "%");
              }).stop();
          }
      });
  }

  animateElements();
  $(window).scroll(animateElements);
});

/* ==================================
      Start Slick slider
===================================== */
$(document).ready(function () {
    $('#testimonial-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      });
