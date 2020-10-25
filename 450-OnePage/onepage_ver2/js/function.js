//아래 구문은 DOMContentLoaded를 jQuery방식으로 표현한 구문
// DOM Tree가 완성되는 시점(페이지가 로드될때)에 event를 실행한다.
//준비 핸들러
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
	//return false = evt.preventDafault + 함수 종료
}); //end of DOMContentLoaded

//준비 핸들러2
//header의 top값을 window창 세로 중앙에 위치
//단위를 쓸 경우 '', 단위를 안 쓸경우 자동으로 px 인식.
$(function() {
	$('header').css({
		top: '50%',
		marginTop: -$('header').height() / 2
	}); //inline css로 저장
});
// alert('connected');
