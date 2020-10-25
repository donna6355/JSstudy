//아래구문 DOMContentLoaded를 제이쿼리 방식으로 표현한 구문
//준비핸들러
$(function() {
	//1. DOM 요소 셀렉팅 - 제이쿼리방식$('');
	const $mnu0 = $('.mnu0');
	const $mnu1 = $('.mnu1');
	const $mnu2 = $('.mnu2');
	const $mnu3 = $('.mnu3');
	const $mnu4 = $('.mnu4');

	//2. 이벤트 등록 - 제이쿼리 API이용하는 방식
	$mnu0.click(function(evt) {
		// alert('연결확인~!');

		$('html,body').animate(
			{
				scrollTop: 0
			},
			400
		);

		// evt.preventDefault();

		//evt.preventDefault()기능을 포함하면서 함수를 종료
		return false;
	});

	$mnu1.click(function(evt) {
		$('html,body').animate({ scrollTop: 1000 });
		// evt.preventDefault();
		return false;
	});

	$mnu2.click(function(evt) {
		$('html,body').animate({ scrollTop: 1845 });
		// evt.preventDefault();
		return false;
	});

	$mnu3.click(function(evt) {
		$('html,body').animate({ scrollTop: 2645 });
		// evt.preventDefault();
		return false;
	});

	$mnu4.click(function(evt) {
		$('html,body').animate({ scrollTop: 3245 });
		// evt.preventDefault();
		return false;
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
