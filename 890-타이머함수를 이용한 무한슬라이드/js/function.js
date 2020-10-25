//DOMContentLoaded - DOM Tree 구성이 완료된 시점

$(function() {
	const $container = $('.slides-container');
	const moveFn = function() {
		const $slides = $container.children();
		const $first = $slides.eq(0);
		const $second = $slides.eq(1);
		$second.animate({ left: 0 }, 1000, function() {
			$first.css({ left: 638 });
			$first.appendTo($container);
		});
	};
	//이미지, 텍스트 등의 컨텐츠가 화면에 나타난 시점
	$(window).on('load', function() {
		setInterval(moveFn, 2000);
	});
});
