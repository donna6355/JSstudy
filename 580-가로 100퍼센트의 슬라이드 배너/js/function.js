$(function() {
	const $slider = $('.bnr>li>a');
	const $btn = $('.btn>li>a');

	$slider.on('click', function(evt) {
		evt.preventDefault();
	});
	$btn.on('click', function(evt) {
		evt.preventDefault();
		$(this).parent().addClass('on').siblings().removeClass('on');

		let nowIdx = $btn.index(this) * -100;
		nowIdx += '%';
		$('.bnr').stop().animate({ left: nowIdx });
	});
});
