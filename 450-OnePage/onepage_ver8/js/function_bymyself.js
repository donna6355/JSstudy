$(function() {
	const $mnu = $('header > nav > .gnb > li > a ');
	const topVal = [];
	let nowIdx = 0;

	const mainFn = function() {
		$('html,body').stop().animate({ scrollTop: 0 });
	};

	mainFn();
	for (let i = 0; i < $mnu.length; i++) {
		topVal[i] = $('article').eq(i).offset().top;
	}

	$mnu.on('click', function(evt) {
		evt.preventDefault();
		nowIdx = $mnu.index(this);
		$('html,body').stop().animate({ scrollTop: topVal[nowIdx] - 69 });
	});

	$('h1>a').on('click', function(evt) {
		evt.preventDefault();
		mainFn();
	});

	$(window).on('scroll', function() {
		let scrollTop = $(this).scrollTop();
		for (let i = 0; i < $mnu.length; i++) {
			if (scrollTop >= topVal[i] - 69) {
				$mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
			} else if (scrollTop < topVal[0] - 69) {
				$mnu.eq(0).parent().removeClass('on');
			}
		}
	});
});
