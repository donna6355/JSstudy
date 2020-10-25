$(function() {
	//2. 메인메뉴를 li로 선택해서 작업하는 경우(강추)
	const $gnb = $('#gnb > li');
	const $lnb = $('#gnb .lnb');

	//lnb 노출처리
	$gnb.on('mouseenter', function() {
		// const nowIdx = $(this).index();
		// $lnb.eq(nowIdx).show();

		$(this).children('.lnb').show();
	});

	//lnb 숨김처리
	$gnb.on('mouseleave', function() {
		// const nowIdx = $(this).index();
		// $lnb.eq(nowIdx).hide();

		$(this).children('.lnb').hide();
	});

	//1. 메인메뉴를 li>a로 선택해서 작업하는 경우(비추)
	//Why? 서브메뉴를 클릭하려고 a영역을 벗어나는 순간 서브메뉴가 사라지는 하자 발생!
	/*  
	const $gnb = $('#gnb > li > a');

	//lnb 노출처리
	$gnb.on('mouseover', function() {
		$(this).next().show();
	});

	//lnb 숨김처리
	$gnb.on('mouseout', function() {
		$(this).next().hide();
  });
*/
});
