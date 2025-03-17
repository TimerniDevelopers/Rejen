(function($) {
    "use strict";
    // data-background
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
    // data-bg
    $("[data-bg-color").each(function() {
        $(this).css("background", $(this).attr("data-bg-color"))
    });
    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanExpand: ['<i class="fas fa-plus"></i>'],
    });
    ////////////////////////////////////////////////////
    //  Sidebar Js
    $(".sidebar-toggle-btn").on("click", function() {
        $(".sidebar__area").addClass("sidebar-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".sidebar__close-btn").on("click", function() {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });

    $(".body-overlay").on("click", function() {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });


    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });


    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".menu-area").removeClass("sticky");
        } else {
            $(".menu-area").addClass("sticky");
        }
    });



  



    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });

    //LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
  




    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    ////////////////////////////////////////////////////
    //  Counter Js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // WOW active
    new WOW().init();


    

    // PreLoader Js
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });


	// Banner Carousel
	$('.slider-one__carousel').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        dots: false,
        nav: true,
        navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
        animateOut: 'slideOutDown',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: false
    });

    // if ($('.slider-one__carousel').length) {
    //     var slideOneCarousel = $('.slider-one__carousel');

    //     slideOneCarousel.owlCarousel({
    //         loop: false,
    //         items: 1,
    //         margin: 0,
    //         dots: true,
    //         nav: true,
    //         navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
    //         animateOut: 'slideOutDown',
    //         animateIn: 'fadeIn',
    //         active: true,
    //         smartSpeed: 1000,
    //         autoplay: false
    //     });   
    // }

     

	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

    // new js 
  
   // Magnific popup
   $('.video-icon').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
            youtube: {
                index: 'https://www.youtube.com/',

                id: 'v=',
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            }

        },
        srcAction: 'iframe_src',
    }
    });  
  
  

})(jQuery);

