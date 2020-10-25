$(function() {
	const $gnb = $('header > nav > .gnb > li');
	const $bnr = $('section > .bnr');
	const $btn = $('section > .btn > li');
	let nowIdx = 0;
	let intervalId = null;

	const bnrFn = function() {
		$btn.eq(nowIdx).addClass('on').siblings().removeClass('on');
		$bnr.animate({ left: nowIdx * -940 });
	};
	const autoPlay = function() {
		if (nowIdx === $btn.length - 1) {
			nowIdx = 0;
		} else {
			nowIdx++;
		}
		bnrFn();
		$('.auto').css({ backgroundImage: 'url(./images/pause.png)' }).addClass('play');
	};
	const autoStop = function() {
		clearInterval(intervalId);
		$('.auto').css({ backgroundImage: 'url(./images/play.png)' });
	};
	const intervalFn = function() {
		intervalId = setInterval(function() {
			autoPlay();
		}, 2000);
	};

	intervalFn();

	$gnb.on('mouseenter', function() {
		$(this).children('.lnb').show();
	});
	$gnb.on('mouseleave', function() {
		$(this).children('.lnb').hide();
	});

	$('section').on('mouseenter', function() {
		$('.prev').fadeIn(1000);
		$('.next').fadeIn(1000);
	});
	$('section').on('mouseleave', function() {
		$('.prev').fadeOut(1000);
		$('.next').fadeOut(1000);
	});

	$('.prev').on('click', function(evt) {
		evt.preventDefault();
		autoStop();
		if (nowIdx === 0) {
			nowIdx = $btn.length - 1;
		} else {
			nowIdx--;
		}
		bnrFn();
	});

	$('.next').on('click', function(evt) {
		evt.preventDefault();
		autoPlay();
		autoStop();
	});

	$btn.on('click', function(evt) {
		nowIdx = $btn.index(this);
		autoStop();
		bnrFn();
	});

	$('.auto').on('click', function(evt) {
		evt.preventDefault();
		if ($(this).hasClass('play')) {
			autoStop();
			$(this).removeClass('play');
		} else {
			$(this).addClass('play');
			intervalFn();
		}
	});
});
