//아래구문 DOMContentLoaded를 제이쿼리 방식으로 표현한 구문
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

		evt.preventDefault();
		$('html,body').animate(
			{
				scrollTop: 0
			},
			400
		);
	});

	$mnu1.click(function(evt) {
		evt.preventDefault();
		$('html,body').animate({ scrollTop: 1000 });
	});

	$mnu2.click(function(evt) {
		evt.preventDefault();
		$('html,body').animate({ scrollTop: 1845 });
	});

	$mnu3.click(function(evt) {
		evt.preventDefault();
		$('html,body').animate({ scrollTop: 2645 });
	});

	$mnu4.click(function(evt) {
		evt.preventDefault();
		$('html,body').animate({ scrollTop: 3245 });
	});
});
