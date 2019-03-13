


$('.js-cut').each(function(){
	var text = $(this).html().split(' '),
		len = text.length,
		result = [];

	for( var i = 0; i < len; i++ ) {
		result[i] = '<span class="hidden-title"><span>' + text[i] + '</span></span>';
	}
	$(this).html(result.join(' '));
});


function initGlobalAnimations(container, selfTriggeredElems) {
	var controller = new ScrollMagic.Controller();

	var $container = $('.' + container);
	var selfTriggeredElems = selfTriggeredElems;

	$('.page').addClass('scrollmagic-innited');


	if($container.hasClass('is-animated')) {
		$.each(selfTriggeredElems, function(index, value) {
			$(value.selector).each(function() {
				new ScrollMagic.Scene({triggerElement: this, triggerHook: value.triggerHook, reverse: false})
					.setClassToggle(this, value.class)
					// .addIndicators({name: "2 (duration: 0)"})
					.addTo(controller);
			});
		});
	}
}


	/*--- global animations init ---*/
	/*---------------------------------------------------------------------*/

	$(document).ready(function() {
		// #1
		var selfTriggeredElems = {
			el1: {
				selector: '.logo',
				triggerHook: 1,
				class: 'is-animated'
			},
			el2: {
				selector: '.menu__item',
				triggerHook: 1,
				class: 'is-animated'
			}
		};
		initGlobalAnimations( 'site__header', selfTriggeredElems );
		// #2
		var selfTriggeredElems = {
			el1: {
				selector: '.projects__container',
				triggerHook: 1,
				class: 'is-animated'
			},
			el2: {
				selector: '.menu__item',
				triggerHook: 1,
				class: 'is-animated'
			}
		};
		initGlobalAnimations( 'projects', selfTriggeredElems );

	});//close window load



