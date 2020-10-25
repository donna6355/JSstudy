$(function() {
	const $indicators = $('.moa-slides-indicator>li>a');
	const $container = $('.moa-slides-container');
	let nowIdx = 0;
	$indicators.on('click', function(evt) {
		evt.preventDefault();
		nowIdx = $indicators.index(this);
		$container.stop().animate({ left: nowIdx * -100 + '%' });
		$(this).parent().addClass('on').siblings().removeClass('on');
	});
});
