//아래구문 DOMContentLoaded를 제이쿼리 방식으로 표현한 구문
//준비핸들러
$(function() {
	//1. DOM 요소 셀렉팅 - 제이쿼리방식$('');
	const $mnu0 = $('.mnu0');
	const $mnu1 = $('.mnu1');
	const $mnu2 = $('.mnu2');
	const $mnu3 = $('.mnu3');
	const $mnu4 = $('.mnu4');

	//2.함수는 반복되는 코드의 재활용 측면에서 유용하다.
	const pageAni = function(topVal) {
		$('html,body').animate({ scrollTop: topVal });
	};

	//3. 이벤트 등록 - 제이쿼리 API이용하는 방식
	$mnu0.click(function(evt) {
		pageAni(0);
		evt.preventDefault();
	});

	$mnu1.click(function(evt) {
		pageAni(1000);
		evt.preventDefault();
	});

	$mnu2.click(function(evt) {
		pageAni(1845);
		evt.preventDefault();
	});

	$mnu3.click(function(evt) {
		pageAni(2645);
		evt.preventDefault();
	});

	$mnu4.click(function(evt) {
		pageAni(3245);
		evt.preventDefault();
	});
});

//준비핸들러2
$(function() {
	//header의 top값을 window창 세로 중앙에 위치
	$('header').css({
		top: '50%',
		marginTop: -$('header').height() / 2
	});
});
