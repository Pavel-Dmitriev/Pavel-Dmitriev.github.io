$(document).ready(function () {
	// Плавная прокрутка до якорей
	$('nav ul li a').click(function (e) {
		e.preventDefault();

		let href = $(this).attr('href');
		let offset = $(href).offset().top;

		$('body, html').animate({
			scrollTop: offset,
		}, 500);
	});

	function disableScroll() {
		$('body').addClass("fixed");
	}

	function enableScroll() {
		$("body").removeClass("fixed");
	}

	// Всплывающее окно по нажатию кнопки "Заказать звонок"
	$('.call-button, .icon-call').click(function () {
		$('.popup-container-one').fadeIn(1500, disableScroll);
	});

	$('.popup-container-one').click(function (event) {
		if (event.target == this) {
			$(this).fadeOut(400, enableScroll);
		}
	});
	// Всплывающее окно по нажатию кнопки "Узнать больше, узнать стоимость и заказать проект"
	$('.button').click(function () {
		$('.popup-container-two').fadeIn(1500, disableScroll);
	});

	$('.popup-container-two').click(function (event) {
		if (event.target == this) {
			$(this).fadeOut(400, enableScroll);
		}
	});
	//Бургер/крестик
	$('.menu-icon-wrapper').click(function () {
		$('.menu-icon').toggleClass('menu-icon-active')
	})
	$('.menu-icon-wrapper').click(function () {
		let navMenu = $('.items');
		if (navMenu.css('display') == 'none') {
			navMenu.fadeIn(600);
		} else {
			navMenu.fadeOut(600);
		}
	});
	$('.slider').slick({
		infinite: false,
		slidesToShow: 3,
		rows: 1,
		prevArrow: '<button class="block__arrow block__arrow_prev"></button>',
		nextArrow: '<button class="block__arrow block__arrow_next"></button>',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true
				}
			},
			{
				breakpoint: 990,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}
		]
	});
});
