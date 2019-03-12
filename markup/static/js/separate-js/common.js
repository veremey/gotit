$(document).ready(function() {
	scrollDirection();
	// map
	if($('#map').length){
		initMap();
	}


	$('.projects__container').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		speed: 600,
		fade: true,
		infinite: true,
		dots: false,
		arrows: true,
		prevArrow: '.projects__prev',
		nextArrow: '.projects__next',
		easing: 'ease-in-out',
		pauseOnHover: false,
	});


	$('.sentence__carusel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// infinite: false,
		dots: false,
		lazyLoad: 'progressive',
		touchThreshold: 8,
		// adaptiveHeight: true,
		arrows: true,
		variableWidth: true,
		prevArrow: '.sentence__prev',
		nextArrow: '.sentence__next',
		easing: 'ease-in-out',
		swipeToSlide: true
	});


	$('.case-project__items').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		// infinite: false,
		dots: false,
		touchThreshold: 8,
		arrows: true,
		prevArrow: '.case-project__prev',
		nextArrow: '.case-project__next',
		easing: 'ease-in-out',
		swipeToSlide: true
	});

	// header menu

	$('.menu').click(function(){
		$(this).toggleClass('active');
		$(this).find('.menu__btn').toggleClass('active');
	});

});

if ($('#hero').length) {
	VANTA.DOTS({
		el: "#hero",
		color: 0xcacaca,
		backgroundColor: 0xffffff,
		size: 4.2,
		spacing: 18.00
	})
}
// add vanila titlt
	VanillaTilt.init(document.querySelectorAll("[appdatatilt]"));

// type javascript
if ($('.js-type').length) {
	var typed = new Typed('.js-type', {
		strings: ['live our brand', 'are collaborative', 'have integrity', 'are innovative'],
		typeSpeed: 60,
		backSpeed: 40,
		backDelay: 2500,
		loop: true
	});
}
// type blur text
if ($('.js-blur').length) {
	var text = ['Dedicated', 'Supportive', 'Responsive', 'Innovative', 'Supportive', 'Integrity', 'Collaborative'];
	// var counter = 0;
	// var elem = $(".js-blur");
	// var inst = setInterval(change, 3000);

	// function change() {
	var counter = text.length - 1,
		previousSkill = $(".js-blur"),
		arraylength = text.length - 1;

	function display_skills() {
		if (counter === arraylength) {
			counter = 0;
		}
		else {
			counter++;
		}
		previousSkill.html(text[counter]);
	}


	setInterval(function() {
		$('.js-blur').removeClass('fade-in');
		setTimeout(function(){
			$('.js-blur').addClass('fade-in');
			display_skills();
		}, 3000);
	}, 6000);

	// setInterval(function() {
	// 	$('.js-blur').addClass('fade-in');
	// }, 9200);


	// var rmClass = setInterval(function() {
	// 	$('.js-blur').removeClass('fade-in');
	// 	newClass();
	// }, 3000);


	// setInterval(function() {
	// 	display_skills();
	// }, 6000);


// setTimeout
	// setInterval(function() {
	//   display_skills();
	// }, 6000);


	// }
}


$('.projects__container').on('afterChange', function(slick, currentSlide, nextSlide){

	var maxSlideIndex = currentSlide.slideCount ;
	var currentSlideIndex = currentSlide.currentSlide+ 1;
	var nextSlideIndex = currentSlide.currentSlide + 1;
	var prevSlideIndex = currentSlide.currentSlide - 1;
	var self = $(this);

	if(nextSlideIndex == maxSlideIndex){
		nextSlideIndex = 0;
		changeTitle(self,prevSlideIndex, nextSlideIndex);
	}
	if(currentSlide.currentSlide == 0 ){
		prevSlideIndex = maxSlideIndex - 1 ;
		changeTitle(self,prevSlideIndex, nextSlideIndex);
	}
	changeTitle(self,prevSlideIndex, nextSlideIndex);

});


function changeTitle(self, prev, next){
	var prevBtn = self.parent().find('.projects__prev span');
	var nextBtn = self.parent().find('.projects__next span');
	var prevtText = $('[data-slick-index='+prev+']').find('.item__title').text();
	var nextText = $('[data-slick-index='+next+']').find('.item__title').text();
	nextBtn.text(nextText);
	prevBtn.text(prevtText);
}

function slickFadeIn() {
	var slider = $(['data-slickFadeIn']);
	$('.projects__container').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: true,
	});
}

//  get scroll direction
function scrollDirection () {
	$('body').on('mousewheel', function(e){
		var ev = e.originalEvent.wheelDeltaY;
		var offTop = $(window).scrollTop();
		if(ev > 0 || offTop<=80) {
			//scroll down
			$('.site').removeClass('site_header-hidden');
			$('.site').addClass('site_header-fixed');
		} else {
			//scroll up
			$('.site').addClass('site_header-fixed site_header-hidden');
		}
		if( offTop<=80) {
			$('.site').removeClass('site_header-fixed site_header-hidden');
		}
	});
}

function goNextSection(){
	var offTop = $(this).parents('section').next('section').offset().top;

	$('html, body').animate({scrollTop: offTop}, 1000);
}

function goTop(){
	$('html, body').animate({scrollTop: 0}, 1000);
}

$('.hero .arrow').click(goNextSection);
$('.site__footer .arrow').click(goTop);


function initMap() {
	var styledMapType = new google.maps.StyledMapType(
		[
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#444444"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"color": "#f2f2f2"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 45
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"color": "#6e7b83"
					},
					{
						"visibility": "on"
					}
				]
			}
		],
		{name: 'Styled Map'});

	var uluru = {lat: 41.8854268, lng: -87.6372589,};
	var center = {lat: 41.8854268, lng: -87.6372589,};
	var centerMap = ($(document).width() > 800 ) ? center : uluru
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: centerMap
		// draggable: false,
		// gestureHandling: 'none',
		// zoomControl: false
	});
	var image = 'static/img/content/icon-map.png';
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		// icon: image
		});

	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
}
