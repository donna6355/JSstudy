$(function() {
	const $thumb = $('#slides>.slides-topbg>.slides-pagination>li>a');
	const $slide = $('#slides>.slides-container');
	let nowIdx = Math.floor(Math.random() * $thumb.length); //0~7;
	let intervalId = null;

	const slideFn = function() {
		$thumb.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		$slide.stop().animate({ left: nowIdx * -708 });
		$('#slides>.slides-topbg>.page>span>strong').text('현재 ' + (nowIdx + 1));
	};

	const nextFn = function() {
		if (nowIdx === $thumb.length - 1) {
			nowIdx = 0;
		} else {
			nowIdx++;
		}
		slideFn();
	};

	// Event
	console.log(nowIdx);
	slideFn();

	intervalId = setInterval(function() {
		nextFn();
	}, 2000);

	$thumb.on('click', function(evt) {
		clearInterval(intervalId);
		evt.preventDefault();
		nowIdx = $thumb.index(this);
		slideFn();
	});

	$('#slides>.slides-previous').on('click', function(evt) {
		clearInterval(intervalId);
		evt.preventDefault();
		if (nowIdx === 0) {
			nowIdx = $thumb.length - 1;
		} else {
			nowIdx--;
		}
		slideFn();
	});
	$('#slides>.slides-next').on('click', function(evt) {
		clearInterval(intervalId);
		evt.preventDefault();
		nextFn();
	});
	$('.play').on('click', function(evt) {
		evt.preventDefault();
		clearInterval(intervalId);
		intervalId = setInterval(function() {
			nextFn();
		}, 2000);
	});
	$('.pause').on('click', function(evt) {
		evt.preventDefault();
		clearInterval(intervalId);
	});
});
