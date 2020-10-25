$(function() {
	const $indicators = $('.mom-slides-pagination > li > a');
	let nowIdx = 0;

	//클릭이벤트 등록
	$indicators.click(function(evt) {
		nowIdx = $indicators.index(this);

		$('.mom-slides-container').stop().animate({
			left: -1200 * nowIdx
		});

		$(this).parent().addClass('on').siblings().removeClass('on');

		evt.preventDefault();
	});
});
