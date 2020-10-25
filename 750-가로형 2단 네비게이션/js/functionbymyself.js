$(function() {
	const $gnb = $('#gnb>li');

	$gnb.on('mouseenter', function() {
		$(this).children('.lnb').show();
	});
	$gnb.on('mouseleave', function() {
		$(this).children('.lnb').hide();
	});
});
