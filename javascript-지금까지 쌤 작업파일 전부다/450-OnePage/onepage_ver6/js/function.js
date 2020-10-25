//아래구문 DOMContentLoaded를 제이쿼리 방식으로 표현한 구문
//준비핸들러
$(function() {
	//변수선언부
	const $header = $('header');
	const $mnu = $('.gnb a');

	//이벤트 등록
	$mnu.click(function(evt) {
		//1) 몇번째 a태그를 클릭했는지? 0~4
		//2) $("html,body").animate()
		//3) 앵커태그의 기본기능 작동방지
	});

	//header의 top값을 window창 세로 중앙에 위치
	$header.css({
		top: '50%',
		marginTop: -$header.height() / 2
	});
});
