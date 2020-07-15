jQuery(document).ready(function($){
	var ww = $(window).width();

	$('.menu-toggle').click(function(){
		$('#site-navigation-wrap').toggleClass('toggled');
	});

	$('#primary-menu > li.menu-item-has-children').append('<span class="mobile-sub-toggle" />');
	$('.mobile-sub-toggle').click(function(){
		$(this).toggleClass('toggled');
		$(this).parent('.menu-item-has-children').find('.sub-menu').fadeToggle();
	});

// BEGIN CROPPING FUNCTIONS
	function initCrop(){
		function runCrop(){
			var crops = [];
			container = $('.ig-container');
			
			container.each(function(){
				var containerWidth = $(this).outerWidth();
				var el = $(this).find('.crop-wrap');
				var elCount = el.length;
				if($(this).hasClass('flex-col')){
					size = containerWidth;
				} else if ($(this).hasClass('slider')) {
					var num = $(this).data('slide-count');

					if(ww > 600){
						size = (containerWidth / num) - 20;
					} else {
						size = (containerWidth / (num / 2)) - 20;
					}

				} else {
					size = containerWidth / elCount;
				}

				console.log(size);

				el.each(function(){
					$(this).width(size);
					$(this).height(size);
				});
			});
		}

		runCrop();

		$(window).resize(function(){
			ww = $(window).width();
			runCrop();	
		});
	}

	initCrop();
// END CROPPING FUNCTIONS


// SOCIAL SHARING BUTTONS
	function runSocial(){
		var shareBlocks = $('.social-share');
		var alreadyShared = [];

		shareBlocks.each(function(){
			var shareBlock = $(this);
			var shareID = $(this).attr('id');

			if($.inArray(shareID,alreadyShared)){
				$(this).find('.share').ShareLink({
			        title: shareBlock.find('input.title').val(),
			        text: shareBlock.find('input.title').val(),
			        image: shareBlock.find('input.image').val(),
			        url: shareBlock.find('input.url').val()
			    });

			    alreadyShared.push($(this).attr('id'));
			}
		});
	}

	runSocial();

// INSTAGRAM HOVER
	$('#instagram-hover').mouseenter(function(){
		$('#instafeed')
			.fadeIn()
			.css({
				'display' : 'flex'
			});
	});
	$('#masthead').mouseleave(function(){
		$('#instafeed').fadeOut();
	});


// CUSTOM POPUPS
	var popups = $('.popup-modal');

	popups.each(function(){
		var currentPopup = $(this);
		var popupTrigger = currentPopup.data('trigger');

		$('.' + popupTrigger).click(function(){
			currentPopup.fadeToggle(200);
		});

		currentPopup.find('#popup-close').click(function(){
			currentPopup.fadeToggle(200);
		});
	});


// SUBSCRIBE DROPDOWN
	// $('#subscribe-wrapper-nav').mouseenter(function(){
	// 	$('#subscribe-banner').fadeToggle(200);
	// });

	// $('#subscribe-banner').mouseleave(function(){
	// 	$('#subscribe-banner').fadeToggle(200);
	// });


// MAKE THE RELATED POSTS BTN SAME HEIGHT AS IMAGES
	$matchHeight = $('.related-post img').height();
	$width = $('.related-post').width();
	$btnWidth = $('.related-post .btn').width();
	$matchWidth = (($width - $btnWidth) / 2) - 10;

	$('.popular-posts-title').height($matchHeight);
	$('.related-post .btn').css('left',$matchWidth);


// ADD CLASS FOR HEADER STYLE ON SCROLL
	// var waypoints = $('#waypoint').waypoint(function(direction) {
	//   $('#site-navigation-wrap').toggleClass('dark_nav');
	// });

// FEATURED POSTS SLIDER
	var pArrow = '<img class="slick-prev custom-arrow" src="' + template_path + '/images/arrow-left.png" />';
	var nArrow = '<img class="slick-next custom-arrow" src="' + template_path + '/images/arrow-right.png" />';

	$('.cats-slider').slick({
		infinite: true,
		centerMode: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: pArrow,
		nextArrow: nArrow,
		responsive: [
		    {
		      breakpoint: 720,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: false
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
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		]
	});



	// function igSlider() {
	// 	$('#sbi_images').slick({
	// 		infinite: true,
	// 		centerMode: false,
	// 		slidesToShow: 4,
	// 		slidesToScroll: 1,
	// 		prevArrow: pArrow,
	// 		nextArrow: nArrow,
	// 		responsive: [	
	// 		    {
	// 		      breakpoint: 600,
	// 		      settings: {
	// 		        slidesToShow: 2,
	// 		        slidesToScroll: 1
	// 		      }
	// 		    }
	// 		]
	// 	});
	// }

	// setTimeout(function(){
	// 	igSlider();
	// }, 3000);

	$('.featured-posts-wrap').slick({
		infinite: true,
		centerMode: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<i class="slick-prev slick-arrow fa fa-caret-left" aria-hidden="true"></i>',
		nextArrow: '<i class="slick-next slick-arrow fa fa-caret-right" aria-hidden="true"></i>',
		responsive: [
		    {
		      breakpoint: 770,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: false
		      }
		    },
		    // {
		    //   breakpoint: 600,
		    //   settings: {
		    //     slidesToShow: 2,
		    //     slidesToScroll: 2
		    //   }
		    // },
		    // {
		    //   breakpoint: 480,
		    //   settings: {
		    //     slidesToShow: 1,
		    //     slidesToScroll: 1
		    //   }
		    // }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		]
	});

// CLICK TO SHOW COMMENT FORM
	$('#comment-btn').click(function(){
		$('#comments').toggleClass('show');
	});


	function runTabSection(){
		tabs = $('.top-pick-tab');
		codes = $('.top-pick-code');

		tabs.click(function(){
			tabID = $(this).data('count');

			$('.top-picks-tabs').find('.active-tab').removeClass('active-tab');
			$(this).addClass('active-tab');

			$('.top-picks-codes').find('.top-pick-code.toggled').removeClass('toggled').fadeOut('fast', function(){
				$('.top-picks-codes').find('.top-pick-code[data-count="' + tabID + '"]').fadeIn('fast').addClass('toggled');
			});


		});
	}

	runTabSection();

});