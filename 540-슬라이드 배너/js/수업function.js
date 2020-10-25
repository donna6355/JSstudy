$(function() {
	const $indicators = $('.slides-indicator > li > a');

	//인디케이터에 대한 클릭이벤트 등록
	$indicators.click(function(evt) {
		//클릭한 버튼의 인덱스번호
		const nowIdx = $indicators.index(this);

		//컨테이너 이동
		$('.slides-container').stop().animate({
			left: -665 * nowIdx
		});

		//버튼 활성화표시
		$indicators.eq(nowIdx).parent().addClass('active').siblings().removeClass('active');

		evt.preventDefault();
	});
});
