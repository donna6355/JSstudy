$(function() {
	const $indi = $('.moa-slides-indicator>li>a');
	const $slide = $('.moa-slides-container');
	let nowIdx = 0;
	const moveFn = function() {
		$indi.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		$slide.stop().animate({ left: nowIdx * -100 + '%' });
	};

	$indi.on('click', function(evt) {
		evt.preventDefault();
		nowIdx = $indi.index(this);
		moveFn();
	});

	$('.moa-slides-prev').on('click', function(evt) {
		evt.preventDefault();
		if (nowIdx === 0) {
			nowIdx = 2;
			moveFn();
		} else {
			nowIdx -= 1;
			moveFn();
		}
	});
	$('.moa-slides-next').on('click', function(evt) {
		evt.preventDefault();
		if (nowIdx === 2) {
			nowIdx = 0;
			moveFn();
		} else {
			nowIdx += 1;
			moveFn();
		}
	});
});

// $(function() {
// 	const $indicators = $('.moa-slides > .moa-slides-indicator > li > a');
// 	const $container = $('.moa-slides > .moa-slides-container');
// 	const $btnNext = $('.moa-slides > .moa-slides-next');
// 	const $btnPrev = $('.moa-slides > .moa-slides-prev');

// 	let nowIdx = 0;

// 	$indicators.on('click', function(evt) {
// 		evt.preventDefault();
// 		nowIdx = $indicators.index(this);
// 		$(this).parent().addClass('on').siblings().removeClass('on');
// 		$container.stop().animate({ left: nowIdx * -100 + '%' }, 400);
// 	});

// 	$btnPrev.on('click', function(evt) {
// 		evt.preventDefault();
// 		//현재 nowIdx가 0보다 크면 -1, 0이면 2;

// 		if (nowIdx === 0) {
// 			nowIdx = 2;
// 			$container.stop().animate({ left: nowIdx * -100 + '%' });
// 			$indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
// 		} else {
// 			nowIdx -= 1;
// 			$container.stop().animate({ left: nowIdx * -100 + '%' });
// 			$indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
// 		}
// 	});
// 	$btnNext.on('click', function(evt) {
// 		evt.preventDefault();
// 		//현재 nowIdx가 2보다 작으면 +1, 2이면 0;
// 		if (nowIdx === 2) {
// 			nowIdx = 0;
// 			$container.stop().animate({ left: nowIdx * -100 + '%' });
// 			$indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
// 		} else {
// 			nowIdx += 1;
// 			$container.stop().animate({ left: nowIdx * -100 + '%' });
// 			$indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
// 		}
// 	});
// });
