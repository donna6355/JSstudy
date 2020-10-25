$(function() {
	// 서브메뉴 배경판 동적 생성
	$('header').prepend('<div class="bg_lnb"><a href="#">신제품 메뉴</a></div>');
	const $gnb = $('#gnb');
	const $lnb = $gnb.find('.lnb');
	const $bg_lnb = $('.bg_lnb');

	$gnb.on({
		mouseenter: function() {
			$bg_lnb.stop().fadeIn(50);
			$lnb.stop().fadeIn(50);
		},

		mouseleave: function() {
			$lnb.stop().fadeOut(50);
			$bg_lnb.stop().fadeOut(50);
		}
	});

	$bg_lnb.on({
		mouseenter: function() {
			$lnb.stop().fadeIn();
			$(this).stop().fadeIn();
		},

		mouseleave: function() {
			$lnb.stop().fadeOut(50);
			$(this).stop().fadeOut(50);
		}
	});
});
