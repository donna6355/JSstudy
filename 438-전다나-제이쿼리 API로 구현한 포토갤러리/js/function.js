$(function() {
	const $mnu = $('.menu>li>a');
	const $img = $('.frame>a>img');

	for (let i = 0; i < $mnu.length; i++) {
		$mnu.eq(i).css({ backgroundImage: 'url(./images/th' + (i + 1) + '.png)' });
	}
	//html 기준으로 src 경로 입력하기!

	$mnu.click(function(evt) {
		evt.preventDefault();
		let imgSrc = $(this).attr('href');
		let altTxt = $(this).text();
		$img.attr({ src: imgSrc, alt: altTxt });
	});

	$mnu.mouseover(function() {
		$(this).css({ backgroundPosition: '0 -95px' });
	});
	$mnu.mouseout(function() {
		$(this).css({ backgroundPosition: '0 0' });
	});
});
