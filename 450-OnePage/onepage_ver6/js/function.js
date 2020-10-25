//아래구문 DOMContentLoaded를 제이쿼리 방식으로 표현한 구문
//준비핸들러
$(function() {
	//변수선언부
	const $header = $('header');
	const $mnu = $('.gnb a');

	//이벤트 등록
	$mnu.click(function(evt) {
		//1)이번에 클릭한 요소의 인덱스번호를 가져온다
		let nowIdx = $mnu.index(this);

		//2)페이지(html,body) animate
		$('html,body').animate({ scrollTop: $('article').eq(nowIdx).offset().top });

		//3)메뉴 활성화 표시
		$(this).parent().addClass('active').siblings().removeClass('active');

		//4)앵커태그의 기본기능 작동방지
		evt.preventDefault();
	});

	//header의 top값을 window창 세로 중앙에 위치
	$header.css({
		top: '50%',
		marginTop: -$header.height() / 2
	});
});
