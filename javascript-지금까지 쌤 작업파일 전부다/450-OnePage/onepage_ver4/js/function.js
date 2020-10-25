//아래구문 DOMContentLoaded를 제이쿼리 방식으로 표현한 구문
//준비핸들러
$(function() {
	const $header = $('header');

	//header의 top값을 window창 세로 중앙에 위치
	$header.css({
		top: '50%',
		marginTop: -$header.height() / 2
	});

	//1. DOM 요소 셀렉팅 - 제이쿼리방식$('');
	const $mnu0 = $('.mnu0');
	const $mnu1 = $('.mnu1');
	const $mnu2 = $('.mnu2');
	const $mnu3 = $('.mnu3');
	const $mnu4 = $('.mnu4');

	/**
	 * 배열을 이용해서 유동적인 데이터값을 한꺼번에 처리 가능* 
	 * 
	 * 배열은 저장할 변수값들이 일정한 패턴을 가지고 있지 않을때 
	 * 사용하면 매우 편리하게 값을 컨트롤 할 수 있다.
	 */

	//각 article 요소의 top 값
	const articleTopVal = [0, 1000, 1845, 2645, 3245];

	//2.함수는 반복되는 코드의 재활용 측면에서 유용하다.
	const pageAni = function(topVal) {
		$('html,body').animate({ scrollTop: topVal });
	};

	//3. 이벤트 등록 - 제이쿼리 API이용하는 방식
	$mnu0.click(function(evt) {
		pageAni(articleTopVal[0]);
		evt.preventDefault();
	});

	$mnu1.click(function(evt) {
		pageAni(articleTopVal[1]);
		evt.preventDefault();
	});

	$mnu2.click(function(evt) {
		pageAni(articleTopVal[2]);
		evt.preventDefault();
	});

	$mnu3.click(function(evt) {
		pageAni(articleTopVal[3]);
		evt.preventDefault();
	});

	$mnu4.click(function(evt) {
		pageAni(articleTopVal[4]);
		evt.preventDefault();
	});
});
