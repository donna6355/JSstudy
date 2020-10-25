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

	//함수는 반복되는 코드의 재활용 측면에서 유용하다.
	const pageAni = function(topVal) {
		$('html,body').animate({ scrollTop: topVal });
	};

	//클릭 이벤트 등록
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
		pageAni(2445);
		evt.preventDefault();
	});
	$mnu4.click(function(evt) {
		pageAni(3045);
		evt.preventDefault();
	});
	//return false = evt.preventDafault + 함수 종료 **하지만 preventDefault를 더 많이 씀
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
