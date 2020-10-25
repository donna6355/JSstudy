$(function() {
	const $menu = $('.gnb>li>a');

	const $topVal = [];
	for (i = 0; i < $('article').length; i++) {
		$topVal[i] = $('article').eq(i).offset().top;
	}
	const $docu = $('html,body');

	$menu.eq(0).parent().addClass('active');
	$docu.animate({ scrollTop: $topVal[0] });

	$menu.click(function(click) {
		click.preventDefault();
		let $index = $menu.index(this);
		$docu.animate({ scrollTop: $topVal[$index] });
	});

	$(window).scroll(function() {
		let $scroll = $(window).scrollTop();
		for (let i = 0; i < $menu.length; i++) {
			if ($scroll >= $topVal[i]) {
				$menu.eq(i).parent().addClass('active').siblings().removeClass('active');
			}
		}
	});

	// console.log($topVal);
});
