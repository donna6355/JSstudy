$(function() {
	const $gnb = $('#gnb');
	const $lnb = $gnb.find('.lnb');

	$gnb.on({
		mouseenter: function() {
			$lnb.stop().slideDown();
		},
		mouseleave: function() {
			$lnb.stop().slideUp();
		}
	});

	// $gnb.on('mouseover', function() {
	// 	$lnb.stop().slideDown(250);
	// });
	// $gnb.on('mouseout', function() {
	// 	$lnb.stop().slideUp(250);
	// });
});
