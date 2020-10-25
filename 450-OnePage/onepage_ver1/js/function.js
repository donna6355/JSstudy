//아래 구문은 DOMContentLoaded를 jQuery방식으로 표현한 구문
// DOM Tree가 완성되는 시점(페이지가 로드될때)에 event를 실행한다.

$(function() {
	//DOM요소 셀렉팅 - jQuery 방식
	const $mnu0 = $('.mnu0');
	const $mnu1 = $('.mnu1');
	const $mnu2 = $('.mnu2');
	const $mnu3 = $('.mnu3');
	const $mnu4 = $('.mnu4');

	//클릭 이벤트 등록
	$mnu0.click(function(evt) {
		evt.preventDefault();
		// alert('connected');
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
}); //end of DOMContentLoaded

// alert('connected');
