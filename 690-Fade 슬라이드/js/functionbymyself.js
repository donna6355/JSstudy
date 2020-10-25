$(function() {
	const $slide = $('.slides>.slides-container>li');
	const $indicator = $('.slides>.slides-indicator>li>a');
	let curIdx = 0;

	$indicator.on('click', function(evt) {
		evt.preventDefault();
		curIdx = $indicator.index(this);
		$indicator.eq(curIdx).parent().addClass('on').siblings().removeClass('on');
		$slide.filter('on').stop().fadeOut(1000).removeClass('on');
		$slide.eq(curIdx).stop().fadeIn(1000).addClass('on');
	});
});
