
function responseMenu(){
	$('ul.dropdown-menu li.item').appendTo('ul.menu');
	var items = $('ul.menu li.item');
	var max_width = $('ul.menu').width() /*+ $('ul.menu li.dd_menu').outerWidth()*/;
	var width = 0;
	var hide_from = 0;

	//items.css({'width':'auto'});

	items.each(function(index){
		if (width + $(this).outerWidth() > max_width)
		{
			return false;
		}
		else
		{
			hide_from = index;
			width += $(this).outerWidth();
		}
	});
	if (hide_from < items.length - 3) {
		items.eq(hide_from).nextAll('li.item').appendTo('ul.dropdown-menu');
		//items.css({'width':(max_width / (hide_from + 1)) + 'px'});
		$('ul.menu li.dd_menu').show();
	}
	else
	{
		$('ul.menu li.dd_menu').hide();
	}
}

$(document).ready(function() {
	$('.main_menu').on('click', '.dropdown-toggle', function () {
		if ($('.dropdown-menu').css("display") == "block") {
			$('.dropdown-menu').slideUp(500);
			$(this).removeClass('active');
		 }else{
			$('.dropdown-menu').slideDown(500);
			$(this).addClass('active');
		 }
		 e.preventDefault();
	});
	
	$(window).on('load resize', function(){
		responseMenu();
	}).trigger('resize');

	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	// 
	$('.main_menu > ul > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu');
		};
	});

	if ( window.innerWidth > 600 ) {
	    $('.main_menu .submenu > a').on('click', function(e){
		    if( !$(this).parent().hasClass('show') ) {
				$(this).parent().addClass('show');  
				$(this).parent().children('ul').slideDown(500);
				e.preventDefault();
		    }else{
				$(this).parent().removeClass('show'); 
				$(this).parent().children('ul').slideUp(500);
				e.preventDefault();
			}
	    });
	};

	
	// animation
	if ( window.innerWidth>0 ) {
		$('.main_section').toggleClass("hidden");
		$('#main_slide').addClass('animated');
	};
	$(window).on('load scroll', function(){
	    $('.main_section').each(function(){
		if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.6 ) ) {
		    $(this).addClass('animated');
		}
	    });
	});
	
	// tab switching
	$('.tab_buttons span').on('click', function(){ 
		var tabs = $(this).parents('.tabs_container'),
		id = $('.tab_buttons span', tabs).index(this);
	    
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab:eq(' + id + ')', tabs).addClass('active').siblings().removeClass('active');
	    
	});



	
	$('#banner_slider .main_slider').slick({
	    slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 3,
		//infinite: false,
	    arrows: true,
	    //fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '#banner_slider .menu_slider',
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});
	$('#banner_slider .menu_slider').slick({
	    slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 3,
		//infinite: false,
	    arrows: false,
	    asNavFor: '#banner_slider .main_slider',
	    dots: false,
	    centerMode: true,
	    //vertical: true,
		focusOnSelect: true,
		speed: 500,
		useTransform: true,
		cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
	});

	$('.advantages_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 4,
	    infinite: false,
	    dots: true,
	    //focusOnSelect: true,
	    arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1301,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3,
				}
			},
			{
				breakpoint: 901,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2,
				}
			},
			
			{
				breakpoint: 551,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			},
		]
	});
	
	$(window).on('load resize', function(){
		if ( window.innerWidth>901 && $('.solutions_wrap').hasClass('slick-initialized') ) {
		  $('.solutions_wrap').slick('unslick');
		} else if ( window.innerWidth<=901 && !$('.solutions_wrap').hasClass('slick-initialized') ) {
		  $('.solutions_wrap').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    slidesToShow: 2,
			slidesToScroll: 2,
			infinite: false,
			dots: true,
			responsive: [
				{
					breakpoint: 601,
					settings: {
					  slidesToShow: 1,
					  slidesToScroll: 1,
					}
				},
			]
		  });
		}
	});

	$(window).on('load resize', function(){
		if ( window.innerWidth>1150 && $('.stages_wrap').hasClass('slick-initialized') ) {
		  $('.stages_wrap').slick('unslick');
		} else if ( window.innerWidth<=1150 && !$('.stages_wrap').hasClass('slick-initialized') ) {
		  $('.stages_wrap').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    slidesToShow: 3,
			slidesToScroll: 3,
			infinite: false,
			dots: true,
			responsive: [
				{
					breakpoint: 901,
					settings: {
					  slidesToShow: 2,
					  slidesToScroll: 2,
					}
				},
				{
					breakpoint: 601,
					settings: {
					  slidesToShow: 1,
					  slidesToScroll: 1,
					}
				},
			]
		  });
		}
	});

	$(window).on('load resize', function(){
		if ( window.innerWidth>1150 && $('.about_sections').hasClass('slick-initialized') ) {
		  $('.about_sections').slick('unslick');
		} else if ( window.innerWidth<=1150 && !$('.about_sections').hasClass('slick-initialized') ) {
		  $('.about_sections').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    slidesToShow: 3,
			slidesToScroll: 1,
			//infinite: false,
			dots: false,
			responsive: [
				{
					breakpoint: 901,
					settings: {
					  slidesToShow: 2,
					}
				},
				{
					breakpoint: 601,
					settings: {
					  slidesToShow: 1,
					}
				},
			]
		  });
		}
	});

	$(window).on('load resize', function(){
		if ( window.innerWidth>1600 && $('.services_block').hasClass('slick-initialized') ) {
		  $('.services_block').slick('unslick');
		} else if ( window.innerWidth<=1600 && !$('.services_block').hasClass('slick-initialized') ) {
		  $('.services_block').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    slidesToShow: 4,
			slidesToScroll: 1,
			//infinite: false,
			dots: false,
			responsive: [
				{
					breakpoint: 1201,
					settings: {
					  slidesToShow: 3,
					}
				},
				
				{
					breakpoint: 801,
					settings: {
					  slidesToShow: 2,
					}
				},
				{
					breakpoint: 501,
					settings: {
					  slidesToShow: 1,
					}
				},
			]
		  });
		}
	});

	$('.projects_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: true,
	    focusOnSelect: true,
	    arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});

	
	$('.partners_slider .logos_slider').slick({
	    slidesToShow: 9,
	    slidesToScroll: 9,
	    arrows: false,
	    asNavFor: '.partners_slider .reviews_slider',
	    dots: false,
	    //centerMode: true,
		//vertical: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1031,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					arrows: true,
					prevArrow: '<span class="slick-prev">&nbsp;</span>',
					nextArrow: '<span class="slick-next">&nbsp;</span>',
				}
			},
			
			{
				breakpoint: 851,
				settings: {
				  	slidesToShow: 4,
					slidesToScroll: 1,
					arrows: true,
					prevArrow: '<span class="slick-prev">&nbsp;</span>',
					nextArrow: '<span class="slick-next">&nbsp;</span>',
				}
			},
			{
				breakpoint: 551,
				settings: {
				  	slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					prevArrow: '<span class="slick-prev">&nbsp;</span>',
					nextArrow: '<span class="slick-next">&nbsp;</span>',
				}
			},
			{
				breakpoint: 451,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: true,
					prevArrow: '<span class="slick-prev">&nbsp;</span>',
					nextArrow: '<span class="slick-next">&nbsp;</span>',
				}
			},
		]
	});
	$('.partners_slider .reviews_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: true, 
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.partners_slider .logos_slider',
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});



	$('.certificates_slider').slick({
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    arrows: true,
		dots: true,
		//centerMode: true,
		//variableWidth: true,
		//infinite: true,
	    //fade: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			// {
			// 	breakpoint: 601,
			// 	settings: {
			// 	  slidesToShow: 2,
			// 	}
			// },
			{
				breakpoint: 451,
				settings: {
				  slidesToShow: 1,
				  //slidesToScroll: 1,
				}
			},
		]
	});

	$('.certificates_slider2').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: true,
		dots: true,
		//centerMode: true,
		//variableWidth: true,
		//infinite: true,
	    //fade: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 601,
				settings: {
				  slidesToShow: 2,
				}
			},
			{
				breakpoint: 451,
				settings: {
				  slidesToShow: 1,
				  //slidesToScroll: 1,
				}
			},
		]
	});

	$('.manufacture_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    //focusOnSelect: true,
	    arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1301,
				settings: {
				  slidesToShow: 3,
				}
			},
			{
				breakpoint: 751,
				settings: {
				  slidesToShow: 2,
				}
			},
			
			{
				breakpoint: 451,
				settings: {
				  slidesToShow: 1,
				}
			},
		]
	});

	$('.galery_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: true,
	    //focusOnSelect: true,
	    arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1301,
				settings: {
				  slidesToShow: 3,
				}
			},
			{
				breakpoint: 801,
				settings: {
				  slidesToShow: 2,
				}
			},
			
			{
				breakpoint: 451,
				settings: {
				  slidesToShow: 1,
				}
			},
		]
	});
	$('.filter').on('click', function(){
		$('.galery_slider')
		.slick('slickUnfilter')
		.slick('slickFilter', $(`.${$(this).data('goods')}`).closest('.slick-slide'));
	});
	$('.filter_all').on('click', function(){
		$('.galery_slider').slick('slickUnfilter');
	});

	$('.galery_filter .button').click(function(){
			$('.button').removeClass('active');
			$(this).addClass('active');
	});



	$('.images_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: true,
	    //focusOnSelect: true,
	    arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});



	$('.project_images .main_img').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.project_images .small_images',
	    responsive: [
		  {
		    breakpoint: 451,
		    settings: {
		      arrows: true,
		      prevArrow: '<span class="slick-prev">&nbsp;</span>',
		      nextArrow: '<span class="slick-next">&nbsp;</span>',
		    }
		  },
		]
	  });
	$('.project_images .small_images').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    arrows: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    asNavFor: '.project_images .main_img',
	    dots: false,
	    //centerMode: true,
	    //vertical: true,
	    focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 1200,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 1030,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		]
	});

	$( "#faq_accordion" )
      .accordion({
		heightStyle: "content",
        header: "> div > h3"
      })
      .sortable({
        axis: "y",
        handle: "h3",
        stop: function( event, ui ) {
          // IE doesn't register the blur when sorting
          // so trigger focusout handlers to remove .ui-state-focus
          ui.item.children( "h3" ).triggerHandler( "focusout" );
 
          // Refresh accordion to handle new order
          $( this ).accordion( "refresh" );
        }
    });


		
	var elem = $('#main_screen'),
	pos = elem.offset(),
	elem_left = pos.left,
	elem_top = pos.top,
	elem_width = elem.width(),
	elem_height = elem.height(),
	x_center,
	y_center;


	$('#main_screen .slide').mousemove(function(e){

		x_center = ( elem_width / 2 ) - ( e.pageX - elem_left );
		//y_center = ( elem_height / 2 ) - ( e.pageY - elem_top );

		$('.layer').each(function(){

			var speed = $(this).attr('data-speed'),
				xPos = Math.round(-1*x_center/40*speed),
				yPos = 0; //Math.round(-1*y_center/40*speed);

			// if (yPos < 0)
			//   yPos = -2*speed;
		
			$(this).css('transform', 'translate3d('+xPos+'px, '+yPos+'px, 0px)');

		});
	});

});