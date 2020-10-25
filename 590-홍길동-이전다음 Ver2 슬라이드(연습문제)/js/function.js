$(function() {
	const $nav = $('nav>ul>li>a');
	const $slide = $('.slide');
	const $prev = $('.slideBtn:nth-of-type(1)');
	const $next = $('.slideBtn:nth-of-type(2)');
	const aniCls = function(who1, val, who2) {
		who1.stop().animate({ left: val * -600 });
		who2.parent().addClass('on').siblings().removeClass('on');
	};
	let nowIdx = 0;
	// const parCls = function(who) {
	// 	who.parent().addClass('on').siblings().removeClass('on');
	// };
	// const sldAniLft = function(who, val) {
	// 	who.stop().animate({ left: val * -600 });
	// };

	$nav.on('click', function(evt) {
		evt.preventDefault();
		nowIdx = $nav.index(this);
		aniCls($slide, nowIdx, $(this));
		// parCls($(this));
		// sldAniLft($slide, nowIdx);
		// $slide.stop().animate({ left: nowIdx * -600 });
		// $(this).parent().addClass('on').siblings().removeClass('on');
	});

	$prev.on('click', function(evt) {
		evt.preventDefault();
		if (nowIdx === 0) {
			nowIdx = 5;
			aniCls($slide, nowIdx, $nav.eq(nowIdx));
			// sldAniLft($slide, nowIdx);
			// parCls($nav.eq(nowIdx));
			// $slide.stop().animate({ left: nowIdx * -600 });
			// $nav.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		} else {
			nowIdx -= 1;
			aniCls($slide, nowIdx, $nav.eq(nowIdx));
			// parCls($nav.eq(nowIdx));
			// sldAniLft($slide, nowIdx);
			// $slide.stop().animate({ left: nowIdx * -600 });
			// $nav.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		}
	});
	$next.on('click', function(evt) {
		evt.preventDefault();
		if (nowIdx === 5) {
			nowIdx = 0;
			aniCls($slide, nowIdx, $nav.eq(nowIdx));
			// parCls($nav.eq(nowIdx));
			// sldAniLft($slide, nowIdx);
			// $slide.stop().animate({ left: nowIdx * -600 });
			// $nav.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		} else {
			nowIdx += 1;
			aniCls($slide, nowIdx, $nav.eq(nowIdx));
			// parCls($nav.eq(nowIdx));
			// sldAniLft($slide, nowIdx);
			// $slide.stop().animate({ left: nowIdx * -600 });
			// $nav.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		}
	});
});
