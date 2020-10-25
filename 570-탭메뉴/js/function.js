$(function() {
	const $mnu = $('.gnb>li>a');
	const $atc = $('article');

	$mnu.click(function(evt) {
		evt.preventDefault();
		$atc.css({ zIndex: 0 });
		$atc.eq($mnu.index(this)).css({ zIndex: 100 });
	});
});
