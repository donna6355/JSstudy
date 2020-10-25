$(function() {
	//var declarn
	const $slide = $('.slides>.slides-contents');
	const $indicator = $('.slides > .pgnt > ol > li > a ');
	let nowIdx = 0;
	let itvId = null;

	nowIdx = Math.floor(Math.random() * 10);

	//fn declare
	const slideFn = function() {
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		$slide.filter('.on').stop().fadeOut(1000).removeClass('on');
		$slide.eq(nowIdx).stop().fadeIn(1000).addClass('on');
	};

	//basic setting
	$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
	$slide.eq(nowIdx).stop().addClass('on');

	//indicator click
	$indicator.on('click', function(evt) {
		clearInterval(itvId);
		evt.preventDefault();
		nowIdx = $indicator.index(this);
		slideFn();
	});

	//prev-next btn
	$('.slides > .btn > .next').on('click', function() {
		if (nowIdx === $slide.length - 1) {
			nowIdx = 0;
		} else {
			nowIdx++;
		}
		slideFn();
	});

	$('.slides > .btn > .prev').on('click', function() {
		if (nowIdx === 0) {
			nowIdx = $slide.length - 1;
		} else {
			nowIdx--;
		}
		slideFn();
	});

	//autoplay
	itvId = setInterval(function() {
		if (nowIdx === $slide.length - 1) {
			nowIdx = 0;
		} else {
			nowIdx++;
		}
		slideFn();
	}, 3000);

	//autoplay button
	$('.autoPlay>.play').on('click', function() {
		clearInterval(itvId);
		itvId = setInterval(function() {
			if (nowIdx === $slide.length - 1) {
				nowIdx = 0;
			} else {
				nowIdx++;
			}
			slideFn();
		}, 3000);
	});
	$('.autoPlay>.pause').on('click', function() {
		clearInterval(itvId);
	});
});
