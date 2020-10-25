$(function() {
	const $indicator = $('.slides > .slides-pagination > li > a');
	const $slides = $('.slides > .slides-container > li');
	const $btnAuto = $('.slides > .slides-btn');
	let nowIdx = Math.floor(Math.random() * 9); //0~8 정수값
	let intervalId = null;

	const fadeFn = function() {
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		$slides.filter('.on').stop().fadeOut(1000).removeClass('on');
		$slides.eq(nowIdx).stop().fadeIn(1000).addClass('on');
	};

	const nextIdx = function() {
		if (nowIdx < 8) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}
	};
	//autoplay
	const autoPlay = function() {
		intervalId = setInterval(function() {
			//trigger 이벤트 강제발생 API
			// $('.slides-next').trigger('click');
			nextIdx();
			fadeFn();
		}, 2000);
		$btnAuto.addClass('pause').text('일시정지');
	};
	//autoplay pause
	const autoStop = function() {
		clearInterval(intervalId);
		$btnAuto.removeClass('pause').text('자동재생');
	};

	$indicator.eq(nowIdx).parent().addClass('on');
	$slides.eq(nowIdx).addClass('on').show();

	autoPlay();

	$indicator.on('click', function(evt) {
		nowIdx = $indicator.index(this);
		fadeFn();
		evt.preventDefault();
		autoStop();
	});

	$('.slides-next').on('click', function(evt) {
		nextIdx();
		fadeFn();
		autoStop();
		evt.preventDefault();
	});
	$('.slides-prev').on('click', function(evt) {
		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 8;
		}
		fadeFn();
		autoStop();
		evt.preventDefault();
	});
	//autoplay click event
	$btnAuto.on('click', function(evt) {
		evt.preventDefault();
		if ($(this).hasClass('pause')) {
			autoStop();
		} else {
			autoPlay();
		}
	});
});
