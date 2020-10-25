$(function() {
	const $slides = $('.slides >.slides-container>li');
	const $indicator = $('.slides > .slides-indicator > li>a');
	let nowIdx = 0;

	const fadeFn = function() {
		//button event
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//slides change
		$slides.filter('.on').stop().fadeOut(1000).removeClass('on');
		$slides.eq(nowIdx).stop().fadeIn(1000).addClass('on');
	};

	// setInterval(function() {
	// 	if (nowIdx === $slides.length - 1) {
	// 		nowIdx = 0;
	// 	} else {
	// 		nowIdx++;
	// 	}
	// 	fadeFn();
	// }, 3000);

	$indicator.on('click', function(evt) {
		evt.preventDefault();
		nowIdx = $indicator.index(this);
		fadeFn();
	});

	$('.slides-prev').on('click', function(evt) {
		evt.preventDefault();
		if (nowIdx === 0) {
			nowIdx = $slides.length - 1;
		} else {
			nowIdx--;
		}
		fadeFn();
	});

	$('.slides-next').on('click', function(evt) {
		evt.preventDefault();
		if (nowIdx === $slides.length - 1) {
			nowIdx = 0;
		} else {
			nowIdx++;
		}
		fadeFn();
	});
});
