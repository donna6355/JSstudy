$(function() {
	const $sldCont = $('.slide-cont');
	const $sldBtn = $('.slide-btn>li>a');

	$sldBtn.click(function(evt) {
		evt.preventDefault();
		$(this).parent().addClass('active').siblings().removeClass('active');
		$sldCont.stop().animate({ left: $sldBtn.index(this) * -1300 }, 2000);
	});
});
