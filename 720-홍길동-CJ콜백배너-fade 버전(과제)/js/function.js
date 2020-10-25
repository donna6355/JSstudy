$(function() {
	const $pagination = $('section > .pagination > ol > li > a');
	const $bnr = $('section > .bnr > ul > li');
	const $bnrCont = $('section > .bnr > ul > li > a:last-child');
	const $autoPlay = $('section > .bnr > .autoplay > a');
	let nowIdx = 0;
	let intervalId = null;

	const bnrFn = function() {
		$bnr.filter('.on').stop().fadeOut(1000).removeClass('on');
		$bnr.eq(nowIdx).stop().fadeIn(1000).addClass('on');
		$bnrCont
			.filter('.on')
			.stop()
			.animate({ left: -350 }, 1000)
			.removeClass('on');
		$bnrCont.eq(nowIdx).stop().animate({ left: 65 }, 1000).addClass('on');
		$pagination.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
	};
	const autoPlayFn = function() {
		intervalId = setInterval(function() {
			if (nowIdx === $bnr.length - 1) {
				nowIdx = 0;
			} else {
				nowIdx++;
			}
			bnrFn();
		}, 1500);
	};
	const pauseFn = function() {
		clearInterval(intervalId);
		$autoPlay
			.addClass('pause')
			.text('일시정지')
			.css({ backgroundPosition: '-63px -25px' });
	};

	//basic setting
	$bnr.eq(nowIdx).show().addClass('on');
	$bnrCont.eq(nowIdx).animate({ left: 65 }, 1000).addClass('on');
	$pagination.eq(nowIdx).parent().addClass('on');
	$bnr.on('click', function(evt) {
		evt.preventDefault();
	});
	$bnrCont.on('click', function(evt) {
		evt.preventDefault();
	});

	//autoPlay
	autoPlayFn();

	//pause
	$autoPlay.on('click', function(evt) {
		if ($(this).hasClass('pause')) {
			$(this)
				.removeClass('pause')
				.text('자동재생')
				.css({ backgroundPosition: '-1px -58px' });
			autoPlayFn();
		} else {
			pauseFn();
		}
		evt.preventDefault();
	});

	//pagination function
	$pagination.on('click', function(evt) {
		nowIdx = $pagination.index(this);
		bnrFn();
		evt.preventDefault();
		pauseFn();
	});

	// console.log($pagination, $bnr, $bnrCont);
});
