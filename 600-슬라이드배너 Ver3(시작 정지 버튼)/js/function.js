$(function() {
	//declare var
	const $thmbs = $('#slides>.slides-topbg>.slides-pagination>li>a');
	const $container = $('#slides>.slides-container');
	let nowIdx = 0;

	//declare Fn
	const moveFn = function() {
		$thmbs.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		$container.stop().animate({ left: nowIdx * -708 });
		$('#slides>.slides-topbg>.page>span>strong').text('현재 ' + (nowIdx + 1));
	};

	//Event statement
	$thmbs.on('click', function(evt) {
		evt.preventDefault();
		nowIdx = $thmbs.index(this);
		moveFn();
	});

	$('#slides>.slides-previous').on('click', function(evt) {
		evt.preventDefault();
		if (nowIdx === 0) {
			nowIdx = 7;
			moveFn();
		} else {
			nowIdx -= 1;
			moveFn();
		}
	});

	$('#slides>.slides-next').on('click', function(evt) {
		evt.preventDefault();
		if (nowIdx === 7) {
			nowIdx = 0;
			moveFn();
		} else {
			nowIdx += 1;
			moveFn();
		}
	});
});
