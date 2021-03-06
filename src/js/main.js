$(function () {	

	// FIXED__HEADER_&_NAVBAR
	$(window).on('scroll', function() {
		if ( $(this).scrollTop() > 75 ) {
			$('.header__top .brand__title').fadeOut(300);
		} else {
	      	$('.header__top .brand__title').fadeIn(300);
		}
	});
	
	$(window).on('scroll', function() {
		if ( $(this).scrollTop() > 75 && $(this).scrollTop() < 240 ) {
			$('.header__top .brand__logo').css('opacity','.2');
		} else {
			$('.header__top .brand__logo').css('opacity','1');
		}
	});
	
	var position = $(".nav-section").offset().top - $('.header__top').height();
	
	$(window).on('scroll', function() {
		if ( $(this).scrollTop() > position ) {  
			$('.header__top').addClass('scroll-down');
			$('.header__top .brand__logo').attr('src', 'img/logo-icon__inverse.png');
			
			$('.nav-section').addClass('fix-t');
			$('.navbar-toggler').addClass('fixed');
		} else {
			$('.header__top').removeClass('scroll-down');
			$('.header__top .brand__logo').attr('src', 'img/logo-icon.png');
			
			$('.navbar-toggler').removeClass('fixed');
			$('.nav-section').removeClass('fix-t');
		}		
	});
	// END --> FIXED__HEADER_&_NAVBAR	
	
	
	
	// LIKES__BUTTON	
	$(`.btn__like`).on("click", function(e) {
		e.preventDefault();
		
		let likes = $(this).find('.like__quantity').html();
		
		$(this).toggleClass('liked');
		$(this).hasClass('liked') ? likes++ : likes-- ;
		
		$(this).find('.like__quantity').html(likes);	
    });
	// END --> LIKES__BUTTON	

});
