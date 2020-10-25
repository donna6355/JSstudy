$(function() {
	const $mnu = $('.gnb>li>a');

	$mnu.on('click', function(evt) {
		evt.preventDefault();
		$(this).parent().addClass('on').siblings().removeClass('on');
		$('article').hide().eq($mnu.index(this)).show();
	});
});

// $(function() {
// 	const $mnu = $('.gnb a');
// 	// $mnu.click(function(evt) {});

// 	//on :~했을때
// 	// $mnu.on('이벤트명',이벤트 핸들러(콜백함수))
// 	$mnu.on('click', function(evt) {
// 		evt.preventDefault();
// 		const nowIdx = $mnu.index(this);
// 		//메뉴 활성화
// 		$(this).parent().addClass('on').siblings().removeClass('on');

// 		//article 보여주기
// 		$('article').hide().eq(nowIdx).show();
// 	});
// });
