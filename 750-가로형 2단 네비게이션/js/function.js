$(function() {
	// 1. 메인메뉴를 li>a로 선택해서 작업하는 경우(비추)
	//why? 서브메뉴를 클릭하려고 a영역을 벗어나는 순간 서브메뉴가 사라지는 하자 발생.
	/*
  const $gnb = $('#gnb > li > a');
  
	$gnb.on('mouseover', function() {
		$(this).next().show();
	});

	$gnb.on('mouseleave', function() {
		$(this).next().hide();
  });
  */

	//2. 메인메뉴를 li로 선택해서 작업하는 경우(강추)

	const $gnb = $('#gnb > li');
	const $lnb = $('#gnb .lnb');

	$gnb.on('mouseenter', function() {
		// let nowIdx = $(this).index();
		// $lnb.eq(nowIdx).show();
		$(this).children('.lnb').show();
	});
	$gnb.on('mouseleave', function() {
		// let nowIdx = $(this).index();
		// $lnb.eq(nowIdx).hide();
		$(this).children('.lnb').hide();
	});
});
